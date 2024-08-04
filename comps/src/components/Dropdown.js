import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);

    // Reference to a div element
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            /*
                In this case we know the div is going to be always shown at the screen. That means we will always get a refence to the div.
                In other scenarios a div might be hidden therefore, there will be cases where the reference will be null.
                That's the reason of this condition: if (!divEl.current) {...}
        
            */
            if (!divEl.current) {
                return;
            }
            /*
                If this condition is true, means the users clicked inside the dropdown.

                    if (divEl.current.contains(event.target)) {...}

                If it is false then we need to update the isOpen state to false.
            */
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


    /* 
        In this code we are passing the event but we need the value, the option that is being selected.

            const onOptionClickHandler = (event) => {
                console.log(event);
            }

            const renderedOptions = options.map((option) => {
                return (
                    <div 
                        className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                        onClick={onOptionChangeHandler} 
                        key={option.value}
                    >
                        {option.label}
                    </div>
                );
            });
        
        To do that we pass an arrow function like we are doing in the final version of the code.

            onClick={() => onOptionChangeHandler(option)}
        
        The argument of the handler needs to be changed too

            const onOptionClickHandler = (option) => {
                console.log(option);
            }

    */
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