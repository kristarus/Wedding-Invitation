import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import request from 'services/request.service';
import UrlRestoringService from 'services/urlRestoring.service';
import { userHasPermission } from '../userHasPermission';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { setAuth } from 'store/reducers/UserSlice';

import { apiUrls } from 'constants/urls';

import { Roles } from 'types/auth';

interface CheckUserAuthOptionsType {
  redirectOnFail?: string;
  requiredRoles?: Roles[];
  requiredAnyRoles?: Roles[];
}

export const useCheckUserAuth = (options: CheckUserAuthOptionsType = {}) => {
  const dispatch = useDispatch();
  const userAuth = useAppSelector(state => state.user);

  const { finished, pending, user } = userAuth;
  const { redirectOnFail, requiredRoles, requiredAnyRoles } = options;

  const authRequestWasSent = pending || finished;

  const userIsAuthenticated = finished && user !== null;

  const userIsAuthorized = userHasPermission({ user, requiredRoles, requiredAnyRoles });

  const ensureAuthRequestWasSent = useCallback(async () => {
    if (!authRequestWasSent) {
      if (redirectOnFail) {
        UrlRestoringService.setRedirectUrl(redirectOnFail);
      }

      try {
        dispatch(setAuth({ ...userAuth, pending: true }));

        const userProfile = await request(apiUrls.auth.currentUser, { disableRedirectOnFail: true });

        dispatch(setAuth({ user: userProfile, pending: false, finished: true }));
      } catch (e) {
        dispatch(setAuth({ user: null, pending: false, finished: true }));
      }
    }
  }, [authRequestWasSent, dispatch, redirectOnFail, userAuth]);

  useEffect(() => {
    ensureAuthRequestWasSent();
  }, [ensureAuthRequestWasSent]);

  return { loading: !authRequestWasSent || pending, isAuth: userIsAuthenticated, isAuthorized: userIsAuthorized };
};
