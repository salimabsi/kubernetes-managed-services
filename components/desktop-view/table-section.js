import Cell from '../shared/cell';

export default function TableSection({ sectionData }) {

    return (
        <>
            <div><span>{sectionData.title}</span></div>
            {sectionData.rows.map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    {row.slice(1).map((content, index) => <Cell key={index} content={content} />)}
                </tr>
            ))}
        </>
    )
}

