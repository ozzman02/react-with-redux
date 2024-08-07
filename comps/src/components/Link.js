import useNavigation from '../hooks/UseNavigation';
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {

    const { navigate, currentPath } = useNavigation();

    /* Apply the activeClassName only if currentPath === to */
    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        /* Stops the standard navigation */
        event.preventDefault(); 
        /* Programatically navigating to another page */
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;