import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => { 

    return (
        <button className={classes.button} onClick={props.onClick} >
            <span>
                Orders
            </span>
        </button>
    )
}

export default HeaderCartButton;