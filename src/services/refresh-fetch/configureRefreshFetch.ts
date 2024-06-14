import { publicUrls } from 'constants/urls';
import UrlRestoringService from 'services/urlRestoring.service';
import { FetchConfiguration, RequestOptions, ResponseError } from 'types/request';

function configureRefreshFetch(configuration: FetchConfiguration) {
  const { refreshToken, shouldRefreshToken, fetch } = configuration;

  let refreshingTokenPromise: Promise<void> | null = null;

  return (url: string, options?: RequestOptions) => {
    if (refreshingTokenPromise !== null) {
      return (
        refreshingTokenPromise
          .then(() => fetch(url, options))
          // Even if the refreshing fails, do the fetch so we reject with
          // error of that request
          .catch(() => fetch(url, options))
      );
    }

    return fetch(url, options).catch((error: ResponseError) => {
      if (shouldRefreshToken(error)) {
        const { disableRedirectOnFail, redirectOnFailUrl = publicUrls.main } = options;

        if (refreshingTokenPromise === null) {
          refreshingTokenPromise = new Promise((resolve, reject) => {
            refreshToken()
              .then(() => {
                refreshingTokenPromise = null;
                resolve();
              })
              .catch(refreshTokenError => {
                if (window.location.pathname !== redirectOnFailUrl) {
                  UrlRestoringService.setUrl(window.location.pathname);

                  if (!disableRedirectOnFail) {
                    window.location.href = redirectOnFailUrl;
                  }
                }
                refreshingTokenPromise = null;
                reject(refreshTokenError);
              });
          });
        }

        return refreshingTokenPromise
          .catch(() => {
            // If refreshing fails, continue with original error
            throw error;
          })
          .then(() => fetch(url, options));
      } else {
        throw error;
      }
    });
  };
}

export default configureRefreshFetch;
