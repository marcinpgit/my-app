import { FetchData } from "../types/fetch";
import { Offer } from "../types/offer";

export const fetchData = ({ url, method }: FetchData): Promise<Offer[]> => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": `application/json; charset=utf-8`,
      "Accept": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error: Error) => {
      throw error;
    });
};
