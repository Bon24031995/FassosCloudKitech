import { React, useEffect, useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [prevE, setPrevE] = useState('');

  const navigate = useNavigate();

  const [isVisible, setVisible] = useState(false);

  const [alpha, setlive] = useState('');

  const [beta, setBeta] = useState('');

  const [data, setdata] = useState([]);

  const Showpage = () => {
    setVisible(true);
  }

  const Offpage = () => {
    setVisible(false);
  }

  useEffect(() => {
    fetch('http://localhost:3009/data').then(resp => resp.json()).then(json => {
      console.log(json);
      setdata(json);
    })
  }, []);

  const UpdateData = {
    email: alpha,
    password: beta,
  }


  const DataSubmit = () => {
    fetch('http://localhost:3009/data', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(UpdateData)
    })
  }

  const ErrorShow = () => {
    let isValid = true;
    if (!email && !password) {
      setPrevE('Enter Your Email & Password');
      isValid = false;
    }
    else {
      setPrevE('');
    }
    return isValid;
  }

  const SubmitValue = (e) => {
    e.preventDefault();
    if (ErrorShow()) {
      let user = data.find((x) => x.email === email && x.password === password);
      if (user) {
        alert('Login Successful');
        navigate('/dashboard');
      }
      else {
        alert('Invalid Email or Password');
      }
    }
  }

  return (
    <div className='first-page'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='mb-5 ms-4 mt-4' src='https://product-assets.faasos.io/eatsure_cms/production/333b405b-13b6-429f-82db-900e9795da54.png' height={'95px'} width={'auto'} />
          <button className='btn btn-primary float-end mt-5' onClick={Showpage}>Sign In</button>
          {
            isVisible && (
              <div className='popUp' style={{ display: isVisible ? 'block' : 'none' }}>
                <button className='btn btn-primary float-end' onClick={Offpage}>Close</button>
                <h2>Sign In Page</h2>
                <form onSubmit={DataSubmit}>
                  <div className='row mt-3'>
                    <div className='col-lg-8 mb-2'>
                      <input value={alpha} onChange={(e) => { setlive(e.target.value) }} className='form-control' type='email' placeholder='Enter your email to be updated' />
                    </div>
                    <div className='col-lg-8'>
                      <input value={beta} onChange={(e) => { setBeta(e.target.value) }} className='form-control' type='password' placeholder='Enter your Password to be updated' />
                      <button className='btn btn-primary mt-3' type='submit'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            )
          }

          <h4 className='mt-5 fw-bold ms-4 mt-4' style={{ fontSize: "2.5rem" }}>Skip boring food and indulge in flavoursome Wraps, Meals and Bowls!</h4>
          <form onSubmit={SubmitValue}>
            <div className='row ms-4 mt-4'>
              <div className='col-lg-8'>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control mt-4' type='email' placeholder='Enter your Email' />
                <p className='ms-4 mt-4'>{prevE}</p>
              </div>
              <div className='col-lg-8'>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='form-control mt-3' type='password' placeholder='Enter your Password' />
                <p className='ms-4 mt-4'>{prevE}</p>
                <button className='btn btn-primary mt-3' type='submit'>Log In</button>
              </div>
            </div>
          </form>
        </div>
        <div className='col-lg-6'>
          <div className='background-fassos'></div>
        </div>
      </div>
    </div>
  )
}

export default App