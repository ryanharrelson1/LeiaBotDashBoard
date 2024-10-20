"use client";

import TokenExpireModel from "./TokenExpireModel";
import useLogout from "@/hooks/LogoutHook";
import useSessionExpiration from "@/hooks/TokenExpirationHook";
import { useState } from "react";

const TokenExpireModelHandelr = () => {
  const { LogoutUser } = useLogout();
  const [isVisible, setIsVisible] = useState(false);

  const handleSessionExpire = () => {
    setIsVisible(true);
  };

  useSessionExpiration(handleSessionExpire);

  const handleConfirm = () => {
    setIsVisible(false);
    LogoutUser();
  };

  return <>{isVisible && <TokenExpireModel onConfirm={handleConfirm} />}</>;
};

export default TokenExpireModelHandelr;
