import { useEffect } from "react";
import { useLocation, useNavigationType} from "react-router";

function Navigation_Behavior() {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === 'POP') return;
        if(location.hash) return;
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }, [location.pathname, location.hash, navigationType]);
    return null;
}

export default Navigation_Behavior;