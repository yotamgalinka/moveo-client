import React from 'react';
import { Link } from 'react-router-dom';
import CodeHighlighter from './CodeHighlighter';

const CodeBlockItem = ({ title, goal, code, handleCodeChange, isMentor }) => {

  return (
    <div className="CodeBlock">
        <Link to={`/`}>back</Link>
        <h5>{title}</h5>
        <div className='codeContainer'>
          <p>{goal}</p>
          {!isMentor && <textarea
            className='textarea'
            defaultValue={code}
            onChange={handleCodeChange}
            readOnly={isMentor}
          />}
        </div>
        <CodeHighlighter code={code}/>
    </div>
  );
};

export default CodeBlockItem;




