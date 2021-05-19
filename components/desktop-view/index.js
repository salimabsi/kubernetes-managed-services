import TableSection from './table-section'
import tableData from '../../_table/table-data'
import Logo from '../shared/company-logo'

export default function DesktopViewTable() {

    return (
        <div className="desktop-view hidden md:block">
            <table className="border-collapse bg-gray-50">
                <thead className="whitespace-nowrap">
                    <th className="px-3 min-w-min pr-14"><Logo /></th>
                    {tableData.titles.map((title, index) => <th index={index}>{title}</th>)}
                </thead>
                <tbody>
                    {tableData.sections.map((secData, index) => <TableSection key={index} sectionData={secData} />)}
                </tbody>
            </table>
        </div>
    )
}
