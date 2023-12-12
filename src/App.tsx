import React, { useState } from "react";
import Card from "./components/Card";

function App() {
    const [title, setTitle] = useState("This prop drilling SUCKS");
    const [text, setText] = useState("Seriously, it's so bad");
    const [footer, setFooter] = useState("I can't wait until these values are just defined in global state with Redux");

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 bg-success-subtle p-3 rounded-3">
                    <label htmlFor="">Title:</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="">Text:</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="">Footer:</label>
                    <input
                        value={footer}
                        onChange={(e) => setFooter(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Card title={title} text={text} footer={footer} />
                </div>
            </div>
        </div>
    );
}

export default App;
