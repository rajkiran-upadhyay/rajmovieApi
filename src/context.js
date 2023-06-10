
import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();//AppContext is a warehouse 
const AppProvider = ({ children }) => {
    // console.log("b")
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    // console.log("m", movie)
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState("titanic");
    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
     
            if (data.Response === "True") {
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                });
                setMovie(data.Search);
               }
            else {
                setIsError({
                    show: true,
                    msg: data.Error  //by def error
                })
            }
        }catch (error) {
            console.log(error)
        }
    };

    useEffect(() => { //useffect run after mounting(initial reendering) only..but now when query updates
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 300);
        return () => clearTimeout(timerOut);//return function

    }, [query]);

    return <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>{children}</AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);//custom hook //useContext is the user
};
export { AppContext, AppProvider, useGlobalContext };