import React from 'react'
import './Contactus.css';
import {LuPhoneCall} from 'react-icons/lu'
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
const Contactus = () => {
    return (
        <div className='contact-us'>
            <div className="contact-form py-5 px-5">
                <div className='backcolor'>
                    &nbsp;
                </div>
                <div className="row mx-md-3" id='form-content'>
                    <div className="col-lg-6 col-sm-12 form">
                        <h1 className='text-sm-start text-center text-uppercase'>contact form</h1>
                        <p className='text-start text-capitalize para m-0 mb-1 '>Get in touch</p>
                        <p className='text-start text-secondary p-0 mb-3'>Enter your message to reach out</p>
                        <label htmlFor="name" className='w-100'>Name</label>
                        <input type="text" id='name' className=' mb-3 ps-3 p-2' placeholder='Enter your name' />
                        <label htmlFor="email" className='w-100'>Email address</label>
                        <input type="email" id='email' className=' mb-3 ps-3 p-2' placeholder='Enter your Email' />
                        <label htmlFor="phone" className='w-100'>Phonenumber</label>
                        <input type="tel" id='phone' className=' mb-3 ps-3 p-2' placeholder='Enter your phonenumber' />
                        <label htmlFor="message" className='w-100'>comment or message</label>
                       <textarea name="message" className='mb-3 ps-3 p-2 h-50' placeholder='Write a message or comment' id="message" cols="46" rows="3"></textarea>
                       <button className='btn btn-success mb-3'>Register</button>
                       <hr className='mb-4' />
                     <div className="contact d-flex flex-wrap justify-content-between">
                        <div className="phone d-flex  mb-4 align-items-center">
                            <div className='fs-4 icon'>
                                <span><LuPhoneCall/></span>
                            </div>
                            <div className="ps-2 ms-1 icon-content">
                                <span className=''>PHONE</span>
                                <br />
                                <span className='text-decoration-underline green-content'>+91 96677 87882</span>
                            </div>
                        </div>
                        <div className="phone d-flex  mb-4 align-items-center">
                            <div className='fs-4 icon'>
                                <span><GrMail/></span>
                            </div>
                            <div className="ps-2 ms-1 icon-content">
                                <span className=''>EMAIL</span>
                                <br />
                                <span href='/' className='green-content'>info@marcc.com.au</span>
                            </div>
                        </div>
                        <div className="phone d-flex mb-4 align-items-center">
                            <div className='fs-4 icon'>
                                <span><IoLocationSharp/></span>
                            </div>
                            <div className="ps-2 ms-1 icon-content">
                                <span className=''>ADDRESS</span>
                                <br />
                                <span className='green-content text-capitalize'>The Estate, 8th floor, dickenson road</span>
                                <br />
                                <span className='green-content'>Banglore-560042</span>
                            </div>
                        </div>
                     
                     </div>
                       

                    </div>
                    <div className="col-lg-6">
                        <iframe className="gmap_canvas" src="https://maps.google.com/maps?q=senchola&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no">
                        </iframe>
                        <div className="mapouter">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contactus