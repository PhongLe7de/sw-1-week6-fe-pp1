export const useSignUp = () => {
  const signup = async ({ email, password, password2, setIsAuthenticated, navigate }) => {
    try {
        if (password !== password2) {
          console.log('Password not correct');
          
          return 
        }
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return {signup};
};
