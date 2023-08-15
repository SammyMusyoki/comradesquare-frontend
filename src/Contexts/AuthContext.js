import React, { createContext, useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(() =>
      //useCallback to prevent rerenders
      localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens"))
        : null
    );
    const [authTokens, setAuthTokens] = useState(() =>     //useCallback to prevent rerenders
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );

        useEffect(() => {
          let fourMin = 1000 * 60 * 4;
          const interval = setInterval(() => {
            if (authTokens) {
              updateToken();
            }
          }, fourMin);
          return () => clearInterval(interval);
        }, [authTokens, loading]);

    const registerUser = async (userInfo, navigate) => {
        try {
            const response = await fetch("http://localhost:8000/user/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    userInfo
                )
            });

            const userData = await response.json()
            console.log(userData)

            if (response.status === 200 || response.status === 201) {
                setSuccessMessage('User registered successfully')
                navigate('login')
            } else {
                setErrorMessage(userData.error)
            }
        } catch (error) {
            setErrorMessage("Error Registering a User");
        }

        setTimeout(() => {
            setErrorMessage("");
            setSuccessMessage("");
        }, 5000);
    }



    const loginUser = async (userInfo, navigate) => {
        try {
            const response = await fetch('http://localhost:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    userInfo
                )
            });

            const userDetails = await response.json()

            if (response.status === 200 || response.status === 201) {
                setAuthTokens(userDetails)
                setUser(jwt_decode(userDetails.access));
                localStorage.setItem('authTokens', JSON.stringify(userDetails));
                setLoading(false)
                navigate('/home');
                setSuccessMessage("User logged in Successfully");
            } else {
                const errorData = await response.json();
                setErrorMessage("Login Failed:" + errorData.message);
            }
        } catch (error) {
            setErrorMessage("Error logging User In");
        }
        setTimeout(() => {
            setErrorMessage("");
            setSuccessMessage("");
        }, 5000);
    }

    // updating the access token to refresh after expiring
    const updateToken = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/token/refresh/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({'refresh': authTokens.refresh}),
            });
            const userData = await response.json();

            if (response.status === 200) {
                setAuthTokens(userData);
                setUser(jwt_decode(userData.access));
                localStorage.setItem(
                    "authTokens",
                    JSON.stringify(userData)
                );
            } else {
                logoutUser()
            }
        } catch (error) {
            console.log(error);
        }


    }

    const logoutUser = () => {
        localStorage.removeItem('authTokens');
        setUser(null);
        setAuthTokens(null);
        window.Location.href = 'login'
        setSuccessMessage("User logged out successfully")

        setTimeout(() => {
            setSuccessMessage("");
        }, 5000)
    }




    const contextData = {
        loginUser,
        user,
        authTokens,
        logoutUser,
        registerUser,
        errorMessage,
        successMessage,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {
             children
            }
        </AuthContext.Provider>
    )
}

const useUserAuth = () => {
    const context = useContext(AuthContext);
        if (context === undefined) {
            throw new Error('useUserAuth must be used within a AuthContextProvider');
        } 
    return context;
}

export { AuthContextProvider, useUserAuth }