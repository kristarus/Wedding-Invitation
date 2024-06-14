import React from 'react';
import { useTranslation } from 'react-i18next';

import { LogoutOutlined } from '@ant-design/icons';

import auth from 'services/auth.service';

export const useUserMenuOptions = () => {
  const { t } = useTranslation();

  return [
    {
      label: t('header.menu.user.logout'),
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: auth.logout,
    },
  ];
};
