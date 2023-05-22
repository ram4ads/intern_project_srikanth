import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, createContext, useRef } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

import axios from "axios";
import "./App.css";
import Cards from "./Cards";

export const DataContext = createContext();

const App = () => {
  const signatureRef = useRef();
  const [data, setData] = useState({
    userFirstName: "",
    userLastName: "",
    userDOB: "",
    userEmail: "",
    userMobileNum: "",
    userPassword: "",
    userConfirmPassco: "",
    userPhoto: null,
    userSignature: null
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
    // Perform additional form submission logic, such as sending data to a server
    axios
      .post("http://localhost:5000/register", data)
      .then(res => {
        alert(res.data);
      });
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ data, changeHandler, signatureRef, formSubmissionHandler }}>
        <Tabs className="Tabs">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
            <Tab>Tab 5</Tab>
          </TabList>
          <TabPanel>
            <Tab1 />
          </TabPanel>
          <TabPanel>
            <Tab2 />
          </TabPanel>
          <TabPanel>
            <Tab3 />
          </TabPanel>
          <TabPanel>
            <Tab4 />
          </TabPanel>
          <TabPanel>
            <Tab5 />
          </TabPanel>
        </Tabs>
      </DataContext.Provider>
      {/* <Cards /> */}
    </div>
  );
};

export default App;
