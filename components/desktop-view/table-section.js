import Cell from '../shared/cell';

export default function TableSection({ sectionData }) {

    const scrollToLeft = () => window.scrollTo({ left: 0, behavior: 'smooth' });

    return (
        <>
            <div className="mt-16"></div>
            <tr onClick={scrollToLeft} className="sticky-row">
                <td className="sticky-title" colSpan="99"><span>{sectionData.title}</span></td>
            </tr>
            {sectionData.rows.map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    {row.slice(1).map((content, index) => <Cell key={index} content={content} />)}
                </tr>
            ))}
        </>
    )
}
