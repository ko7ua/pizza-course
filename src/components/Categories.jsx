import React from "react";

export default function Categories() {
	const [activeCat, setActiveCat] = React.useState(0);

	const onClickCat = (index) => {
		setActiveCat(index)
	}

	const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]


	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => (
					<li key={index} onClick={() => onClickCat(index)} className={activeCat === index ? 'active' : ''}>{value}</li>
				))}
			</ul>
		</div>
	);
}