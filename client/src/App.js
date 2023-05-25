import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, createContext, useRef } from "react";
import RegistrationForm from "./RegistrationForm";
import FileUpload from "./FileUpload";
import ImageCapture from "./ImageCapture";
import Signature from "./Signature";

// import Tab5 from "./Tab5";
// import Login from "./Cards"
import axios from "axios";
import "./App.css";
import Cards from "./Cards";
// import AllUsersCard from "./AllUsersCard";

export const DataContext = createContext();

const App = () => {
  const signatureRef = useRef();
  const [userDetailsCard, setUserDetailsCard] = useState([])
  const [data, setData] = useState({
    userFirstName: "",
    userLastName: "",
    userDOB: "",
    userEmail: "",
    userMobileNum: "",
    userPassword: "",
    userConfirmPassco: "",
    userPhoto: null,
    userSignature: null,
    userCapturedImge: null,
  });

  const changeHandler = (e) => {
    if (e.target.name === "userPhoto" || e.target.name === "userSignature") {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/register", data)
      .then(res => {
        alert(res.data);
        setUserDetailsCard(data);
      });
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ data, changeHandler, signatureRef, formSubmissionHandler }}>
        <Tabs className="Tabs">
          <TabList>
            <Tab>Registration Form</Tab>
            <Tab>File Upload</Tab>
            <Tab>Image Capture</Tab>
            <Tab>Signature</Tab>
            {/* <Tab>Captcha</Tab> */}
            <Tab>Card</Tab>
          </TabList>
          <TabPanel>
            <RegistrationForm />
          </TabPanel>
          <TabPanel>
            <FileUpload />
          </TabPanel>
          <TabPanel>
            <ImageCapture />
          </TabPanel>
          <TabPanel>
            <Signature />
          </TabPanel>
          {/* <TabPanel>
            <Tab5 />
          </TabPanel> */}
          <TabPanel>
            <Cards userDetails={userDetailsCard}/>
          </TabPanel>
        </Tabs>
      </DataContext.Provider> 
      <Cards userDetails={userDetailsCard}/>
      {/* <AllUsersCard /> */}
    </div>
  );
};

export default App;
