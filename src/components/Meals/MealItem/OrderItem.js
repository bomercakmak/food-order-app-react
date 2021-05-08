import classes from "./MealItem.module.css";

const MealItem = (props) => {
  
let totalCost = 0;
props.order.orderedItems.map((order) => {
    return totalCost = totalCost + order.price * order.amount;
}) 
  return (
    <li className={classes.meal}>
      <div>
      <div className={classes.price}>{props.order.user.name}</div>
      <h3>Order Information</h3> {props.order.orderedItems.map(order => {
       return <div className={classes.description}>{`${order.name} ${order.price}$ Amount: ${order.amount}`}</div>
        })}
        <div className={classes.description}> <b>Address:</b> {`${props.order.user.street} ${props.order.user.postalCode} ${props.order.user.city}`}</div>
        <div className={classes.description}> <b>Total Cost:</b> {totalCost.toFixed(2)}</div>
      </div>
      
    </li>
  );
};
export default MealItem;

