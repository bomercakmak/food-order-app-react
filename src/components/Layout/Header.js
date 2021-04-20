import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <>
        <header className={classes.header}>
            <h1>Order Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImg} alt="Foods"/>
        </div>
        </>
    )
}

export default Header;