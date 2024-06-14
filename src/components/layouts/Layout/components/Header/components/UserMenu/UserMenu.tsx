import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import HeaderSelect from '../common/HeaderSelect';
import { ProtectedPrivateContainer } from 'modules';

import { useUserMenuOptions } from './hooks/useUserMenuOptions';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import { useTheme } from 'hooks/useTheme';

import { publicUrls } from 'constants/urls';

const UserMenu = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const { user } = useAppSelector(state => state.user);

  const userMenuOptions = useUserMenuOptions();

  return (
    <ProtectedPrivateContainer
      fallback={
        <NavLink to={publicUrls.main} className="np-header__navigation-menu-link">
          <Button type="default" size="small" color={isDarkMode ? 'primary' : 'white'}>
            {t('form.button.logIn')}
          </Button>
        </NavLink>
      }
    >
      <HeaderSelect title={user?.username} items={userMenuOptions} />
    </ProtectedPrivateContainer>
  );
};

export default UserMenu;
