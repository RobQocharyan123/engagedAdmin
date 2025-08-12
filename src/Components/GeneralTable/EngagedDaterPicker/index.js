import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { postDate } from '../../../Services/generalTableService';

const EngagedDaterPicker = () => {
  const dispatch = useDispatch();
  const onOk = (value) => {
    try {
      dispatch(postDate(value));
    } catch (err) {
      console.log(err);
    }
  };

  return <DatePicker showTime onOk={onOk} />;
};

export default EngagedDaterPicker;
