import React from 'react'


const About = () => {

  return (
    <div className='container-fluid  d-flex flex-column-reverse flex-md-row justify-content-between  align-items-center gap-5 w-100'>
      <div className='flex-grow-1'>
      <h2 className="fw-bold mb-3 " >About NoteVerse</h2>
  <p className="text-muted fs-5">
    NotVerse is a simple and powerful note-taking web app built with the MERN stack. It helps you create, manage, and organize your notes efficiently.
  </p>
  <h4 className="fw-semibold mt-4 mb-3">Key Features</h4>
  <ul className="list-unstyled ps-3">
    <li className="mb-2">✅ Create and manage notes</li>
    <li className="mb-2">✅ Edit or delete notes</li>
    <li className="mb-2">✅ Secure login & authentication</li>
    <li className="mb-2">✅ Simple and responsive design</li>
  </ul>
      </div>
      <div className='w-50 d-flex justify-content-center '>
        <img src="/about.jpg" alt="" className='img-fluid ' />
      </div>
    </div>
  )
}

export default About
