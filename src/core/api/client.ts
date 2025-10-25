import axios from "axios";
import { getToken, signOut } from "../auth";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

client.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token?.access) {
      config.headers["Authorization"] = token?.access;
    }
    return config;
  },
  (error) => {
    console.log("Error axios: ", error);
    if (error.response && error.response.status === "401") {
      signOut();
    }
    return Promise.reject(error);
  }
);
