import useSort from '../hooks/UseSort';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';

export default function SortableTable(props) {

    const { config, data } = props;
    
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column, 
            header: () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label) }>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ) 
        }
    });

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