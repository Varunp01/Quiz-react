import './container.css'
export default function Container({change}){
    function changetoquiz(){
        change("question")
    }
    return (
        <>
        <div className='container'>
        <div>Welcome To The Quiz</div>
        <button className='button' onClick={changetoquiz}>START</button>
        </div>
        </>
    )
}