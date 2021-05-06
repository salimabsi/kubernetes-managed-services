import Table from '../components/table'
import Meta from '../components/meta'

const table = {}

export default function Home() {
  return (
    <>
      <Meta />
      <div className="font-Inter">
        <Table table={table} />
      </div>
    </>
  )
}
