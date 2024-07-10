import { useState } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';

export default function SortableTable(props) {

    const { config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);

    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column, 
            header: () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label) }>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ) 
        }
    });

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the data prop
    // Bind the correct sort value function and use it for sorting
    
    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        // make a copy
        sortedData = [...data].sort((a, b) => {
            
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }

        });
    }

    return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div><GoArrowUp size={10}/><GoArrowDown size={10}/></div>;
    }
    if (sortOrder === null) {
        return <div><GoArrowUp size={10}/><GoArrowDown size={10}/></div>;
    } else if (sortOrder === 'asc') {
        return <div><GoArrowUp size={10}/></div>;
    } else if (sortOrder === 'desc') {
        return <div><GoArrowDown size={10}/></div>;
    }
}