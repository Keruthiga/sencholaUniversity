import React from 'react'
import './Whysenchola.css'
import { BsFillPlayCircleFill,BsBook} from "react-icons/bs";
import img1 from './Sencholaimages/1/Rectangle 4.png';
import img2 from './Sencholaimages/1/Rectangle 5.png';
import card1 from './Sencholaimages/1/document.png';
import card2 from './Sencholaimages/1/handshake.png';
import card3 from './Sencholaimages/1/comment.png';
import card4 from './Sencholaimages/1/group.png';
import card5 from './Sencholaimages/1/git.png';
import card6 from './Sencholaimages/1/monitor.png';
import img3 from './Sencholaimages/1/Rectangle4611.png';
import grid1 from './Sencholaimages/1/1.png';
import grid2 from './Sencholaimages/1/2.png';
import grid3 from './Sencholaimages/1/3.png';
import grid4 from './Sencholaimages/1/4.png';
import grid5 from './Sencholaimages/1/5.png';
import grid6 from './Sencholaimages/1/6.png';

const Whysenchola = () => {
    return (
        <div className='whysenchola'>
            <div className="whysenchola-back-color row d-flex align-items-center">
                <div className="col-lg-6 ">
                    <h1 className='mb-3'>Best Learning </h1>
                    <h1 className='mb-3'>Education Platform</h1>
                    <h1 className='mb-3'>is Senchola.</h1>
                    <p className='me-sm-4 pe-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque non deleniti aspernatur quidem ernatur quidem doloribus modi adsses libero inventore
                    </p>

                    <div className="btn-groups d-flex align-items-center mb-0">
                        <button className='btn1 btn btn-success rounded-pill'>Learn More</button>

                        <button className=' bg-transparent rounded-pill btn2' style={{ fontSize: 13, fontWeight: 'bold' }}><span style={{ fontSize: 20 }}><BsFillPlayCircleFill /></span> Watch video</button>
                    </div>

                </div>
                <div className="col-lg-6 main-images">
                    <div className="img1">
                        <img src={img1} className='img-fluid' alt="img1" />
                    </div>
                    <div className="img2">
                        <img src={img2} className="img-fluid" alt="img2" />
                    </div>


                </div>
                <div className='box-content'>
                    <ul>
                        <li>Build remotes teams faster with senchola</li>
                        <li>Expert Trainee</li>
                    </ul>
                </div>
                <div className="book1">
                    <span className='fs-3'><BsBook/></span>
                </div>
                <div className="book2">
                    <span className='fs-3'><BsBook/></span>
                </div>
                <div className="book3">
                    <span className='fs-3'><BsBook/></span>
                </div>
                <div className="radius1">
                    <h1>&nbsp;</h1>
                </div>
                <div className="radius2">
                    <h1>&nbsp;</h1>
                </div>
               
         
            </div>
            <div className="why">
                <h1 className='fw-bolder'>Why Senchola <br /> University?</h1>
                <div className="row text-secondary">
                    <div className="col-lg-6 col-sm-12 pe-4">
                        <ul>
                            <li>What we teach is much more relevant for real software careers.</li>
                            <li> At Senchola, we look for skillsets and abilities more
                                than for paper credentials</li>
                            <li>We do not charge our students any fees. </li>
                            <li>After the successful completion of the Intership, you
                                are automatically inducted as an employee into
                                Senchola Technologies Solution.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-12 col2">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi ea exercitationem rerum dignissimos autem!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iusto eum similique, fugit cum aliquid placeat doloremque magnam quos cupiditate explicabo doloribus sapiente officia ipsa suscipit voluptate. Expedita, quidem quas veniam minus, in, modi officiis sequi ea perspiciatis at vel!</p>
                    </div>
                </div>
                <div className="radius3">
                    <h1>&nbsp;</h1>
                </div>
                <div className="book4">
                    <span className='fs-3'><BsBook/></span>
                </div>
                <div className="book5">
                    <span className='fs-3'><BsBook/></span>
                </div>
            </div>
            <div className="cards">
                <div className="flex-card">
                    <div className="medium">
                        <div className='card-1'>
                            <img src={card1} className='p-1 me-3' alt="" />
                               <div className=" pt-4">
                                <h6 className='text-capitalize'>breadth and depth for immediate scale</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                            <img src={card2} className='p-1 me-3' alt="" />
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>global pricing model</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card2 medium">
                        <div className='card-1'>
                            <img src={card5} className='p-1 me-3' alt="" />
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>scalable managed outsourcing</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                            <img src={card4} className='p-1 me-3' alt="" />
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>jumpstart your business</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className=" medium">
                        <div className='card-1'>
                            <img src={card3} className='p-1 me-3' alt="" />
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>Elastic Freelancing model</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                            <img src={card6} className='p-1 me-3' alt="" />
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>exclusive professional marketing place</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book6">
                    <span className='fs-3'><BsBook/></span>
                </div>
            </div>
            <div className="dummy-content row">
                <div className="col-lg-6 col-sm-12 ps-5">

                    <img src={img3} height={470} width={470} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 dummy-text text-justify">
                    <h2 className='fw-bolder '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum nostrum beatae sequi similique deserunt obcaecati soluta dolor nisi ipsam quo voluptatem officiis optio totam, dignissimos dolorem ea vitae. Omnis quisquam inventore   error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ad nam fugiat saepe, reiciendis id recusandae sint commodi amet fugit ut incidunt assumenda quam neque nostrum animi nihil repellendus magni. nulla consequuntur. Facere minima animi dolorem labore?</p>

                </div>
                <div className='box-content2'>
                    <ul>
                        <li>Build remotes teams faster with senchola</li>
                        <li>Expert Trainee</li>
                    </ul>

                    </div>
            </div>
            <div className="my-5 recruit">
                <h2 className='text-uppercase text-center fw-bolder'>recruiting top talents</h2>
                <p className='text-center fw-bold'>recruiting top talent</p>
            </div>

            <div className="grid-gallery">
                     <div className="wide">
                        <img src={grid1} alt="" />
                     </div>
                     <div className="tall">
                        <img src={grid2} alt="" />
                     </div>
                     <div className="tall">
                        <img src={grid3} alt="" />
                     </div>
                     <div className="wide2">
                        <img src={grid4} alt="" />
                     </div>
                     <div className="wide3">
                        <img src={grid5} alt="" />
                     </div>
                     <div className="wide4">
                        <img src={grid6} alt="" />
                     </div>
            </div>

        </div>
    )
}

export default Whysenchola