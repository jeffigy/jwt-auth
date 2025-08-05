import { AuthCredentials } from "@/types/auth";
import axiosInstance from ".";

export const login = async ({
  credentials,
}: {
  credentials: AuthCredentials;
}): Promise<{ token: string }> => {
  return (await axiosInstance.post("/token/", credentials)).data;
};
