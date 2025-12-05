function useAuth(serverURL) {
  return {
    login: async (username, password) => {
      const response = await fetch(`${serverURL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      return result;
    },

    signUp: async (user) => {
      const response = await fetch(`${serverURL}/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      return result;
    },
  };
}

export default useAuth;
