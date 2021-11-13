import Cell from '../Cell'
import tableData from '../../_table/table-data'

const titles: string[] = tableData.titles

const ServiceTable = ({ rows }: { rows: (string | boolean)[] }) => {
  const title: string = rows[0] as string
  const featureCells: (string | boolean)[] = rows.slice(1)

  return (
    <table>
      <thead>
        <tr>
          <th className="light">Products</th>
          <th className="dark">{title}</th>
        </tr>
      </thead>
      <tbody>
        {featureCells.map((data, index) => (
          <tr key={index}>
            <th>{titles[index]}</th>
            <Cell data={data} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ServiceTable
