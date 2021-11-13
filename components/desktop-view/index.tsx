import TableSection from './TableSection'
import Logo from '../Logo'
import { TableDataProps } from '../../components/types'

const DesktopViewTable = ({ tableData }: { tableData: TableDataProps }) => {
  return (
    <div className="desktop-view hidden md:block">
      <table cellPadding="0">
        <thead>
          <th>
            <Logo />
          </th>
          {tableData.titles.map((title, index) => (
            <th key={index}>
              <div>{title}</div>
            </th>
          ))}
        </thead>
        <tbody>
          {tableData.sections.map((section, index) => (
            <TableSection key={index} section={section} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DesktopViewTable
