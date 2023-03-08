import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserTab from "./UserTab";
import AuthStack from "./AuthStack";

function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserTab /> : <AuthStack />;
}

export default RootNavigation;
