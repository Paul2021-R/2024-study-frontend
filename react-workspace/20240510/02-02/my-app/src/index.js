import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from "./chapter_05/CommentList";
import {createRoot} from "react-dom/client";

// ReactDOM.render(
//     <React.StrictMode>
//         <CommentList />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// const root = document.getElementById('root');
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CommentList />
    </React.StrictMode>
)

reportWebVitals();
