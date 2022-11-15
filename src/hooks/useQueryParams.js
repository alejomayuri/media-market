import { useCallback, useEffect, useState } from "react";
import { useLocation as useWouterLocation } from "wouter";

export const useLocation = () => {
  const [location, setLocation] = useWouterLocation();
  return [location, setLocation, window.location.search];
};

export default function useQueryParams() {
  const [, , query] = useLocation();

  const [params, setParams] = useState();

  const returnRouterParams = useCallback(() => {
    const urlSearchParams = new URLSearchParams(query);
    return Object.fromEntries(urlSearchParams);
  }, [query]);

  useEffect(() => {
    if (query) {
      setParams(returnRouterParams());
    }
  }, [query, returnRouterParams]);

  return params;
}
