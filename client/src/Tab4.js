import React from 'react';
import Webcam from 'react-webcam';

const Tab4 = () => {
  const webcamRef = React.useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    // Use the captured image data in your form or application
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={350} 
        width={600} 
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={captureImage}>Capture Image</button>
    </div>
  );
};

export default Tab4;
