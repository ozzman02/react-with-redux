import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({ to, children }) {

    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        /* Programatically navigating to another page */
        event.preventDefault();
        navigate(to);

    };

    return <a onClick={handleClick}>{children}</a>
}

export default Link;