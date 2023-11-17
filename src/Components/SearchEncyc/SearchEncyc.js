import React, { useState } from 'react';
import ViewEncyc from './ViewEncyc';
import { Contents, Inner, Input, Intro, Label, Section, Title, View } from '../StyledComponent';

function SearchEncyc() {
  const [searchEncyc, setSearchEncyc] = useState('');
  const [isShow, setIsShow] = useState(false);
  
  const inputHandler = (e) => {
    submitHandler(e);
  };
  
  const submitHandler = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setSearchEncyc(e.target.value);
      setIsShow(true);
    }
  }

  return (
    <Section>
      <Inner>
        <Title className="title">
          <h2>백과사전 검색하기</h2>
        </Title>
        <Intro>
          네이버 검색 API를 활용해 검색어를 입력하면 그에 해당하는 내용의 백과사전이 출력됩니다.
        </Intro>
        <Contents className="contents">
          <form>
            <Label htmlFor="encyc">
              단어 입력 👇🏻
            </Label>
            <Input type="text" onChange={inputHandler} onKeyDown={submitHandler} id='encyc' />
          </form>
          { isShow && searchEncyc.length > 0 ? (
            <ViewEncyc query={searchEncyc} />
          ) : (
            <View>검색어를 입력해주세요!</View>
          )}
        </Contents>
      </Inner>
    </Section>
  )
}

export default SearchEncyc;