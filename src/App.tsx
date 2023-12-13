import Card from './components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { textSelector } from './store/reducers/cardText';
import { getTitle } from './store/reducers/cardTitle';
import { footerSelector } from './store/reducers/cardFooter';
import { updateTitle } from './store/reducers/cardTitle';
import { updateText } from './store/reducers/cardText';
import { updateFooter } from './store/reducers/cardFooter';

function App() {
    const dispatch = useDispatch();
	const title = useSelector(getTitle);
	const text = useSelector(textSelector);
	const footer = useSelector(footerSelector);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 bg-success-subtle p-3 rounded-3">
					<label htmlFor="">Title:</label>
					<input
						value={title}
						onChange={e => dispatch(updateTitle(e.target.value))}
						type="text"
						className="form-control"
					/>
					<label htmlFor="">Text:</label>
					<input
						value={text}
						onChange={e => dispatch(updateText(e.target.value))}
						type="text"
						className="form-control"
					/>
					<label htmlFor="">Footer:</label>
					<input
						value={footer}
						onChange={e => dispatch(updateFooter(e.target.value))}
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
	);
}

export default App;
