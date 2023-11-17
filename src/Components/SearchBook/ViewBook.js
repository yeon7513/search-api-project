import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View } from '../StyledComponent';

console.log();

function ViewBook({ query }){
  const [view, setView] = useState([]);

  function remove(el) {
    const doc = new DOMParser().parseFromString(el, 'text/html');
    return doc.body.textContent || "";
  }

  useEffect(() => {
    if(query){
      const printData = async () => {
        try {
          const url = `http://localhost:4100/search/book?query=${query}`;
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
      <div>
        {view.map((data, idx) => {
          return (
            <div key={idx} className='book-wrap'>
              <div className='book-title'>
                <h4>{remove(data.title)}</h4>
                <span className='book-author'>{remove(data.author)}</span>
                <a href={data.link} target='_blank' rel="noopener noreferrer">바로가기</a>
              </div>
              <div className='book-content'>
                <div className='book-img'>
                  <img src={data.image} alt="book cover" />
                </div>
                <div className='book-des'>
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

export default ViewBook;