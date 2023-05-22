import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Tab5 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your form submission here
  };

  return (
    <div>
      <center>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        <ReCAPTCHA
          sitekey="6LePoR8mAAAAAEQKMs4hWduOx0NE5_dGvp-OvfjN"
          onChange={(response) => console.log(response)}
        />
        <button type="submit">Submit</button>
      </form>
      </center>
    </div>
  );
};

export default Tab5;
