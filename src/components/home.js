import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <label> Select Stubdy Course:
        <select>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javaScrip">Java Script</option>
            <option value="webAPIs">Web APIs</option>
        </select>
        </label>
    );
};

ReactDOM.render( <App />, document.quuerySelector("#root"));