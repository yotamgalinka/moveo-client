import React from 'react';
import { Link } from 'react-router-dom';
import CodeHighlighter from './CodeHighlighter';
import smiley from "../asserts/smiley.jpg";

const CodeBlockItem = ({ title, goal, code, isMentor, handleCodeChange, handleSubmit, handleSave, isFinished }) => {
  
  if (isFinished) {
    return (
      <div className="codeBlock">
        <p>BRAVO</p>
        <a className="smileyImg" href="/">
          <img src={smiley} width={300} height={300} alt="" />
        </a>
      </div>
    )
  }

  return (
    <div className="codeBlock">
        <Link className="link" to={`/`}>back</Link>
        <h4>{title}</h4>
        <div className='codeContainer'>
          <h5>{goal}</h5>
          {!isMentor && <textarea
            className='textarea'
            defaultValue={code}
            onChange={handleCodeChange}
            readOnly={isMentor}
          />}
        </div>
        <CodeHighlighter code={code}/>
        {!isMentor && <>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleSave}>Save</button>
        </>}
    </div>
  );
};

export default CodeBlockItem;




