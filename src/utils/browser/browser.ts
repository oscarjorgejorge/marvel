import queryString from "query-string";
import RequestConditions from "../../core/interfaces/api_request_condition";

// export function buildPath(path: string, query?: any) {
// //   const querySr = query ? `?${queryString.stringify(query)}` : "";

//   return `${path}${querySr}`;
// }

const secret = `&ts=1709567909694&apikey=579f3de8aad8e5aa701ed70dd89ecca5&hash=348e8aa60812dbb637d59ab12e513dc5`;

export function buildPath(path: string, query?: RequestConditions) {
  const querySr = query ? `?${queryString.stringify(query)}` : "";

  return `${path}?limit=50${secret}`;
}
