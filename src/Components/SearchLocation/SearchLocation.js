import React, { useState } from 'react';
import { Contents, Inner, Input, Intro, Label, Section, Title, View } from '../StyledComponent';
import ViewLocation from './ViewLocation';

function SearchLocation(){
  const [searchLocal, setSearchLocal] = useState('');
  const [isShow, setIsShow] = useState(false);
  
  const inputHandler = (e) => {
    submitHandler(e);
  };
  
  const submitHandler = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setSearchLocal(e.target.value);
      setIsShow(true);
    }
  }

  return (
    <Section>
      <Inner>
        <Title className="title">
          <h2>지역 검색하기</h2>
        </Title>
        <Intro>
          네이버 검색 API를 활용해 검색어를 입력하면 그에 관련한 가게 또는 장소가 검색됩니다.
        </Intro>
        <Contents className="contents">
          <form>
            <Label htmlFor="location">
              키워드 입력 👇🏻
            </Label>
            <Input type="text"id='location' onChange={inputHandler} onKeyDown={submitHandler} />
          </form>
          { isShow && searchLocal.length > 0 ? (
            <ViewLocation query={searchLocal} />
          ) : (
            <View>검색어를 입력해주세요!</View>
          )}
        </Contents>
      </Inner>
    </Section>
  )
}

export default SearchLocation;