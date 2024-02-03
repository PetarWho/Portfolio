import React, { useState, useEffect } from 'react';
import certificateImages from './certificateData';
import formattedDate from '../utils/dates';


const compareDates = (a, b) => {
    return b.date.getTime() - a.date.getTime();
};

function Certificates() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('importance');

    useEffect(() => {
        const searchInput = document.getElementById('searchCertificateInput');
    
        const handleInput = () => {
          if (searchInput.value.trim() !== '') {
            searchInput.style.outline = 'none';
            searchInput.style.border = 'none';
            searchInput.style.transition = 'border-bottom 1s';
            searchInput.style.borderBottom = '1px solid #d1d1d1';
          } else {
            searchInput.style.borderBottom = '1px solid transparent';
          }
        };
    
        searchInput.addEventListener('input', handleInput);
    
        return () => {
          searchInput.removeEventListener('input', handleInput);
        };
      }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCertificates = certificateImages.filter(
        (certificate) =>
            certificate.alt.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const sortedCertificates =
        sortBy === 'date'
            ? [...filteredCertificates].sort(
                (a, b) => compareDates(a, b)
            )
            : filteredCertificates;

    
    return (
        <div className="certificates-main">
            <h3 className='page-heading'>Certificates</h3>

            <div className='certificate-settings'>
                <div className='searchbar'>
                    <input
                        type="text"
                        id="searchCertificateInput"
                        placeholder="Search by certificate name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className='sort-box'>
                    <label className="label-sort" htmlFor="sortSelect">Sort by:</label>
                    <select className="select-sort" id="sortSelect" value={sortBy} onChange={handleSortChange}>
                        <option value="importance">Most Relevant</option>
                        <option value="date">Date (desc)</option>
                    </select>
                </div>

            </div>
            <div className="image-container">
                {sortedCertificates.map((image, index) => (
                    <div className="certificate" key={index}>
                        <a href={image.url} className='link overlay-text' target="_blank" rel='noreferrer'>
                            <img src={image.src} alt={image.alt} />
                            {formattedDate(image.date, 0) === null ? "" :
                                <div>
                                    <p className='certificate-overlay-date'>Issued on {formattedDate(image.date)}</p>
                                </div>
                            }
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;