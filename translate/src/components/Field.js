import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {

    /*
       Hook up the context. We can now use this.context
    */
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }

}

/*
    In order to hook up the context we can also do it like this, outside of class definition

    Button.contextType = LanguageContext;
 */
export default Field;