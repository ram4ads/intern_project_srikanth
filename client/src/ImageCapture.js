import React, { useContext, useState } from 'react';
import Webcam from 'react-webcam';
import { DataContext } from "./App";


const Tab4 = () => {
  const webcamRef = React.useRef(null);
  const { data, changeHandler } = useContext(DataContext);
  const [cap, setToCap] = useState(false);
  const [photoResolution, setPhotoResolution] = useState({ width: 400, height: 300 });

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("Image size:", getImageSize(imageSrc));
    changeHandler({ target: { name: "userCapturedImge", value: imageSrc } });
    setToCap(true);
  };

  const getImageSize = (imageSrc) => {
    const byteSize = (imageSrc.length * 0.75) / 1024; // Convert base64 string to bytes
    const kiloBytes = byteSize / 1024;
    return `${byteSize.toFixed(2)} bytes (${kiloBytes.toFixed(2)} KB)`;
  };

  const handleResolutionChange = (event) => {
    const { value } = event.target;
    const [width, height] = value.split('x').map(Number);
    setPhotoResolution({ width, height });
  };

  return (
    <div>
      {cap ? (
        <div>
          <p>Your captured Image</p>
          <img src={data.userCapturedImge} alt="screenshot" width={550} height={350} />
          <button className='recaptcha-btn' onClick={() => setToCap(false)}>ReCapture</button>
        </div>
      ) : (
        <>
          <div style={{ position: 'relative', width: '450px', height: '350px', overflow : "hidden"}}>
            <Webcam
              audio={false}
              height={photoResolution.height}
              width={photoResolution.width}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            />
            <select value={`${photoResolution.width}x${photoResolution.height}`} onChange={handleResolutionChange} style={{ position:'absolute', top: '10px', left: '10px', zIndex: 2 }}>
              <option value="400x300">400x300</option>
              <option value="640x480">640x480</option> 
              <option value="800x600">800x600</option>
              <option value="1280x720">1280x720</option> {/*hd*/}
              <option value="1920x1080">1920x1080</option>{/*full hd*/}
            </select>
            <button onClick={captureImage} style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 2 }}>
              Capture Image
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Tab4;







// import React, { useContext, useState } from 'react';
// import Webcam from 'react-webcam';
// import { DataContext } from "./App"


// const Tab4 = () => {
//   const webcamRef = React.useRef(null);
//   const { data, changeHandler } = useContext(DataContext)
//   const [cap, setToCap] = useState(false);

//   // const captureImage = () => {
//   //   const imageSrc = webcamRef.current.getScreenshot();
//   //   console.log(imageSrc);
//   //   changeHandler({ target: { name: "userCapturedImge", value: imageSrc } })
//   //   setToCap(true);
//   // };
//   const captureImage = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log("Image size:", getImageSize(imageSrc));
//     changeHandler({ target: { name: "userCapturedImge", value: imageSrc } });
//     setToCap(true);
//   };
  
//   const getImageSize = (imageSrc) => {
//     const byteSize = (imageSrc.length * 0.75) / 1024; // Convert base64 string to bytes
//     const kiloBytes = byteSize / 1024;
//     return `${byteSize.toFixed(2)} bytes (${kiloBytes.toFixed(2)} KB)`;
//   };
  

//   return (
//     <div>
//       {
//         cap ? (
//           <div>
//             <p>Your captured Image</p>
//             <img src={data.userCapturedImge} alt="screenshot"  width={400} height={300}/>
//             <button className='recaptcha-btn' onClick = { () => setToCap(false)}>ReCapture</button>
//           </div>
//         ) : (
//           <>
//             <Webcam
//               audio={false}
//               height={350}
//               width={450}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//             />
//             <button onClick={captureImage}>Capture Image</button>
//           </>
//         )
//       }
//     </div>
//   );
// };

// export default Tab4;
