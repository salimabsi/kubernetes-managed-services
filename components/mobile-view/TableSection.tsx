import { useState } from 'react'
import ServiceTable from './ServiceTable'
import { SectionProps } from '../../components/types'

const Section = ({ section }: { section: SectionProps }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`${isOpen ? 'py-8' : 'py-4 border-b'} transition-all section`}>
      <header onClick={() => setIsOpen(!isOpen)}>
        <h3>{section.title}</h3>
        <svg
          className={`${isOpen ? 'rotate' : ''} w-6 h-6`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </header>
      <div className={isOpen ? 'mt-6' : 'hidden'}>
        {section.rows.map((rows, index) => (
          <ServiceTable key={index} rows={rows} />
        ))}
      </div>
    </div>
  )
}

export default Section
