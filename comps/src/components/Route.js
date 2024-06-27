import useNavigation from '../hooks/UseNavigation';

function Route({ path, children}) {

    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return children;
    }

    return null;
}

export default Route;