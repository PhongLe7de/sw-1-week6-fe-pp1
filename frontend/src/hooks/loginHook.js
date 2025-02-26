
export function useLogin() {
    const login = async({email, password, setIsAuthenticated, navigate}) => {
        try {
            const response = await fetch("/api/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            })
            if (response.ok) {
              const user = await response.json();
              sessionStorage.setItem("user", JSON.stringify(user));
              console.log("User logged in successfully!");
              setIsAuthenticated(true);
              navigate("/");
            } else {
              console.error("Login failed");
            }
          } catch (error) {
            console.error("Error during login:", error);
          }
    }
    return {login}
}

