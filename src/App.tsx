import Card from "./components/Card";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { textSelector } from "./store/reducers/cardText";
import { titleSelector } from "./store/reducers/cardTitle";
import { footerSelector } from "./store/reducers/cardFooter";
import { updateTitle } from "./store/reducers/cardTitle";
import { updateText } from "./store/reducers/cardText";
import { updateFooter } from "./store/reducers/cardFooter";

function App() {
    const title = useSelector(titleSelector);
    const text = useSelector(textSelector);
    const footer = useSelector(footerSelector);

    return (
        <Provider store={store}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 bg-success-subtle p-3 rounded-3">
                        <label htmlFor="">Title:</label>
                        <input
                            value={title}
                            onChange={(e) => updateTitle(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="">Text:</label>
                        <input
                            value={text}
                            onChange={(e) => updateText(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="">Footer:</label>
                        <input
                            value={footer}
                            onChange={(e) => updateFooter(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <Card />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
