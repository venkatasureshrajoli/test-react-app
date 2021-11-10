import React from 'react';

export const MainReactContext = React.createContext();

export default function Main(props) {
    return (
        <MainReactContext.Provider
            value={{
                appName: 'ReactApp',
                version: 16.03
            }} >
            {props.children}
        </MainReactContext.Provider>
    )
}