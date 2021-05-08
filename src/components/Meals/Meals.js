import MealsSummary from './MealsSummary'
import {useContext} from 'react'
import AvailableMeals from './AvailableMeals'
import CartContext from "../../store/cart-context";

const Meals = () => {
  const cartCtx = useContext(CartContext);

    return(
        <>
            <MealsSummary/>
            {cartCtx.changeMeals && <AvailableMeals/>}
        </>
    )
}

export default Meals;