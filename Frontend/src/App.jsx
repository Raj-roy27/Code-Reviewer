import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import ReactSimpleEditor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

const Editor = ReactSimpleEditor.default || ReactSimpleEditor;

const App = () => {
  const [code, setCode] = useState(`function sum(){\n  return 1+1\n}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    const response = await axios.post("https://code-reviewer-backend-vwct.onrender.com", {
      code,
    });

    setReview(response.data);
  };

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={15}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                borderRadius: "0.8rem",
                height: "100%",
                width: "100%",
              }}
            ></Editor>
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
};

export default App;
