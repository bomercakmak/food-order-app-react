import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import OrderItem from "./MealItem/OrderItem";

const AvailableMeals = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-react-66e8a-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedOrders = [];

      for (const key in responseData) {
        loadedOrders.push({
          id: key,
          orderedItems: responseData[key].orderedItems,
          user: responseData[key].user,
        });
      }
      setOrders(loadedOrders);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const ordersList = orders.map((order) => (
    <OrderItem key={order.id} order={order}/>
  ));
    console.log("Orders",orders);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{ordersList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
