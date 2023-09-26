import React from 'react';
import signupPic from './Sencholaimages/2/Rectangle 4597-1.png';
import './signup.css';
import {FcGoogle} from 'react-icons/fc';
import {DiApple} from 'react-icons/di';

function Signup() {
  return (
    <div className='container signup-cont'>
      <div className='signuptext  template d-flex '>
        <div className='form-container p-5 rounded 100-vh mb-5'>
          <form>
            <h1 className='signHead'>Signup form</h1>
            <h4>It's Quick & Easy </h4>
            <p className='text-secondary'>Enter your Credentials details to create a new account</p>
            <div className='mb-2'>
              <label htmlFor='fname' className='label signup-label' style={{justifyContent:'flex-start'}} >First Name <span style={{color: 'red'}}>*</span> </label>
              <input type='text' placeholder='Enter your name' className='form-control'/>
            </div>
            <div className='mb-2'>
              <label htmlFor='email' className='label signup-label'>Email Address <span style={{color: 'red'}}>*</span></label>
              <input type='email' placeholder='Enter your email' className='form-control'/>
            </div>
            <div className='mb-2'>
              <label htmlFor='password'className='label signup-label' >Password <span style={{color: 'red'}}>*</span> </label>
              <input type='password' placeholder='Enter your password' className='form-control'/> 
            </div>
            <div className='mb-2'>
              <input type='checkbox' className='custom-control custom-checkbox ' id='check'/>
              <label for='check' className='custom-input-label ms-2 custom-input-label-signup'>
                I accept the <a href='#use'>Terms of Use</a> &<a href='#policy'> Privacy Policy </a>
              </label>
            </div>
            <div className='d-grid'>
              <button className='btn btn-success mb-4'>SIGNUP</button>
            </div>
          </form>
          <div className='divider-signup'>
            <div className='line-signup'></div>Or
            <div className='line-signup'></div>
          </div>
          <div style={{padding:'15px',display:"flex",justifyContent:'space-evenly',width:'100%'}}>
            <button className='buttonSign'><FcGoogle style={{fontSize:"18px",marginRight:'4px'}}/>Sign in with Google</button>
            <button className='buttonSign'><DiApple style={{fontSize:"18px",marginRight:'4px'}}/>Sign in with Apple</button>
          </div>
          <div style={{textAlign:'center',fontWeight:'500'}}>I already have an account! <a href="#login"> Login</a></div>

        </div>
      </div>
      <div className='imageSignup'>
        <img src={signupPic} alt='...' className='img-fluid img-fluid-signup'/>
      </div>
    </div>
  )
}

export default Signup