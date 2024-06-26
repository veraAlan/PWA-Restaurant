import Button from '../Button/Button';
import FoodImage from '../FoodImage/FoodImage';
import FoodTitle from '../FootTitle/FoodTitle';
import style from './FoodItem.module.css';

const FoodItem = ({ food }) => {
    return <div className={style.container}>
        <FoodImage coverImage={food.coverImage} className={style.image} name={food.name} />
        <div className={style.details}>
            <FoodTitle name={food.name} />
            <p className={style.description}>{food.description}</p>
            <div className="mt-4 place-self-end">
                <h3 className={style.price}>Precio: {food.precio}</h3>
            </div>
            <Button redirect={`/pages/Details/?id=${food.id}`} text="Detalles" />
        </div>
    </div>;
};

export default FoodItem;
