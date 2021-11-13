import Section from './TableSection'
import Logo from '../Logo'
import { TableDataProps } from '../../components/types'

const MobileViewTable = ({ tableData }: { tableData: TableDataProps }) => {
  return (
    <div className="mobile-view md:hidden bg-gray-50">
      <header className="p-3 border-b shadow-sm bg-white">
        <Logo />
      </header>
      <div className="mt-8">
        {tableData.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
    </div>
  )
}

export default MobileViewTable
