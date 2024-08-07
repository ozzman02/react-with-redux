import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

    /* The only reason we have the state is to cause a re render whenever a user clicks the forward and back buttons */
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            /*
                Whenever the user navigates around by using back and forward buttons our handler is going to be called
            */
            setCurrentPath(window.location.pathname);
        };

        /* When a user clicks on back or forward buttons a popstate event is triggered */
        window.addEventListener('popstate', handler);
        
        return () => {
            window.removeEventListener('popstate', handler);
        };

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;