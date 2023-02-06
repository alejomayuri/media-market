import { useEffect, useState } from "react";
import { ordersColection } from "firebase.js";
import useUser from "./useUser";

export const useSingleOrder = ({ id }) => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.uid) return;
    setLoading(true);
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
      .then((orders) => orders.find((order) => order.id === id))
      .then((order) => setOrder(order))
      .finally(() => setLoading(false));
  }, [user?.uid, id]);

  return { order, loading };
};