import '../index.css';
import reportWebVitals from '../reportWebVitals';
import Welcome from "./Welcome";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));
root.render(
    <Welcome name={"hansol"}/>,
    <Welcome name={"Paul"}/>,
    <Welcome name={"hansol"}/>,
    <Welcome name={"hansol"}/>
)

reportWebVitals();
