import React, { useEffect, useState } from 'react';

export default function Cats() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch(
      'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts',
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(data).map(item => (
        <div className="container">
          {data.all.map(item => (
            <div key={item._id}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      ))}
      ))}
    </div>
  );
}
