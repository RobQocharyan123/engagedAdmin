import { useEffect } from 'react';
import './App.css';
import GeneralTable from './Components/GeneralTable';
import { useDispatch } from 'react-redux';
import { getTableDataThunk } from './Middleware/generalDatathunk';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getTableDataThunk())
  },[])
  return (
    <div className="App">
      <GeneralTable />
    </div>
  );
}

export default App;
