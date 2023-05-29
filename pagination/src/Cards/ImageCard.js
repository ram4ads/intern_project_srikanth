import React , {useState} from 'react'
import "./index.css"

const ImageCard = ({ Details }) => {
    const [userInput, setUserInput] = useState("")
    const [userTextOnImage, setUserTextOnImage] = useState(false)
    const [value, setValue] = useState("")

    const sumbitHandler = (e) => {
        e.preventDefault();
        setUserTextOnImage(true)
        setValue(userInput);
        setUserInput("")
    }

    const inputHandler = e => {
        setUserInput(e.target.value)
    }

    return (
        <div className='card-container'>
            {userTextOnImage? <p>{value}</p> : null}
            <img src={Details.url} alt={Details.albumId} className='images' />
            <form onSubmit={sumbitHandler}>
            <input value = {Details.id} placeholder='Text Here' onChange={inputHandler} readOnly/> 
            <div className='button-container'>
                <button className='button' type='submit'>Submit</button>
            </div>
            </form>
        </div>
  )
}

export default ImageCard