import { useState } from 'react';
import './container.css';
import Inputs from './inputs';
import Output from './output'

function Container() {
    const [data,setdata] = useState()
    const saveInnerDataHandler = (enterredInnerData) => {
        setdata(enterredInnerData)
        console.log(enterredInnerData)
    }
  return (
    <div>
        <h1>Green power</h1>
        <Inputs onSaveInnerData = {saveInnerDataHandler}/>
        <Output data = {data} />
    </div>
  );
}

export default Container;
