import React, { useState } from 'react';
import { Contents, Inner, Input, Intro, Label, Section, Title, View } from '../StyledComponent';
import ViewBook from './ViewBook';

function SearchBook(){
  const [searchBook, setSaerchBook] = useState('');
  const [isShow, setIsShow] = useState(false);

  const inputHandler = (e) => {
    submitHandler(e);
  };

  const submitHandler = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setSaerchBook(e.target.value);
      setIsShow(true);
    };
  };

  return (
    <Section>
      <Inner>
        <Title className="title">
            <h2>도서 검색하기</h2>
          </Title>
          <Intro>
            네이버 검색 API를 활용해 검색어를 입력하면 그에 해당하는 도서가 검색됩니다.
          </Intro>
          <Contents className="contents">
            <form>
              <Label htmlFor="book">
                도서 이름 입력 👇🏻
              </Label>
              <Input type="text" onChange={inputHandler} onKeyDown={submitHandler} id='book' />
            </form>
            { isShow && searchBook.length > 0 ? (
              <ViewBook query={searchBook} />
            ) : (
              <View>검색어를 입력해주세요!</View>
            )}
          </Contents>
      </Inner>
    </Section>
  )
};

export default SearchBook;