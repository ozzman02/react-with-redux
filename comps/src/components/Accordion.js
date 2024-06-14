import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


export default function Accordion({ items }) {

    // all panels collapsed by default
    const [expandedIndex, setExpandedIndex] = useState(-1);

    /* 
        -----------------------------------------------------------------------------------------------------
        We are relying on expandedIndex old value but that might be already updated and we do not know yet !!
        -----------------------------------------------------------------------------------------------------
        const handleClick = (index) => {
            expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
        } 
    */

    // functional approach to resolve this:
    const handleClick = (index) => {
        //console.log('Stale version of expandedIndex is ', expandedIndex);
        setExpandedIndex(mostUpdatedExpandedIndexValue => {
            //console.log('Up to date version of expandedIndex is ', mostUpdatedExpandedIndexValue);
            if (mostUpdatedExpandedIndexValue === index) {
                return -1;
            } else {
                return index;
            }
        });
    };

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;

        return (
            <div key={item.id}>
                <div 
                    className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer" 
                    onClick={() => handleClick(index)}
                >
                    {item.label} {icon} 
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    );
}