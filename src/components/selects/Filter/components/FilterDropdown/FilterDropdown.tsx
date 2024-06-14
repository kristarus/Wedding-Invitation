import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/buttons/Button';

import { IFilterDropdownProps } from './FilterDropdown.types';

import './FilterDropdown.styles.scss';

const FilterDropdown = React.forwardRef<HTMLDivElement, IFilterDropdownProps>(({ menu, onApply }, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref} className="np-filter__dropdown">
      <div>{menu}</div>

      <div className="np-filter__dropdown-actions">
        <Button onClick={onApply}>{t('form.button.ok')}</Button>
      </div>
    </div>
  );
});

export default FilterDropdown;
