import MobileViewTable from '../components/mobile-view'
import DesktopViewTable from '../components/desktop-view'
import Meta from '../components/shared/meta'


export default function Home() {
  return (
    <>
      <Meta />
      <div>
        <MobileViewTable />
        <DesktopViewTable />
      </div>
    </>
  )
}
