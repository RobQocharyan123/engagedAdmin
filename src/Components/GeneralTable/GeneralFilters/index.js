import { useEffect, useMemo, useState, useCallback } from 'react';
import {
  GeneralFiltersGeneralBlock,
  GeneralFilterSwichMainBlock,
  GeneralSearchInputBlock,
} from './styled';
import debounce from 'lodash.debounce';
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTableDataThunk } from '../../../Middleware/generalDatathunk';

const GeneralFilters = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(1);
  const isUpdate = useSelector((state) => state?.generalTableData?.isUpdate);

  const dispatch = useDispatch();

  const fetchData = useCallback(
    (search = '', status = 1) => {
      dispatch(
        getTableDataThunk({
          data: {
            search_data: search || ' ',
            status: status || 1,
          },
        })
      );
    },
    [dispatch]
  );

  // Memoize debounced fetchData
  const debouncedFetchData = useMemo(
    () => debounce(fetchData, 500),
    [fetchData]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFetchData(value, selectedOption);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    fetchData(inputValue, value); // call immediately for radio
  };

  // Initial fetch
  useEffect(() => {
    fetchData(inputValue, selectedOption);
  }, [isUpdate]); // run once on mount

  return (
    <GeneralFiltersGeneralBlock>
      <GeneralSearchInputBlock
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
        allowClear
      />
      <GeneralFilterSwichMainBlock>
        <Radio.Group
          name="radiogroup"
          value={selectedOption}
          onChange={handleRadioChange}
          options={[
            { value: 1, label: 'All' },
            { value: 2, label: 'boy' },
            { value: 3, label: 'girl' },
          ]}
        />
      </GeneralFilterSwichMainBlock>
    </GeneralFiltersGeneralBlock>
  );
};

export default GeneralFilters;
