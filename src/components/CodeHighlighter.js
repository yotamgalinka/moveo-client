import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);

const CodeHighlighter = ({ code }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            delete codeRef.current.dataset.highlighted;
            hljs.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <pre style={{width: '71vw'}}>
            <code ref={codeRef} className={`language-javascript`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeHighlighter;
