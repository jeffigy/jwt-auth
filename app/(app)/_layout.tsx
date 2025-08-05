import { Stack } from "expo-router";
import React from "react";

const AuthenticatedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default AuthenticatedLayout;
