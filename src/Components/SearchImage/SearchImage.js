import React, { useState } from 'react';
import { Contents, Inner, Input, Intro, Label, Section, Title, View } from '../StyledComponent';
import ViewImage from './ViewImage';

function SearchImage(){
  const [searchImg, setSearchImg] = useState('');
  const [isShow, setIsShow] = useState(false);
  
  const inputHandler = (e) => {
    submitHandler(e);
  };
  
  const submitHandler = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setSearchImg(e.target.value);
      setIsShow(true);
    }
  }
  return (
    <Section>
      <Inner>
        <Title className="title">
          <h2>이미지 검색하기</h2>
        </Title>
        <Intro>
          네이버 검색 API를 활용해 검색어를 입력하면 그와 관련된 이미지가 검색됩니다.
        </Intro>
        <Contents className="contents">
          <form>
            <Label htmlFor="img">
              이미지 관련 키워드 입력 👇🏻
            </Label>
            <Input type="text" id='img' onChange={inputHandler} onKeyDown={submitHandler} />
          </form>
          { isShow && searchImg.length > 0 ? (
            <ViewImage query={searchImg} />
          ) : (
            <View>검색어를 입력해주세요!</View>
          )}
        </Contents>
      </Inner>
    </Section>
  )
}

export default SearchImage;