import mealsImg from "../../assets/meals.jpeg";
import { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderOrderButton from "./HeaderOrderButton";
import CartContext from "../../store/cart-context";

const Header = props => {
    const cartCtx = useContext(CartContext);
    return (
        <>
        <header className={classes.header} >
            <h1>Order Meals</h1>
            <div>
            <HeaderOrderButton buttonValue={cartCtx.changeMeals} onClick={cartCtx.toggleOrder}/>
            <HeaderCartButton  onClick={props.onShowCart}/>
            </div>
  

        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImg} alt="Foods"/>
        </div>
        </>
    )
}

export default Header;