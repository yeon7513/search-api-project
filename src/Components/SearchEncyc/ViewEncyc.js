import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View } from '../StyledComponent';

function ViewEncyc({ query }) {
  const [view, setView] = useState([]);

  function remove(el) {
    const doc = new DOMParser().parseFromString(el, 'text/html');
    return doc.body.textContent || "";
  }

  useEffect(() => {
    if(query){
      const printData = async () => {
        try {
          const url = `http://localhost:4100/search/encyc?query=${query}`;
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
    <View className='view-encyc'>
      <div>
        {view.map((data, idx) => {
          return (
            <div key={idx} className='encyc-wrap'>
              <div className='encyc-title'>
                <h4>{remove(data.title)}</h4>
                <a href={data.link} target='_blank' rel="noopener noreferrer">바로가기</a>
              </div>
              <div className='encyc-content'>
                <div className='encyc-thumbnail'>
                  <img src={data.thumbnail} alt="thumbnail" />
                </div>
                <div className='encyc-des'>
                  <p>{remove(data.description)}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </View>
  )
}

export default ViewEncyc;