import useFilterStore from '@/store/filterStore';

const useFilter = () => {
  const filterKeys = useFilterStore((state) => state.filterKeys);
  const appendFilterKey = useFilterStore((state) => state.appendFilterKey);
  const removeFilterKey = useFilterStore((state) => state.removeFilterKey);
  const resetFilterKey = useFilterStore((state) => state.resetFilterKey);

  return { filterKeys, appendFilterKey, removeFilterKey, resetFilterKey };
};

export default useFilter;
