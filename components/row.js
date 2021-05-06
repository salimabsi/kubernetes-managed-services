import RowTitle from './row-title';
import RowCell from './row-cell';


export default function ({ rowEntries }) {

    const rowTitle = rowEntries[0]
    const rowCells = rowEntries.slice(1)

    return (
        <tr className="text-sm font-medium text-blueGray-900">
            <RowTitle title={rowTitle} />
            {rowCells.map((cell, index) => <RowCell key={index} content={cell} />)}
        </tr>
    )
}
