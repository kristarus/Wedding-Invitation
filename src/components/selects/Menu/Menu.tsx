import React, { useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Button } from 'components';

import { IMenuProps } from './Menu.types';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

import './Menu.styles.scss';

const Menu = ({ items = [], title, width, style, onMenuItemClick, ...props }: IMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const openClass = open ? 'np-menu__button--open' : '';

  const handleMenuItemClick = (item: MenuItemType) => {
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }

    setOpen(false);
  };

  const menuProps: MenuProps = {
    items,
    triggerSubMenuAction: 'click',
    onClick: handleMenuItemClick,
  };

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      menu={menuProps}
      trigger={['click']}
      dropdownRender={menu => (
        <div className="np-menu__dropdown" style={{ ...style, width }}>
          {menu}
        </div>
      )}
      {...props}
    >
      <Button className={`np-menu__button ${openClass}`} style={{ width }}>
        {title}

        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Menu;
