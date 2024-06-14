import React from 'react';
import { Navigate } from 'react-router-dom';

import PageLoader from 'components/loaders/PageLoader';

import { useCheckUserAuth } from '../utils/hooks/useCheckUserAuth';
import UrlRestoringService from 'services/urlRestoring.service';

import { publicUrls } from 'constants/urls';

const ProtectedPublicContainer = ({ children, redirectOnAuth = publicUrls.main }) => {
  const { loading, isAuth } = useCheckUserAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (isAuth) {
    const savedUrl = UrlRestoringService.getUrl();
    const to = window.location.pathname !== savedUrl ? savedUrl : redirectOnAuth;

    return <Navigate to={to} />;
  }

  return children;
};

export default ProtectedPublicContainer;
