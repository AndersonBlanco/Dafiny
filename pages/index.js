import Head from 'next/head'
import Image from "next/image"
import skillsUSA_logo from "./skillsUSA_logo.png"
import skillsUSA_logo_br from "./skillsUSA_logo_br.png"
import insta_logo from "pages/instagram.png"
import snap_logo from "pages/snapchat.png"
import dafne_profile from "pages/dafne_profile.jpg";


import React from "react"
//import Header from '@components/Header'
// import Footer from '@components/Footer'
import { useState } from 'react/cjs/react.production.min' 
//import {TextInput} from "react-native";

//APP ID: ZNlUdn01EEMBCkPN10Xo9fQJEC0MhwxHkDPfzSn8
//CLient ID: fVf1Fm8OJLZLVn6KDo0dd2jU9eBWdPrpgStSqnwg
// JS ID: PwBfyhA4pg1qbx8Bq9nzsy9BFf57xnyZaqmvKas8


function Header(){
  return(
    <div
    style = {{
      width: "100%",
      height: "fit-content",
      padding: "2vh",
      backgroundColor: "white",
      alignSelf: "top",
      display: "grid",
      gridTemplateColumns: "auto auto auto"

    }}>
      <h1 
      style = {{
        fontSize: "7vh",
        gridColumnStart: 1,
gridColumnEnd: 1
     
      }}> Vote for Dafne </h1>




<div
style = {{
  backgroundColor: "white",
  width: "fit-content",
  height: "fit-content",
  padding: "0vh",
  position: "relative",
  right: "-64%",
  top: "-10.5%",
  gridColumnStart: 3,
gridColumnEnd: 3,

}}>
<Image 
      src = {skillsUSA_logo_br}
      height = {100}
       width = {150}
       objectFit = "contain"
       placeholder = {"blur"}
       quality = {100}
       layout = "fixed" 
       loading = {"lazy"}

       style = {{

       }}
       />
       </div>

       </div>

  )
}

function Content(){
  return(
    <div
    style = {{
      margin: "5vh",
     
    }}>

       <h2
       style = {{
        textDecoration: "underline",
        fontSize: "5vh",
       
       }}>Why vote for Dafne? </h2>
     
<div style = {{ display: "inline-flex"}}>
   <Image style = {{float: "left"}} src = {dafne_profile} quality = {100} height = {200} width = {500} placeholder = {"blur"} />
       <p style = {{fontSize: "3.4vh", margin: "3.4vh"}}>“I believe in change, diversity, and giving you a voice. <br/> All my life I have seen people build their lives from the ground up and I would love to contribute to that. <br/> Being state officer for Skills USA will help me inspire others in my community today and in the future. <br/> My message being if I can do it, so can they! When you need gudience, im willing to guide you. <br/> When you need suport of any kind, im willing to support you. <br/> I’m here to make the right decisions that will benefit you. <br/> I will give you the opportunity to speak on what effects/concerns you directly!!!” -Dafne   </p>
    </div>
    </div>

  )
}
function QA(){
  
const [fontSize, setFontSize] = React.useState(false);




  return(
    <div
    style = {{
      baclgroundColor: "white",
      marginTop: "1vh"
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
        height: "70%",
        width: "100vh"

      }}/>

      <h4>Note: Your message will be sent anonymusly. Your name will not be used.</h4>
     
     
      <input
      className = "send"
      style = {{
        fontSize: fontSize? "2.5vh" : "4vh",
        border: "none",
        outline: "none",
        backgroundColor: "white",
        padding: "2.5vh",
        borderRadius: "2.5vh",
        boxShadow: "inset 0vh 0vh 1vh grey",
        cursor: "pointer"
      }} type = "button" value={"Send"} onClick = {() =>{ setFontSize(!fontSize) }} />


    <div
    style = {{
    marginBottom: "5vh",
    marginTop: "5vh"

    }}>
  <div style = {{display: "inline-flex"}}><h2 style = {{display: "inline-flex"}}>Follow me on instagram! <a href = "https://www.instagram.com/dafneg25/" style = {{marginLeft: "1vh"}}> Here </a> <div style = {{marginTop: "-2vh", marginLeft: "1vh"}}> <Image src = {insta_logo} height =  {50} width = {"50%"} quality = {100} placeholder = "blur" layout = "fixed" style = {{ backgroundColor: "none"}} /> </div></h2> </div>
  <br/>
  <div style = {{display: "inline-flex"}}><h2 style = {{display: "inline-flex"}}>Follow me on Snapchat! <a href = "https://www.instagram.com/dafneg25/" style = {{ marginLeft: "1vh"}}>Here</a> <div style = {{marginTop: "-2vh", marginLeft: "1vh"}}><Image src = {snap_logo} height =  {50} width = {"50%"} quality = {100} placeholder = "blur"  layout = "fixed" /></div></h2></div>



<br/>
<br/>
<br/>
      </div>
      </div>
  )
}

function Footer(){
 return(
  
  <div
  style = {{
    width: "fit-content",
    height: "fit-content",
    padding: "0vh",
    position: "relative",
    right: "-64%",
    top: "-10.5%",
    gridColumnStart: 3,
  gridColumnEnd: 3,
  
  }}>
  <Image 
        src = {skillsUSA_logo_br}
        height = {100}
         width = {150}
         objectFit = "contain"
         placeholder = {"blur"}
         quality = {100}
         layout = "fixed"
         loading = {"lazy"}
  
         style = {{
  
         }}
         />
         </div>
 )
}


function Foot(){
  return(
    <div
    style = {{
      backgroundColor: "white",
      width: "100vh"
    }}>
      <h1>krehgvbgkerhkvb</h1>
      </div>
  )
}
export default function Home() {
  return (
    <div className="container">
    <Header/>
    <Content />
    <QA />
  
    </div>
  )
}
 
