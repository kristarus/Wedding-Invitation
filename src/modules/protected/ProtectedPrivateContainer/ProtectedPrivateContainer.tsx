import React from 'react';
import { Navigate } from 'react-router-dom';

import PageLoader from 'components/loaders/PageLoader';

import UrlRestoringService from 'services/urlRestoring.service';
import { useCheckUserAuth } from '../utils/hooks/useCheckUserAuth';

import { publicUrls } from 'constants/urls';

import { IProtectedPrivateContainerProps } from './ProtectedPrivateContainer.types';

const ProtectedPrivateContainer = ({
  requiredRoles,
  requiredAnyRoles,
  redirectOnFail = publicUrls.main,
  redirectOnAuthorizationFail = publicUrls.main,
  saveUrlOnFail,
  fallback,
  children,
}: IProtectedPrivateContainerProps) => {
  const { loading, isAuth, isAuthorized } = useCheckUserAuth({ redirectOnFail, requiredRoles, requiredAnyRoles });

  const renderAuthFailure = () => {
    if (saveUrlOnFail) {
      UrlRestoringService.setUrl(window.location.pathname);
    }

    if (fallback) {
      return fallback;
    }

    if (redirectOnFail) {
      return <Navigate to={redirectOnFail} />;
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  if (!isAuth) {
    return renderAuthFailure();
  }

  if (!isAuthorized && fallback) {
    return renderAuthFailure();
  }

  if (!isAuthorized && redirectOnAuthorizationFail) {
    return <Navigate to={redirectOnAuthorizationFail} />;
  }

  return <>{children}</>;
};

export default ProtectedPrivateContainer;
