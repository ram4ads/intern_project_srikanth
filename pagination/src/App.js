import React, { useEffect, useState } from 'react'
import Pagination from "./Pagination"
import ImageCard from './Cards/ImageCard'

import "./App.css"
// import InfiniteScroll from './InfiniteScroll'

const App = () => {
  // const [userInput, setUserInput] = useState("")
  const [data, setData] = useState([])
  const [dataInPerPage, setDataInPerPage] = useState([])
  // const [userTextOnImage, setUserTextOnImage] = useState(false)
  const [startPoint, SetStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(10);


  useEffect(() => {
    const images = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${startPoint}&_limit=${endPoint}`);
      const responseData = await response.json();
      setData(responseData);
      setDataInPerPage(responseData); //slice(0, 10)
      console.log("responseData", responseData);
    }
    images()
  }, [startPoint,endPoint])

  const pagehandler = (pageNumber) => {
    setDataInPerPage(data.slice((pageNumber * 10) - 10, pageNumber * 10))
    SetStartPoint((pageNumber * 10) - 10)
    setEndPoint(pageNumber * 10)
    console.log("pagenumber", pageNumber)
    console.log("starting page", startPoint)
    console.log("endPoint",endPoint)
    // console.log(data.slice((pageNumber * 10) - 10, pageNumber * 10))
  }

  return (
    <div>
      <center>
        <h1>Images</h1>
        <div className='image-container'>
          {
            dataInPerPage.map(each => (
              <ImageCard key = {each.id} Details = {each}/>
            ))
          }
        </div>
      </center>
      <Pagination data={data} pageHandler={pagehandler} />
      {/* <InfiniteScroll /> */}
    </div>
  )
}

export default App