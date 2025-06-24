import { useMemo, useState } from 'react';
import {
  GeneralFiltersGeneralBlock,
  GeneralFilterSwichMainBlock,
  GeneralSearchInputBlock,
} from './styled';
import debounce from 'lodash.debounce';
import { Radio } from 'antd';

const GeneralFilters = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(1);

  const handleSearch = (value) => {
    console.log('Searching for:', value, 'radio: ', selectedOption);
  };
  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    handleSearch(inputValue, value);
  };

  return (
    <GeneralFiltersGeneralBlock>
      <GeneralSearchInputBlock
        type="text"
        value={inputValue}
        onChange={handleChange}
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
