import { useEffect, useState } from "react";
import { ordersColection } from "firebase.js";
import useUser from "./useUser";

export const useOrders = (params) => {
  const [orders, setOrders] = useState([]);
    const { user } = useUser();

  useEffect(() => {
    // ordersColection().filter((order) => order.user === user.uid).then((orders) => setOrders(orders));
    if (!user?.uid) return;
    ordersColection()
    .where("user", "==", user?.uid)
    .get()
    .then(({ docs }) => {
        return docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
    
            return {
            ...data,
            id,
            };
        });
      })
    .then((orders) => setOrders(orders));
}, [user?.uid]);

  return { orders };
};
