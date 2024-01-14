import { URL_BACK_SERVER } from "@env";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  async function handleLogin(body: any) {
    setLoading(true);
    const url = `${URL_BACK_SERVER}/api/auth`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      setLoading(false);
      return response.json();
    } catch (error) {
      setError(true);
      return new Error("Error");
    }
  }
  return {
    error,
    loading,
    handleLogin,
  };
};
