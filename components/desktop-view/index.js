import TableSection from './table-section'
import tableData from '../../_table/table-data'
import Logo from '../shared/company-logo'

export default function DesktopViewTable() {

    return (
        <div className="desktop-view hidden md:block">
            <table cellPadding="0">
                <thead>
                    <th><Logo /></th>
                    {tableData.titles.map((title, index) => <th index={index}><div>{title}</div></th>)}
                </thead>
                <tbody>
                    {tableData.sections.map((secData, index) => <TableSection key={index} sectionData={secData} />)}
                </tbody>
            </table>
        </div>
    )
}
