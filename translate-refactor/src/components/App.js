import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";


class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* The value is not limited to pass the state, we can pass anything*/}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    };
}

export default App;