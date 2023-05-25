import SignatureCanvas from 'react-signature-canvas';
import React, { useContext } from "react";
import { DataContext } from "./App";
import ReCAPTCHA from 'react-google-recaptcha';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your form submission here
    // captch submission
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
      <button onClick={handleClearSignature} className='clear-sign'>
        Clear Signature
      </button>

      {/* Captcha code */}
      <form onSubmit={handleSubmit}>
        <center>
        {/* Your form fields here */}
        <ReCAPTCHA
          sitekey="6LePoR8mAAAAAEQKMs4hWduOx0NE5_dGvp-OvfjN"
          onChange={(response) => console.log(response)}
        />
        </center>
      </form>
       {/* upto here  
       */}

      <div className="button-container">
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Tab3;


