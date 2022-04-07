import Head from 'next/head'
//import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react/cjs/react.production.min'
//import {TextInput} from "react-native";

function Header(){
  return(
    <div
    style = {{
      width: "100%",
      height: "fit-content",
      padding: "2vh",
      backgroundColor: "white",
      alignSelf: "top"
    }}>
      <h1 
      style = {{
        fontSize: "7vh",
      }}> Vote for Dafiny </h1>

    </div>

  )
}

function Content(){
  const fontSize = "5vh";


  return(
    <div
    style = {{
      baclgroundColor: "white",
      marginTop: "7vh"
    }}>
      <h2> Whats on your mind?..</h2>
      <textarea placeholder = "Type here....."
     
      style = {{
        fontSize: "5vh",
        padding: "2.5vh",
        border: "none",
        outline: "none",
        borderRadius: "2.5vh",
        textAlign: "top",
        alignItems: "top",
        justifyContent: "top",
        height: "100%",
        width: "90vh"

      }}/>

      <h4>Note: Your message will be sent anonymusly. Your name will not be used.</h4>
     
      <input
      className = "send"
      style = {{
        fontSize: fontSize,
        border: "none",
        outline: "none",
        backgroundColor: "white",
        padding: "2.5vh",
        borderRadius: "2.5vh",
        boxShadow: "inset 0vh 0vh 1vh grey",
        cursor: "pointer"
      }} type = "button" value={"Send"} onClick = {() =>{ }} />


      </div>
  )
}
export default function Home() {
  return (
    <div className="container">
    <Header/>
    <Content />
    </div>
  )
}
 
