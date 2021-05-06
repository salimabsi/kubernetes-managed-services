import Row from './row'

export default function ({ sectionData }) {

    return (
        <>
            <div className="mt-20 p-2 text-2xl text-left text-blueGray-900">{sectionData.title}</div>
            {sectionData.rows.map((row, index) => <Row key={index} rowEntries={row} />)}
        </>
    )
}
