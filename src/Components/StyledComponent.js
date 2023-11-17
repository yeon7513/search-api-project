import styled from 'styled-components';

export const Section = styled.section`
  box-sizing: border-box;
`

export const View = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
  box-sizing: border-box;
`

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  box-sizing: border-box;
`

export const Title = styled.div`
  display: inline-block;
  padding: 10px;
  background-image: linear-gradient(to bottom, rgba(240, 195, 117, 0) 0%, rgba(240, 195, 117, 0) 49%, rgba(240, 195, 117, 1) 50%,rgba(240, 195, 117, 1) 100%);
`

export const Intro = styled.span`
  display: block;
  margin: 20px 0 30px 10px;
  font-size: 14px;
`

export const Contents = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: #F7E6C4;
  box-sizing: border-box;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 800;
`

export const Input = styled.input`
  padding: 10px 15px;
  border: none;
  border-bottom: 3px solid #F1C376;
  color: #F1C376;
  transition: border .3s;
  &:focus {
    outline: none;
    border-bottom: 3px solid #606C5D;
  }
`

export const Again = styled.p`
  ${View};
`