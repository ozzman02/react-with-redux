import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

export default function App() {

    return (
        <div>
            <Link to="/accordion">Go to Accordion</Link>
            <Link to="/dropdown">Go to Dropdown</Link>
            <div>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
            </div>
        </div>        
    );
}