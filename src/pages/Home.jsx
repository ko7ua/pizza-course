import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

export default function Home () {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62e39e72b54fc209b88cba14.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [ ...new Array(10)].map((_, index) => <Skeleton key={index}/>) :
                    items.map((obj) => <PizzaBlock key={obj.id}
                                                   img={obj.imageUrl}
                                                   title={obj.title}
                                                   price={obj.price}
                                                   size={obj.sizes}
                                                   types={obj.types}/>)
                }
            </div>
        </>
    )
}