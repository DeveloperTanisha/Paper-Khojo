import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaFileUpload } from "react-icons/fa"
import { FaTrophy } from "react-icons/fa6";
const Aboutus = () => {
  return (
    <>
      <div className="row ">
        <div className="col-sm-12 hero bg-color2">
          <div className="row ps-5">
          <div className="col-sm-6">
            <h1 className='herotitle text'>Helping Students <br/>
            Study  <b className='text-color1'>Better</b>
            </h1>
            <p className='text1'>Welcome to PYQ Papers, a student-friendly platform<br/>
               designed to make exam preparation easier and more<br/>
              efficient
            </p>
            <h6 className='Explore btn btn-color1'>Explore Papers</h6>
            
          </div>

          <div className="col-sm-6">
            <img  className='img-fluid   img .......................'src="Smart-Learning.webp"  />
             </div>
             
             <div className="row goal1">
              <div className="col-sm-12">
                <d className='goal '><b className='goal1'><h1><b className='text-color1' > <GoGoal /> </b>Our  <b className='text-color1'>Mission</b></h1></b><br/>
                <p >Our mission is to provide with<b className=''> easy,organised,and quick access<br/>
                  to study meterials</b> so they can prepare for their exams greater confidence</p>
                </d> 
              </div>
                
             </div>
             <p className='provide'>What We <b  className='provide1'>Provide</b></p>
              <div className='wrapper'>
             <div className="row ">
             
               <div className="card ">
                 
                <div className="card-container">
                <div className="content ">
                  <h1 className='card1'><IoBookSharp />
                      </h1><br/>
                  <p className='paragraph'>Previous year questions papers
                     
                  </p>
                </div>
                </div>
              </div>
               <div className="card">
                <div className="card-container">
                <div className="content">
                  <h1 className='card1'><SiBookstack /></h1><br/>
                  <p className='paragraph'>Subject-wise  question papers
                     
                  </p>
                  </div>
                </div>
              </div>
               <div className="card">
                <div className="card-container">
                <div className="content">
                  <h1 className='card1'><FaGraduationCap /></h1><br/>
                  <p className='paragraph'>Course and semester-wise papers
                     
                  </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                <div className="content">
                  <h1 className='card1'><FaFileUpload /></h1><br/>
                  <p className='paragraph'>Easy access to question papers
                     
                  </p>
                  </div>
                </div>
              </div>
               <div className="card">
                <div className="card-container">
                <div className="content">
                  <h1 className='card1'><TiLightbulb /></h1><br/>
                  <p className='paragraph'>Helpful study resources
                     
                  </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                 
                <div className="card-container">
                <div className="content ">
                  <h1 className='card1'><GiMagnifyingGlass /></h1><br/>
                  <p className='paragraph'>Easy-to-use search and navigation
                  </p>
                </div>
                </div>
                
                
              </div>
              

             </div>
             </div>
             <div className="col-sm-6 ">
            <h1 className='herotitle text'>Who We 
              <b className='text-color1'> Help</b>
            </h1>
            <p className='text1'>Our platform is creating for students who want to practice previous examination papers and improve their exam preparartion<br/>
            <b className='Help'> 
              Wheather you are preparing for your semester exams or looking for important questions, we aim to make ypur study process simple</b>
            </p><br/>
            <h2 ><b className='check'> <FaCheck /></b> turn stress into success</h2>
            <h2><b className='check'><FaCheck /></b> Simplify your revision </h2>

          </div>

          <div className="col-sm-6">
            <img  className='img-fluid'src="image2.jpeg" alt="" />
             </div>
             <div className="row goal1">
              <div className="col-sm-12">
                <d className='goal '><b className='goal1'><h1><b className='text-color1'><FaTrophy /></b> Our  <b className='text-color1'>Goal</b></h1></b><br/>
                <p >We beleive that<b className=''> practicing previous year papers is one of the best way to understand an examination pattern <br/>
                  Our goal is to being useful academic resources together </b> in one convenient place</p>
                </d> 
              </div>
                
             </div>
             <div className="row ">
              <div className="col-sm-25">
                <div className='goal5'>
                 <h2>"Study smart. Practice more.Prepare better."</h2>
                </div>
             </div>
         </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Aboutus
