import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Link } from "expo-router";
import React from "react";

const LoginScreen = () => {
  return (
    <Center className="flex-1 p-6 gap-5">
      <FormControl className="w-full">
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField type="text" keyboardType="email-address" />
        </Input>
      </FormControl>
      <FormControl className="w-full">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField type="password" secureTextEntry={true} />
        </Input>
      </FormControl>
      <Link href={"/(app)"} asChild>
        <Button className="w-full " size="xl">
          <ButtonText>Log in</ButtonText>
        </Button>
      </Link>
    </Center>
  );
};

export default LoginScreen;
