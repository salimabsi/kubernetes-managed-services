import TableSection from './table-section'
import tableData from '../data/table-data'
import TableHeader from './table-header';


export default function () {

    return (
        <table className="border-collapse bg-gray-50">
            <TableHeader titles={tableData.titles} />
            <tbody className="text-center">
                {tableData.sections.map((secData, index) => <TableSection key={index} sectionData={secData} />)}
            </tbody>
        </table>
    )
}
