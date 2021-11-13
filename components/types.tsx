export interface SectionProps {
  title: string
  rows: (string | boolean)[][]
}

export interface TableDataProps {
  titles: string[]
  sections: SectionProps[]
}
