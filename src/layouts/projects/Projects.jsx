import React, { useState } from 'react';
import projects from './projectData';
import { faCalendar, faInfoCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formattedDate from '../utils/dates';
import { Link } from 'react-router-dom';

const compareDates = (a, b) => {
  return a.date.getTime() - b.date.getTime();
};

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevant');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = projects.filter((proj) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
  
    const nameMatch = proj.name.toLowerCase().includes(lowerSearchTerm);
  
    const techMatch = proj.technologies.some((tech) =>
      tech.toLowerCase().includes(lowerSearchTerm)
    );
  
    return nameMatch || techMatch;
  });
  


  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  let sortedProjects = filteredProjects;

  if(sortBy === 'date'){
    sortedProjects = [...filteredProjects].sort(
      (a, b) => compareDates(a, b)
    )
  }
  else if (sortBy === 'date2'){
    sortedProjects = [...filteredProjects].sort(
      (a, b) => compareDates(b, a)
    )
  }

  return (
    <div className="certificates-main">
      <h3 className='page-heading'>Projects</h3>

      <div className='certificate-settings'>
        <div className='searchbar'>
          <input
            type="text"
            placeholder="Search by name or tech"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className='sort-box'>
          <label className="label-sort" htmlFor="sortSelect">Sort by:</label>
          <select className="select-sort" id="sortSelect" value={sortBy} onChange={handleSortChange}>
            <option value="relevant">Most Relevant</option>
            <option value="date">Date (asc)</option>
            <option value="date2">Date (desc)</option>
          </select>
        </div>

      </div>
      <div className="proj-image-container">
        {sortedProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <Link className='link' to={project.url}>
              <div className="icon-container">
                <FontAwesomeIcon icon={project.image} size="3x" />
              </div>
              <div className="project-details">
                <h3 className='project-name'>{project.name}</h3>
                <FontAwesomeIcon icon={faCogs} />
                <div className='technologies-wrapper'>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <div className='technology' key={index}>{tech}</div>
                    ))}
                  </div>
                </div>
                <p className="date"><FontAwesomeIcon icon={faCalendar} /> {formattedDate(project.date, 1)}</p>
                <p className="description"><FontAwesomeIcon icon={faInfoCircle} /> {project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
