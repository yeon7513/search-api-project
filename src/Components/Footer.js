import React from 'react';

function Footer(){
  return (
    <footer>
      <div className='inner'>
        <a href="http://developers.naver.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL+'images/NAVER_OpenAPI_c_hor.png'} alt="NAVER 오픈 API" />
          <span>네이버&trade;는 NAVER㈜의 등록상표입니다.</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;