import axios from "axios";

export const getDogRequestAJAX = () => {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/randoem"
  });
};
