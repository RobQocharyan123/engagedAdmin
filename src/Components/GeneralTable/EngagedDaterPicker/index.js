import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { postDate } from '../../../Services/generalTableService';
import { useState } from 'react';
import dayjs from 'dayjs';
import { setIsUpdate } from '../../../Slices/generalDataSlice';

const EngagedDaterPicker = () => {
  const date = useSelector((state) => state?.generalTableData?.date);
  const [pickerDate, setPickerDate] = useState(date ? dayjs(date) : dayjs());
  const dispatch = useDispatch();

  
  const onOk = async(value) => {
    try {
      const res = await postDate(value) 
        dispatch(setIsUpdate())
    } catch (err) {
      console.log(err);
    }
  };

  return <DatePicker showTime onOk={onOk} value={pickerDate} />;
};

export default EngagedDaterPicker;
