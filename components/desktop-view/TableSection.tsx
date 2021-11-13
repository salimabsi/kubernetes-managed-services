import Cell from '../Cell'
import { SectionProps } from '../../components/types'

const TableSection = ({ section }: { section: SectionProps }) => {
  const scrollToLeft: () => void = () => window.scrollTo({ left: 0, behavior: 'smooth' })

  return (
    <>
      <div className="mt-16"></div>
      <tr onClick={scrollToLeft} className="sticky-row">
        <td className="sticky-title" colSpan={99}>
          <span>{section.title}</span>
        </td>
      </tr>
      {section.rows.map((row, index) => (
        <tr key={index}>
          <td>{row[0]}</td>
          {row.slice(1).map((content, idx) => (
            <Cell key={idx} data={content} />
          ))}
        </tr>
      ))}
    </>
  )
}

export default TableSection
