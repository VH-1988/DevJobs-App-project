import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../data.json';
import { Link } from 'react-router-dom';

const JobDetails = () => {
  const {position} = useParams()
  const job = jobs.find(job=> job.position === position)
  return <section>
    <div className="details-container">
      <div className="details-wrapper">
        <div className="details-top">
          <img src={job.logo} alt="" style={{background:(job.logoBackground)}}/>
          <div>
            <h1  className='compName'>{job.company}</h1>
          </div>
          <button>
            <Link to={job.website}>Company Site</Link>
          </button>
        </div>
        <div className="job-details">
          <div className="about-job">
            <div>
              <h6>{job.postedAt} - {job.contract}</h6>
              <h1>{job.position}</h1>
              <span>{job.location}</span>
            </div>
            <button>
              <Link to={job.apply}>Apply Now</Link>
            </button>
          </div>
          <p className='job-description'>{job.description}</p>
          <div className="requirements">
            <h1>Requirements</h1>
            <p>{job.requirements.content}</p>
            <ul className="requirement-item">
              {
                job.requirements.items.map((item,index)=> (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="role">
            <h1>What You Will Do</h1>
            <p>{job.role.content}</p>
            <ol type='1' className="role-item">
              {
                job.role.items.map((item,index)=> (
                  <li key={index}>{item}</li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default JobDetails;
