import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* {landing part} */}
      <section style={{width:'100%',height:'90vh',backgroundImage:'url("./meeting.jpg")',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'top'}} className="container-fluid row align-items-center">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{background:'rgba(255,255,255,0.5)'}}>
            <h3>Designed to get hired.
                Your skilld,your story, your next job - all in one</h3>
            <Link to={'./resume'} className='btn text-white' style={{backgroundColor:'purple'}}>
              Make Your Resume
            </Link>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div>
          
        </div>
      </section>
      {/* {tools} */}
      <section className='m-5'>
        <h1 className="text-center">Tools</h1>
        <div className=" container row align-items-center">
          <div className="col-md-6">
            <h4 className='my-3'>Resume</h4>
            <p>Create unlimited new resources and easily edit them afterwards.</p>
            <h4 className='my-3'>Cover Letters</h4>
            <p>Easily write proffesional cover letters.</p>
            <h4 className='my-3'>Jobs</h4>
            <p>Automatically receive new and relevent job posting.</p>
            <h4 className='my-3'>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organised manner.</p>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
      </section>
      {/* {images} */}
      <section style={{width:'100%',height:'500px',backgroundImage:'url("./resumeimg.jpg")', backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'top'}} >
        
      </section>
      {/* {testimony} */}
      <section className='m-5'>
        <h1 className='text-center'>Testimonial</h1>
        <div className="row align-items-center my-5">
            <div className="col-md-5">
              <p>Trusted by professionals worldwide.
              </p>
              <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
              </p>
              <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
              <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <div>
                <img  style={{width:'120px',height:'120px'}} src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg?w=360" alt="" />
                </div>
                <div>
                  <img style={{width:'120px',height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVFdRT9uPtu8izkUyg3AtafLMOaKOFf_51Q&s" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://t3.ftcdn.net/jpg/03/73/52/24/360_F_373522464_UzkM3IvqgqpS0qIy2kpkB5QiV7Bw7NyS.jpg" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://thumbs.dreamstime.com/b/caucasian-man-s-no-emotion-portrait-like-passport-white-background-273304863.jpg" alt="" />
                </div>
              </div>
               <div className="d-flex justify-content-between mt-2">
                <div>
                <img  style={{width:'120px',height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWPEv22nmdOBaPRMc-qnlN0hG0Y4Zb1dI4w&s" alt="" />
                </div>
                <div>
                  <img style={{width:'120px',height:'120px'}} src="https://thumbs.dreamstime.com/b/passport-photo-latin-american-man-beard-passport-photo-latin-american-man-beard-isolated-white-background-201648583.jpg" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://static.vecteezy.com/system/resources/thumbnails/050/611/318/small/confident-man-young-millennial-guy-seriously-looking-at-camera-grey-background-photo.jpg" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://t4.ftcdn.net/jpg/03/78/43/25/360_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg" alt="" />
                </div>
              </div>
               <div className="d-flex justify-content-between mt-2">
                <div>
                <img  style={{width:'120px',height:'120px'}} src="https://t3.ftcdn.net/jpg/05/59/73/06/360_F_559730697_S9ptihgCbD0FYcBZda1ulaAhsNAxCZS1.jpg" alt="" />
                </div>
                <div>
                  <img style={{width:'120px',height:'120px'}} src="https://t4.ftcdn.net/jpg/03/43/38/73/360_F_343387374_Hgstvcba8P7FYYVZQTHpLQN7j4rnwY34.jpg" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://t3.ftcdn.net/jpg/15/23/87/86/360_F_1523878626_lCW9RR7Rjw0oc6V7yXyGozP62BjEtQrn.jpg" alt="" />
                </div>
                <div >
                  <img style={{width:'120px',height:'120px'}} src="https://t3.ftcdn.net/jpg/14/25/61/42/360_F_1425614240_iBpi9er4Gq1ajsZQUwa8uItf2V6Pvp9B.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
        

      </section>

    </div>
  )
}

export default LandingPage