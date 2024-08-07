import { Fragment } from "react";

export default function Table({ data, config, keyFn }) {

    /* We need to return a jsx element that has a key prop assigned */
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        });

        /* keyFn will return the fruit name */
        return (
            <tr className="border-b" key={keyFn(rowData)}>{renderedCells}</tr>
        );
    });

    /* 
        Plain table structure

        <table>
            <thead>
                <tr>
                    <th>Fruits</th>
                    <th>Color</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Orange</td>
                    <td>*color orange*</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>*color red*</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    */
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}