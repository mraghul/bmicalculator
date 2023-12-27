import React from 'react';
import "./Catalog.css";
import { useState } from 'react';

const Catalog = () => {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  const calculateBmi = (e) =>{
    e.preventDefault();

    if(weight === 0 || height === 0){
      alert('Invalid Input')
    }
    else{
      let bmi =(weight / (height / 100) ** 2)
      setBmi(bmi.toFixed(2))
    }
    if(bmi < 18.5 ){
      setMessage('You are Under Weight')
    }else if(bmi >= 18.5 && bmi <= 24.9){
      setMessage('You are Healthy Weight')
    }else if(bmi >= 25 && bmi <= 29.9){
      setMessage('You are Over Weight')
    }
    else{
      setMessage('You are Obese')
    }
  }


  let bmiImgsrc;

  if(bmi < 1){
    bmiImgsrc = null;
  }
  else if(bmi < 18.5 ){
    bmiImgsrc = require('../Assets/underWeight.png');
  }else if(bmi >= 18.5 && bmi <= 24.9){
    bmiImgsrc = require('../Assets/healthy.png');
  }else if(bmi >= 25 && bmi <= 29.9){
    bmiImgsrc = require('../Assets/overWeight.png');
  }
  else{
    bmiImgsrc = require('../Assets/obese.png');
  }

  let reload =() =>{
    window.location.reload();
  }

  return (
    <div className='container'> 
      <div className='header'>
      <h1>BMI Calculator</h1>
      </div>
        <div className="card">          
          <form onSubmit={calculateBmi}>
            <div className='card-input'>
              <label>Weight (Kg)</label> <br />
              <input type="number" onChange={(e) =>setWeight(e.target.value)} placeholder='0' />
            </div>
            <div className='card-input'>
              <label>Height (Cm)</label> <br />
              <input type="number"  onChange={(e) =>setHeight(e.target.value)} placeholder='0' />
            </div>
            <div className='card-btn'>
              <button type="submit" className="btn-submit">Submit</button>
              <button type="submit" className="btn-submit outline" onClick={reload}>Reload</button>
            </div>
          </form>
          <div className='bmiResult'>
            <h2>Your BMI is : {bmi}</h2>
            <p>{message}</p>
          </div>
          <div className='image-container'>
            <img src={bmiImgsrc} alt='' />
          </div>
        </div>
    </div>
  )
}

export default Catalog
