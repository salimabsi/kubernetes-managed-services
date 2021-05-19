import { useState } from 'react'
import FeatureTable from './feature-table'


export default function TableSection({ sectionData }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${isOpen ? 'py-8' : 'py-4 border-b'} transition-all section`}>
            <header onClick={() => setIsOpen(!isOpen)}>
                <h3>{sectionData.title}</h3>
                <svg className={`${isOpen ? 'rotate' : ''} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
            </header>
            <div className={isOpen ? 'mt-6' : 'hidden'}>
                {sectionData.rows.map((rows, index) => <FeatureTable key={index} rows={rows} />)}
            </div>
        </div>
    )
}
