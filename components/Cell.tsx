import { ReactNode } from 'react'

const TrueOrFalseIcon = ({ trueSymbol }: { trueSymbol: boolean }) => (
  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={trueSymbol ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
    ></path>
  </svg>
)

const isTextLink: (text: string) => boolean = (text) => {
  const res = text.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
  return res !== null
}

const Cell = ({ data }: { data: string | boolean }) => {
  const isBoolean: boolean = typeof data === 'boolean'
  const isLink: boolean = typeof data === 'string' && isTextLink(data)
  const isNH: boolean = typeof data === 'string' && data === 'Needs help'
  const isNA: boolean = typeof data === 'string' && data === 'Not available'
  const isND: boolean = typeof data === 'string' && data === 'Not Documented'

  let content: ReactNode | string | boolean = data
  let className = ''

  if (isLink) {
    className = 'link'
    content = <a href={data as string}>{data}</a>
  }

  if (isBoolean) {
    className = data ? 'true' : 'false'
    content = <TrueOrFalseIcon trueSymbol={data as boolean} />
  }

  if (isNH) className = 'needs-help'
  if (isNA) className = 'not-available'
  if (isND) className = 'not-documented'

  return isLink || isBoolean ? (
    <td className={className}>{content}</td>
  ) : (
    <td className={className} dangerouslySetInnerHTML={{ __html: content as string }}></td>
  )
}

export default Cell
