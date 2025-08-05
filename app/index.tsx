import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { useLoginMutation } from "@/hooks/useAuth";
import React, { useState } from "react";

const LoginScreen = () => {
  const { mutateAsync: login, isPending } = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log({ email, password });
    await login({ email, password });
  };

  return (
    <Center className="flex-1 p-6 gap-5">
      <FormControl className="w-full">
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            type="text"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </Input>
      </FormControl>
      <FormControl className="w-full">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            type="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </Input>
      </FormControl>

      <Button
        isDisabled={isPending}
        className="w-full "
        size="xl"
        onPress={handleLogin}
      >
        {isPending && <ButtonSpinner />}
        <ButtonText>Log in</ButtonText>
      </Button>
    </Center>
  );
};

export default LoginScreen;
