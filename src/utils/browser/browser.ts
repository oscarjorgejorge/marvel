import queryString from "query-string";
import CryptoJS from "crypto-js";
import RequestConditions from "../../core/interfaces/api_request_condition";
import Config from "../../config";

const ts = new Date().getTime().toString();

const hashInput = ts + Config.privateKey + Config.publicKey;

const hash = CryptoJS.MD5(hashInput).toString();

const secret = `ts=${ts}&apikey=${Config.publicKey}&hash=${hash}`;

export function buildPath(path: string, query?: RequestConditions) {
  const querySr = query
    ? `?${queryString.stringify(query)}&${secret}`
    : `?${secret}`;

  return `${path}${querySr}`;
}
