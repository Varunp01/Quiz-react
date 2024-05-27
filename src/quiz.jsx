import Container from './container'
import { useState } from 'react'
import Question from './question'
import End from './end'
export default function Quiz(){
    let [mode, setMode] = useState("start")
    let [finalval, setFinal] = useState(0)
    let check=()=>{
        // console.log("hello")
        if (mode=="start") {
            return <Container change={change}></Container>
        } else if (mode=="question"){
            return <Question change={change} final={final}></Question>
        } else if (mode=="end"){
            return <End finalval={finalval}></End>
        }
    }
    function change(word){
        setMode(word)
    }
    function final(finalans){
        setFinal(finalans)
    }
    return (
        <>
        {check()}
        {/* {mode=="start"? <Container></Container>:<h1></h1>} */}
        </>
    )
}