import { useEffect, useState } from "react";
import { ordersColection } from "firebase.js";
import useUser from "./useUser";

export const useOrders = (params) => {
  const [orders, setOrders] = useState([]);
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
      .then((orders) => setOrders(orders))
      .finally(() => setLoading(false));
  }, [user?.uid]);

  return { orders, loading };
};
