import React from 'react'
import { MdSearch, MdLocationOn,MdFilterAlt } from "react-icons/md";
import jobs from '../../data.json';
import { useState } from "react";
import { Link } from 'react-router-dom';

const JobLists = () => {
    const [jobData, setJobData] = useState(jobs);
    const [searchByTitle, setSearchByTitle] = useState('');
    const searchByCompany = searchByTitle.toLowerCase();
    const [searchByLocation, setSearchByLocation] =useState('');

    //_____filter by Location_____
    const locationSearchHandler = () => {
        const filteredData = jobs.filter(job=> job.location.toLowerCase().includes(searchByLocation.toLowerCase()))
        setJobData(filteredData)
    };

    //_____filter Full time by chechbox_____
    const filterJobData = e=>{
        const filterValue = e.target.value
        if(filterValue === 'full-time'){
            const filteredData = jobs.filter(job=> job.contract === 'Full Time')
            setJobData(filteredData)
        }
    };
  return <section className='job-List'>
    <div className="pop-up-bg">
                <div className='pop-up'>
                    <span className='MdLocationOn'><MdLocationOn/></span>
                    <div className="search-panel-02">
                        <input type="text" placeholder='Filter by location...' value={searchByLocation} onChange={e=> setSearchByLocation(e.target.value)}/>
                    </div>
                    <button className='btn-pop-up' onClick={locationSearchHandler}></button>
                    
                    <div className="search-panel-03">
                        <input id='checkbox-1' type="checkbox" value="full-time" onClick={filterJobData} />
                        <label htmlFor='checkbox-01' className='checkbox-label'>Full Time Only</label>
                    </div>
                </div>
            </div>
    <div className="job-list-wrapper">
        <div className="search-panel">

            <span className='MdSearch'><MdSearch/></span>
            <div className="search-panel-01">                
                <input type="text" placeholder='Filter by title, companies, expertise...' value={searchByTitle} onChange={e=> setSearchByTitle(e.target.value)}/>
            </div>
            <button className='cone-pop-up'><MdFilterAlt/></button>
            <div className="search-panel-04">
                <button className='btn' onClick={locationSearchHandler}><span className='MdSearch-btn'><MdSearch/></span></button>
            </div>
        </div>
    </div>
        <div className="job-wrapper">
            {jobData?.filter((job) => {
                if(searchByTitle === '') return job;
                if(
                    job.position.toLowerCase().includes(searchByCompany) || 
                    job.company.toLowerCase().includes(searchByCompany)
                    )
                return job;
            })
            .map((item) => (
                <div className="job-item" key={item.id}>
                    <img src={item.logo} alt="" style={{background:(item.logoBackground)}} />
                    <div className="job-content">
                        <h6>{item.postedAt} - {item.contract}</h6>
                        <h1><Link to={`/jobs/${item.position}`}>{item.position}</Link></h1>
                        <p>{item.company}</p>
                        <div className="location">
                            <span>{item.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  </section>
}

export default JobLists;