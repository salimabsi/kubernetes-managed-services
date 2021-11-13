import MobileViewTable from '../components/mobile-view'
import DesktopViewTable from '../components/desktop-view'
import Meta from '../components/meta'
import tableData from '../_table/table-data'

export default function Home() {
  return (
    <>
      <Meta />
      <div>
        <MobileViewTable tableData={tableData} />
        <DesktopViewTable tableData={tableData} />
      </div>
    </>
  )
}
