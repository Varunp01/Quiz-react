import { useState } from 'react'
import './question.css'
let x=0;
export default function Question(prop){
    let [i, setI] = useState(0)
    function getans() {
    var ele = document.getElementsByName('answer');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            console.log(ele[i].value)
        
        if(ele[i].value==ele[i].className){
            console.log("correct")
            x=x+1;
        }else{
            console.log("wrong")
        }
    }
    }
    

    }


    function changetonext(){
    // if(questions[i-2].answer==)

    if (i<3) {
        setI(i=i+1)
        getans()
    }else{
        document.querySelector(".buttonNext").style="visibility: hidden";
        setI(i=i+1)
        getans()
    }
    }

    function changetoend(){
        getans()
        prop.final(`${x}`)
        prop.change("end")
    }
    let questions=[{
        number: 1,
        question: "1+2",
        optionA: 1,
        optionB: 2,
        optionC: 3,
        optionD: 4,
        answer: 3
    },
    {
        number: 2,
        question: "1+1",
        optionA: 1,
        optionB: 2,
        optionC: 3,
        optionD: 4,
        answer: 2
    },
    {
        number: 3,
        question: "0+1",
        optionA: 1,
        optionB: 2,
        optionC: 3,
        optionD: 4,
        answer: 1
    },
    {
        number: 4,
        question: "2+2",
        optionA: 1,
        optionB: 2,
        optionC: 3,
        optionD: 4,
        answer: 4
    },
    {
        number: 5,
        question: "1+3",
        optionA: 1,
        optionB: 2,
        optionC: 3,
        optionD: 4,
        answer: 4
    }
];
    let printquestion=()=>{
            return (
            <div>
            <div>Question {questions[i].number}/5</div>
            <div>{questions[i].question}</div>
            <label><input type="radio" name="answer" className={questions[i].answer} value={questions[i].optionA} />{questions[i].optionA}</label>
            &nbsp;&nbsp;&nbsp;
            <label><input type="radio" name="answer" className={questions[i].answer} value={questions[i].optionB} />{questions[i].optionB}</label>
            <br></br>
            <label><input type="radio" name="answer" className={questions[i].answer} value={questions[i].optionC} />{questions[i].optionC}</label>
            &nbsp;&nbsp;&nbsp;
            <label><input type="radio" name="answer" className={questions[i].answer} value={questions[i].optionD} />{questions[i].optionD}</label>
            </div>
        )
    }
    return (
        <>
        <div className='question'>
        {printquestion()}
        </div>
        <button className='buttonEnd' onClick={changetoend}>End</button>
        <button className='buttonNext'onClick={changetonext}>Next</button>
        </>
    )
}