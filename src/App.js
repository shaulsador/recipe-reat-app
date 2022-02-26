import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './Item';

function App() {
	// const [appId, setAppId] = useState('');
	// const [, setAppKey] = useState('');
	const appId = 'fbf43754';
	const appKey = '5ab4e39bfeec2000f1cead4af6ef2fe7';
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const [click, setClick] = useState(false);

	const getAPI = async () => {
		var res = await fetch(
			`https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}`
		);
		var js = await res.json();
		setData(js.hits);
		setClick(false);
		setSearch('');
	};

	useEffect(() => {
		getAPI();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [click]);

	const clickSearch = (e) => {
		e.preventDefault();
		setClick(true);
	};

	return (
		<div className='base'>
			<h1 className='title'>Recipe Search by Xiaotian</h1>
			<form onSubmit={clickSearch}>
				<input
					type='text'
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder='e.g.chicken'
				></input>
				<button type='submit'>Search</button>
			</form>
			<div className='recipe'>
				{data.map((item) => (
					<Item
						key={item.recipe.label}
						label={item.recipe.label}
						ingredients={item.recipe.ingredients}
						image={item.recipe.image}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
