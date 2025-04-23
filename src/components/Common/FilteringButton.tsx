import useFilter from '@/hooks/useFilter';
import { IFilterItem, TFilterKey } from '@/types';
import styled from 'styled-components';

interface IFilteringButtonProps {
  filterKey: TFilterKey;
  filterValue: IFilterItem;
}

const FilteringButton = ({ filterKey, filterValue }: IFilteringButtonProps) => {
  const { filterKeys, appendFilterKey, removeFilterKey, resetFilterKey } =
    useFilter();
  const isActive = (() => {
    if (filterKey === 'ALL') return filterKeys.length === 0;
    return filterKeys.includes(filterKey);
  })();

  const handleClick = () => {
    if (filterKey === 'ALL') {
      if (!isActive) resetFilterKey();
      return;
    }
    if (!isActive) appendFilterKey(filterKey);
    else removeFilterKey(filterKey);
  };

  return (
    <FilteringButtonStyle
      onClick={handleClick}
      className={isActive ? 'active' : ''}
    >
      {filterValue.label}
    </FilteringButtonStyle>
  );
};

export default FilteringButton;

const FilteringButtonStyle = styled.div`
  flex-shrink: 0;
  display: flex;
  height: 30px;
  width: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #191919;
  border-radius: 4px;
  padding: 0 4px 0 4px;
  cursor: pointer;

  color: #191919;
  background-color: #ffffff;

  &.active {
    color: #ffffff;
    background-color: #191919;
  }
`;
