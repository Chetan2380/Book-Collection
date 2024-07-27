import { createContext, useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "ADDBOOK":
            return {...state, user: action.payload}
        default:
            return state
    }
}

const initialstate={book: null}

export const BookContext=createContext()

function MyBookContextProvider({children}){
    const[state,dispatch]=useReducer(reducer, initialstate)


    return(
        <BookContext.Provider value={{state,dispatch}}>
            {children}
        </BookContext.Provider>
    );
}

export default MyBookContextProvider;