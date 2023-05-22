import React, { useContext } from "react";
import { DataContext } from "./App"

const Tab2 = () => {
    const { data,changeHandler } = useContext(DataContext);

    const convertToBase64 = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload= () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = error => {
                reject(error);
            }
        })
    }

    const imageHandler = async e => {
        const file = e.target.files[0];
        if (file) {
          const base64 = await convertToBase64(file);
          const syntheticEvent = { target: { name: "userPhoto", value: base64 } };
          changeHandler(syntheticEvent);
        }
      };


    return (
        <DataContext.Consumer>
            {
                values => (
                    <div>
                        <label htmlFor="photos"></label>
                        <input 
                        name="userPhoto"
                        type="file" accept=".jpeg, .png, .jpg" onChange={imageHandler} id = "photos" max="500000"/>
                         <img src={data.userPhoto} alt="EncryptedPic" height={200} width={200}/>
                    </div>
                )
            }
        </DataContext.Consumer>
    );
};

export default Tab2;

