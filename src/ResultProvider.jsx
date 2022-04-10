import React, { createContext, useContext,useReducer } from 'react';

const ResultContext = createContext();

export const ResultProvider = ({reducer,initialState, children }) => {
        return (
            <ResultContext.Provider value={useReducer(reducer,initialState)}>
                {children}
            </ResultContext.Provider>
        )
    };

export const useResultContext = () => useContext(ResultContext);
