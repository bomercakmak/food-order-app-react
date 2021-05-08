import MealsSummary from './MealsSummary'
import {useContext} from 'react'
import AvailableMeals from './AvailableMeals'
import CartContext from "../../store/cart-context";
import AvailableOrders from "./AvailableOrders"

const Meals = () => {
  const cartCtx = useContext(CartContext);

    return(
        <>
            <MealsSummary/>
            {cartCtx.changeMeals ? <AvailableMeals/> : <AvailableOrders/>}
        </>
    )
}

export default Meals;