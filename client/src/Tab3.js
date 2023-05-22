import SignatureCanvas from 'react-signature-canvas';
import React, { useContext } from "react";
import { DataContext } from "./App";

const Tab3 = () => {
  const { changeHandler, signatureRef, formSubmissionHandler } = useContext(DataContext);

  const handleClearSignature = () => {
    signatureRef.current.clear();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (signatureRef.current.isEmpty()) {
      // Handle the case when the signature is not provided
      return;
    }
    const base64data = signatureRef.current.toDataURL();
    changeHandler({ target: { name: "userSignature", value: base64data } });
    formSubmissionHandler(e);
  };

  return (
    <div>
      <p>Signature</p>
      <SignatureCanvas
      backgroundColor='#FFFDD0'
      penColor='black'
        ref={signatureRef}
        canvasProps={{ width: 500, height: 200 }}
      />
      <button onClick={handleClearSignature}>
        Clear Signature
      </button>
      <div className="button-container">
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Tab3;


