import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            } 
        };

        document.addEventListener('click', handler, true); // Sets up event handler for the capture phase

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    // simple update: setIsOpen(!isOpen);
    const onMenuChangeHandler = () => {
        // functional update
        setIsOpen((currentIsOpen) => !currentIsOpen);        
    };

    const onOptionChangeHandler = (option) => {
        onChange(option); // option selected by the user
        setIsOpen(false); // close dropdown
    };

    const renderedOptions = options.map((option) => {
        return (
            <div 
                className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                onClick={() => onOptionChangeHandler(option)} 
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    /*
        The code below can be replaced directly with {selection?.label || 'Select...'}

        let content = 'Select...';

        if (selection) {
            content = selection.label;
        }
    */

    return (
        <div className="w-48 relative" ref={divEl}>
            <Panel className="flex justify-between items-center cursor-pointer" onClick={onMenuChangeHandler}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}  
        </div>
    );
}