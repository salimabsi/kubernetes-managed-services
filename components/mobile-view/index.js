import Section from './table-section';
import tableData from '../../_table/table-data'
import Logo from '../shared/company-logo'

const sections = tableData.sections

export default function MobileViewTable() {

    return (
        <div className="mobile-view md:hidden bg-gray-50">
            <header className="p-3 border-b shadow-sm bg-white">
                <Logo />
            </header>
            <div className="mt-8">
                {sections.map((secData, index) => <Section key={index} sectionData={secData} />)}
            </div>
        </div>
    )
}
