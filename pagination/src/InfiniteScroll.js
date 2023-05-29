import React, { useEffect, useState } from 'react';
import ImageCard from './Cards/ImageCard';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(10);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${startPoint}&_limit=${endPoint}`
      );
      const responseData = await response.json();
      if (responseData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...responseData]);
        setStartPoint((prevStart) => prevStart + 10);
        setEndPoint((prevEnd) => prevEnd + 10);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (loading || !hasMore) return;
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchData();
    }
  };

  return (
    <div>
      <center>
        <h1>Images</h1>
        <div className='image-container'>
          {data.map((each) => (
            <ImageCard key={each.id} Details={each} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default InfiniteScroll;








// import React, { useEffect, useState } from 'react'
// import "./App.css"

// const InfiniteScroll = () => {
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         const images = async () => {
//           const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//           const responseData = await response.json();
//           setPhotos(responseData);
//         }
//         images()
//       }, [])


//   return (
//     <div>
//         <center>
//             {
//                 photos.map(eachPhoto => (
//                     <div style={{border:"2px solid black", margin : "10px", height : "400px", width :"400px"}}>
//                     <p>{eachPhoto.id}</p>
//                     <img src = {eachPhoto.url} alt = {eachPhoto.id} height={300} width={300}/>
//                     </div>
//                 ))
//             }
//         </center>
//     </div>
//   )
// }

// export default InfiniteScroll