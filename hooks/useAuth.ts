import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { AuthCredentials } from "../types/auth";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (credentials: AuthCredentials) => login({ credentials }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
