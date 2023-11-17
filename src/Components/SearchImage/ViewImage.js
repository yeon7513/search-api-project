import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View } from '../StyledComponent';

function ViewImage({ query }) {
  const [view, setView] = useState([]);

  useEffect(() => {
    if(query){
      const printData = async () => {
        try {
          const url = `http://localhost:4100/search/image?query=${query}`;
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
            <div key={idx} className='img-wrap'>
              <div className='img-title'>
                <h4>{data.title}</h4>
                <a href={data.link} target='_blank' rel="noopener noreferrer">바로가기</a>
              </div>
              <div className='img-img'>
                <a href={data.link} target='_blank' rel="noopener noreferrer">
                  <img src={data.thumbnail} alt="thumbnail" />
                </a>
              </div>
            </div>
          )
        })}
    </View>
  )
}

export default ViewImage;