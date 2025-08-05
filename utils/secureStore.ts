import * as SecureStore from "expo-secure-store";
import { ACCESS_TOKEN_KEY } from "./env";

export const saveAccessToken = async (token: string) => {
  await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = async () => {
  return await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
};

export const deleteAccessToken = async () => {
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
};
