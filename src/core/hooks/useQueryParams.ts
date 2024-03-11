import { useLocation } from "react-router";
import queryString from "query-string";
import { useMemo } from "react";

export const useQueryParams = <T>() => {
  const location = useLocation();
  const params = useMemo(
    () => queryString.parse(location.search) as unknown,
    [location.search],
  );
  return params as T;
};
