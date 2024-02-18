import React ,{useState} from 'react';
import PropTypes from 'prop-types';

function TextForm(props) {
    const handleupClick =()=>{
        console.log("Upper case was clicked."+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleonChange =(event)=>{
        console.log("On change.")
        setText(event.target.value);
    }
    const handledownClick =()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    const handleclearClick =()=>{
        setText("");
    }
    const handlecopy =()=>{
        var te = document.getElementById("myBox");
        te.select();
        navigator.clipboard.writeText(te.value);
        props.showAlert("Text copied succesfully...!","success");
    }
    const [text, setText] = useState('');
  
    return (
        <>
        <div style={{color: props.mode ==='dark' ? 'white':'black'}}>
            <div className="container" style={{color: props.mode ==='dark' ? 'white':'black'}}>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" style={{backgroundColor: (props.mode ==='success' ? '#198754':props.mode==='dark' ? '#212529':'white'),color: props.mode ==='dark' ? 'white':'black',borderColor: props.mode === 'dark' ?'#212529':''}} value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
            </div>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                
                
            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.mode ==='dark' ? '#212529':'')||(props.mode ==='success' ? '#198754':''), borderColor: props.mode === 'dark' ?'#212529':''}} onClick={handleclearClick} disabled={text.length===0}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.mode ==='dark' ? '#212529':'')||(props.mode ==='success' ? '#198754':''), borderColor: props.mode === 'dark' ?'#212529':''}} onClick={handleupClick} disabled={text.length===0}>Convert to upper case</button>
            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.mode ==='dark' ? '#212529':'')||(props.mode ==='success' ? '#198754':''), borderColor: props.mode === 'dark' ?'#212529':''}} onClick={handledownClick} disabled={text.length===0}>Convert to lower case</button>
            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.mode ==='dark' ? '#212529':'')||(props.mode ==='success' ? '#198754':''), borderColor: props.mode === 'dark' ?'#212529':''}} onClick={handlecopy}disabled={text.length===0}>copy Text</button>
            </div>
            <div className="component my-1">
            <h2>previvew</h2>
            <p>{text.length>0 ?text:"enter somthing in upper textbox"}</p>
            </div>
        </div>
        </>
        
    )
}

TextForm.propTypes = {
   heading: PropTypes.string,
};

export default TextForm;