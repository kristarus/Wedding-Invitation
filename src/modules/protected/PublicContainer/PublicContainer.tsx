import React from 'react';

import PageLoader from 'components/loaders/PageLoader';

import { useCheckUserAuth } from '../utils/hooks/useCheckUserAuth';

const PublicContainer = ({ children }) => {
  const { loading } = useCheckUserAuth();

  if (loading) {
    return <PageLoader />;
  }

  return children;
};

export default PublicContainer;
