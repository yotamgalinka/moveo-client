// CodeBlock.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlockContext } from '../context/blockContext.js'; 
import CodeBlock from '../components/codeBlockItem.js'

function CodeBlockPage() {
  const { id } = useParams();
  const codeBlockId = Number(id);
  const codeBlocks = useContext(BlockContext);

  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [code, setCode] = useState("");
  const [isMentor, setIsMentor] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // const socket = new WebSocket('ws://localhost:5000');
    const socket = new WebSocket('wss://moveo-api-mayabyle.onrender.com');

    socket.addEventListener('open', () => {  //The 'open' event is fired when the WebSocket connection is successfully established
      console.log('Connected to WebSocket');
      socket.send(JSON.stringify({ type: 'join', codeBlockId }));
      const block = codeBlocks.find((block) => block.id === codeBlockId)
      
      if (block) {
        setTitle(block.title);
        setGoal(block.goal);
        setCode(block.code);
      }
    });

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);    
      if (data.type === 'readOnly') {
        console.log('Received readOnly signal');
        setIsMentor(true)
      } 
      else if (data.type === 'code') {
        setCode(data.code)
      }
    });

    socket.addEventListener('close', () => {
      console.log('Disconnected from WebSocket');
    });

    setWs(socket);

    return () => {
      socket.close();
    };
  }, [codeBlockId, codeBlocks]);

  const handleCodeChange = (event) => {
    const newCode = event.target.value; 
    ws.send(JSON.stringify({ type: 'codeChange', newCode }));
  };

  
  return (
    <CodeBlock 
      title={title} 
      goal={goal} 
      code={code} 
      handleCodeChange={handleCodeChange} 
      isMentor={isMentor}
    />
  );
}

export default CodeBlockPage;
