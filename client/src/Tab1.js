import React, { useContext } from "react";
import { DataContext } from "./App"

const Tab1 = () => {
    const { data, changeHandler } = useContext(DataContext);

    return (
        <DataContext.Consumer>
            {
                values => (
                    <div>
                        <p>FORMS</p>
                        <div className='main-container'>
                            <form autoComplete="off">
                                <div>
                                    <label htmlFor='firstname'>FirstName: </label>
                                    <input id="firstname" placeholder='firstname' type='text' name="userFirstName" onChange={changeHandler} value={data.userFirstName} />
                                </div>
                                <div>
                                    <label htmlFor='lasttname'>LastName: </label>
                                    <input placeholder='lasttname' type='text' name="userLastName" onChange={changeHandler} value={data.userLastName} />
                                </div>
                                <div>
                                    <label htmlFor='dateofbirth'>Date Of Birth: </label>
                                    <input placeholder='Date Of Birth' type="date" name="userDOB" onChange={changeHandler} value={data.userDOB}
                                        min='1923-01-01'
                                        max='2023-12-31' />
                                </div>
                                <div>
                                    <label htmlFor='email'>Email: </label>
                                    <input id="email" placeholder='Email' type='email' name="userEmail" onChange={changeHandler} value={data.userEmail}
                                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                    />
                                </div>
                                <div>
                                    <label htmlFor='phoneNumber'>phoneNumber: </label>
                                    <input id="phoneNumber" placeholder='phoneNumber' type='tel' name="userMobileNum" onChange={changeHandler} value={data.userMobileNum}
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                                <div>
                                    <label htmlFor='password'>password: </label>
                                    <input id="password" placeholder='password' type="password" name="userPassword" onChange={changeHandler} value={data.userPassword}
                                        minLength="6" />
                                </div>
                                <div>
                                    <label htmlFor='Confirmpassword'>Confirm password: </label>
                                    <input id="Confirmpassword" placeholder='Confirmpassword' type="password" name="userConfirmPassco" onChange={changeHandler} value={data.userConfirmPassco}
                                        minLength="6" />
                                </div>
                            </form>
                        </div>
                    </div>

                )
            }
        </DataContext.Consumer>
    );
};


export default Tab1