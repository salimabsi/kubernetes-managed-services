import Cell from '../shared/cell';

import tableData from '../../_table/table-data'


const titles = tableData.titles

export default function FeatureTable({ rows }) {

    const title = rows[0]
    const featureCells = rows.slice(1)

    return (
        <table>
            <thead>
                <tr>
                    <th className="light">Products</th>
                    <th className="dark">{title}</th>
                </tr>
            </thead>
            <tbody>
                {featureCells.map((content, index) => (
                    <tr key={index}>
                        <th>{titles[index]}</th>
                        <Cell content={content} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
