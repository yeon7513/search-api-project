import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGraduationCap, faHouseChimney, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='inner'>
        <h1><Link to="/">검색 API 프로젝트</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span className='menu-icon'>
                <FontAwesomeIcon icon={faHouseChimney} />
                </span>
                <span className='menu-text'>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/SearchEncyc">
                <span className='menu-icon'>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span className='menu-text'>백과사전&nbsp;API</span>
              </Link>
            </li>
            <li>
              <Link to="/SearchBook">
              <span className='menu-icon'>
                <FontAwesomeIcon icon={faBook} />
              </span>
              <span className='menu-text'>도서검색&nbsp;API</span>
              </Link>
            </li>
            <li>
              <Link to="/SearchImage">
                <span className='menu-icon'>
                  <FontAwesomeIcon icon={faImage} />
                </span>
                <span className='menu-text'>이미지검색&nbsp;API</span>
              </Link>
            </li>
            <li>
              <Link to="/SearchLocation">
                <span className='menu-icon'>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className='menu-text'>장소검색&nbsp;API</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;