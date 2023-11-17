import React from 'react';
import { Inner, Section } from './StyledComponent';

function Home(){
  return (
    <Section>
      <Inner>
        <div className="intro">
          <div className='intro-wrapper'>
            <div className="intro-title">
              <h2>💻 네이버 오픈 API를 활용한 프로젝트</h2>
            </div>
            <div className="intro-box">
              <div className='intro-content'>
                <h3>프로젝트 소개</h3>
                <p>리액트로 제작하여 오픈소스를 활용하고 여러 검색이 가능한 페이지입니다.</p>
              </div>
              <div className='intro-content'>
                <h3>제작 기간</h3>
                <p>2023.11.16 - 2023.11.??</p>
              </div>
              <div className='intro-content'>
                <h3>주요 기능</h3>
                <p>주제에 맞는 검색이 가능합니다.ㅋ..무슨의미가있니..</p>
              </div>
              <div className='intro-content'>
                <h3>개발 코멘트</h3>
                <p>그냥..해봤어요........재밌네요..ㅎㅎ</p>
              </div>
            </div>
          </div>
          <div className='main-image'>
            <img src={process.env.PUBLIC_URL+'images/main-image.png'} alt="main-images" />
          </div>
        </div>
      </Inner>
    </Section>
  )
}

export default Home;