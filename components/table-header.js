import ColumnTitle from './column-title'
import TableName from './table-name'

export default function ({ titles }) {

    return (
        <thead className="whitespace-nowrap">
            <TableName />
            {titles.map((title, index) => <ColumnTitle key={index} title={title} />)}
        </thead>
    )
}
