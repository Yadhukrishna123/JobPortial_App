import React from 'react'
import './Style.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'




function Home() {
  return (
    <>
        <div>
        <div fluid>
        <img className='HomeImage' src="https://jooinn.com/images/job-interview.jpg" alt="homeimage" />
        <div >
          <input className='searchBar' placeholder="Type to search......." />
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home