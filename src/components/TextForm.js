import React,{useState} from 'react'

export default function TextForm(props) {
    const handleClearClick=()=>{
        let newText=""
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked "+text) //to test whether button is working or not
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleDownClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleOnChange=(event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")
    }
    const handleXtraSpace=()=>{
        let newText=text.split(/[" "]+/);
        setText(newText.join(' '))
        props.showAlert("Extra Spaces Removed","success")
    }
    const [text,setText] = useState('Enter Text Here');//put inside function component
    //setText used for updation of state as:
    //text = "abcd" is wrong way to change or update text
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleXtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Approximately {0.4 * text.split(" ").length} Seconds To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Text is Empty'}</p>    
    </div>
    </>
  )
}
