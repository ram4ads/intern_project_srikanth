import React, { useContext} from 'react'
import { CounterContext } from './App';
import axios from "axios";

import "./App.css"



const Nav = () => {
    const {count1, setCount1} = useContext(CounterContext)
    const {count2, setCount2} = useContext(CounterContext)

    const bt1Handler = () => {
        setCount1(count1 + 1)
        const link1 = {
            link1: "link1",
        }
        axios.post("http://localhost:5000/post", link1).then(() => {
            console.log("Link1 sucessfully addded to the db")
        }).catch((err) => {
            console.log("error in app.js", err)
        })
    }

    const bt2Handler = () => {
        setCount2(count2 + 1)
        const link1 = {
            link1: "link2",
        }
        axios.post("http://localhost:5000/post", link1).then(() => {
            console.log("Link2 sucessfully addded to the db")
        }).catch((err) => {
            console.log("error in app.js", err)
        })
    }

    return (
        <>
        <CounterContext.Consumer>
            {
                values => 
                    <div className='main-container'>
                        <h1>React MySql</h1>
                        <div className='container'>
                            <p> You Cliked on this <span className="click" onClick={bt1Handler}> Link1 </span> <span> {count1} </span> times</p>
                            <div>
                                <p> You Cliked on this <span className="click" onClick={bt2Handler}> Link2 </span> <span> {count2} </span> times</p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            }
        </CounterContext.Consumer>
        </>
    )
}

export default Nav