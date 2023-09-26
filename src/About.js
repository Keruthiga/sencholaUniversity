import React from 'react';
//import { Card ,CardGroup} from 'react-bootstrap'
import about1 from './Sencholaimages/3/Rectangle 4620.png';
import review1 from './Sencholaimages/3/guy-lesson 2.png';
import review2 from './Sencholaimages/3/Rectangle 18.png';
import review3 from './Sencholaimages/3/unsplash_0Zx1bDv5BNY.png';
import aboutgal1 from './Sencholaimages/3/Rectangle 4621.png';
import aboutgal2 from './Sencholaimages/3/Rectangle 4622.png';
import aboutgal3 from './Sencholaimages/3/Rectangle 4623.png';
import './aboutus.css';
import {BsCheckAll} from 'react-icons/bs';
import {FaArrowRight} from 'react-icons/fa';
import {RiStarSFill} from 'react-icons/ri';

function About() {
  return (
    <div className="container-fluid">
      <div className="aboutimgCont">
        <img src={about1} alt="..." className="aboutImg" />
        <h1 className="aboutImgText">
          <span style={{ fontSize: "56px" }}>W</span>e are the Best Company for{" "}
          <br />
          your Business ready to take your
          <br /> Brand sky high
        </h1>
        <button className="aboutButton btn btn-success"> Learn More</button>
      </div>
      <div className="aboutdescription">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 row-about" >
            <h3 className="describeHead">About Senchola!</h3>
            <p className="describeText ">
              We are deeply invested in helping businesses focus on business, so
              our services are designed to be hassle-free. We adapt to your
              organization structure through freelancing organization or
              outsourcing, relieving you of the roadblocks that inhibit your
              company's growth.
              <br />
              <br />
              No matter the scale of your needs, we outsource the exact number
              of business professionals or processes your company needs for
              success. Our services grow easily with your business, ensuring
              your evolving needs are met.
              <br />
              <br />
              Our professional resources and outsourcing services give your
              company the breadth and depth it needs to scale with speed from a
              single partner. Let your business needs fail on our broad
              expertise to drive growth. <br />
              <br />
            </p>
            <button className="describeButton btn btn-success">
              VIEW MORE
            </button>
          </div>
          <div className="aboutGall col-md-6 col-lg-6 col-sm-12">
            <div className="tall1">
                <img src={aboutgal1} alt='...' style={{height:'23rem'}}/>
            </div>
            <div className="tall2 mt-4">
                <img src={aboutgal2} alt='..' style={{height:'23rem',display:'block'}}/>
                <img src={aboutgal3} alt='...' style={{height:'23rem'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="services mt-5">
        <h4 className="text-success"
          style={{ textTransform: "uppercase", fontWeight: "bold",textAlign:'center'}}
        >
          Global managed services
        </h4>
        <p className="servicesText mb-5">
          lorem ipsum dolar sit amet consectetur. Mattis nam tristique fusce
          vulputate cursus malesuda
          <br />
          ultrices. Urna nunc diem molestie cras lorem
        </p>
        <div className="serviceWrapper1 ">
          <div className="wrapper1 ">
            <h4 className='wrapperHead'>Marketing</h4>
            <p>lorem ipsum dolar sit amet consectetur. Dignissim quis duis placeratmalasuada massa. Elit leo ac tempeor prausent tellus feugiet enim.
            Erot id tincidunt imperdiet adipiscing vestibulum vorci tortor fausibus in pellentesque eros. Amet pulvinor eu commodo neque. A
            prausent et at venenatis.
            </p>
            <ul className='listcontain'>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Customer Service</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Technical Support</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp; Sales</li>
            </ul>
            <p className='serviceButton text-success'>VIEW ALL <FaArrowRight/></p>
          </div>
          <div className="wrapper1 ">
            <h4 className='wrapperHead'>Sales Agency</h4>
            <p>lorem ipsum dolar sit amet consectetur. Dignissim quis duis placeratmalasuada massa. Elit leo ac tempeor prausent tellus feugiet enim.
            Erot id tincidunt imperdiet adipiscing vestibulum vorci tortor fausibus in pellentesque eros. Amet pulvinor eu commodo neque. A
            prausent et at venenatis.
            </p>
            <ul className='listcontain'>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Business Development</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Sales Development</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Appointment Setting</li>
            </ul>
            <p className='serviceButton text-success'>VIEW ALL <FaArrowRight/></p>
          </div>
          <div className="wrapper1 ">
            <h4 className='wrapperHead'>Back Office</h4>
            <p>lorem ipsum dolar sit amet consectetur. Dignissim quis duis placeratmalasuada massa. Elit leo ac tempeor prausent tellus feugiet enim.
            Erot id tincidunt imperdiet adipiscing vestibulum vorci tortor fausibus in pellentesque eros. Amet pulvinor eu commodo neque. A
            prausent et at venenatis.
            </p>
            <ul className='listcontain'>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Data Entry</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Virtual Assistants</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Online Research</li>
            </ul>
            <p className='serviceButton text-success'>VIEW ALL <FaArrowRight/></p>
          </div>
          </div>
          <div className='serviceWrapper2 mt-5'>
          <div className="wrapper2  ">
            <h4 className='wrapperHead'>RPO</h4>
            <p>lorem ipsum dolar sit amet consectetur. Dignissim quis duis placeratmalasuada massa. Elit leo ac tempeor prausent tellus feugiet enim.
            Erot id tincidunt imperdiet adipiscing vestibulum vorci tortor fausibus in pellentesque eros. Amet pulvinor eu commodo neque. A
            prausent et at venenatis.
            </p>
            <ul className='listcontain'>
              <li className='text-success servicelist '> <BsCheckAll/> &nbsp;Employee</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Contractors</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Payroll</li>
            </ul>
            <p className='serviceButton text-success'>VIEW ALL <FaArrowRight/></p>
          </div>
          <div className="wrapper2 ">
            <h4 className='wrapperHead'>Client managed</h4>
            <p>lorem ipsum dolar sit amet consectetur. Dignissim quis duis placeratmalasuada massa. Elit leo ac tempeor prausent tellus feugiet enim.
            Erot id tincidunt imperdiet adipiscing vestibulum vorci tortor fausibus in pellentesque eros. Amet pulvinor eu commodo neque. A
            prausent et at venenatis.
            </p>
            <ul className='listcontain'>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Elastic Workforce</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;One To Several</li>
              <li className='text-success servicelist'> <BsCheckAll/> &nbsp;Team Integration</li>
            </ul>
            <p className='serviceButton text-success'>VIEW ALL <FaArrowRight/></p>
          </div>
        </div>
      </div>
      <div className='testimonials'>
        <div className='row reviewrow'>
          <div className='col reviewcol '>
            <div className='review'>
              <img src={review1} alt='...' className='reviewpic'/>
              <div className='nametest'>Eleveny Petun</div>
              <div className='starstest'>
                <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
              </div>
              <p style={{textAlign: 'start'}}>Lorem ipsum dolor sit amet consectetur. Proin pellentesque adipiscing auctur ipsum consequategastas</p>
            </div>
          </div>
          <div className='col reviewcol ' >
            <div className='review'>
              <img src={review2} alt='...' className='reviewpic'/>
              <div className='nametest'>Lenny Roria</div>
              <div className='starstest'>
                <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
              </div>
              <p style={{textAlign: 'start'}}>Lorem ipsum dolor sit amet consectetur. Proin pellentesque adipiscing auctur ipsum consequategastas</p>
            </div>
          </div>
          <div className='col reviewcol '>
            <div className='review'>
              <img src={review3} alt='...' className='reviewpic'/>
              <div className='nametest'>Ronny Rossy</div>
              <div className='starstest'>
                <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
              </div>
              <p style={{textAlign: 'start'}}>Lorem ipsum dolor sit amet consectetur. Proin pellentesque adipiscing auctur ipsum consequategastas</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}



export default About
