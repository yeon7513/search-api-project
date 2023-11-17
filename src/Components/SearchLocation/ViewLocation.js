import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View } from '../StyledComponent';

function ViewLocation({ query }) {
  const [view, setView] = useState([]);

  function remove(el) {
    const doc = new DOMParser().parseFromString(el, 'text/html');
    return doc.body.textContent || "";
  }

  useEffect(() => {
    if(query){
      const printData = async () => {
        try {
          const url = `http://localhost:4100/search/local?query=${query}`;
          const result = await axios.get(url);
          setView(result.data.items);
        } catch (err) {
          console.error(err);
        }
      };
      printData();
    } else {
      setView([]);
    }
  }, [query]);

  return (
    <View>
      {view.map((data, idx) => {
        return (
          <div key={idx} className='local-wrap'>
            <div className='local-title'>
              <h4>{remove(data.title)}</h4>
              <span>{data.category}</span>
              <a href={data.link} target='_blank' rel="noopener noreferrer">바로가기</a>
            </div>
            <div className='local-content'>
              <div className='local-tel'>
                <span>{data.telephone}</span>
              </div>
              <div className='local-address'>
                <p>지번 주소</p>
                <span>{data.address}</span>
              </div>
              <div className='local-roadAddress'>
                <p>도로명 주소</p>
                <span>{data.address}</span>
              </div>
            </div>
          </div>
        )
      })}
    </View>
  )
}

export default ViewLocation;