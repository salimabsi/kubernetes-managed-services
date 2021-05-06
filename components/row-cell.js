

export default function ({ content }) {

    const isContentLink = (contentText) => {
        var res = contentText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };

    const isBoolean = typeof content === 'boolean';
    const isNeedsHelp = typeof content === 'string' && content === "Needs help";
    const isLink = typeof content === 'string' && isContentLink(content)


    
    var actualContent = content;
    var colors = 'hover:bg-blueGray-100';

    if (isBoolean) {
        colors = content === false ? 'text-red-600 bg-red-200 hover:bg-red-100' : 'text-green-600 bg-green-200 hover:bg-green-100'
        const svgD = content === false ? "M6 18L18 6M6 6l12 12" : "M5 13l4 4L19 7";
        actualContent = <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={svgD}></path></svg>
    }

    if (isNeedsHelp) {
        colors = 'text-yellow-900 bg-yellow-200 hover:bg-yellow-100'
    }

    if (isLink) {
        colors = ''
        actualContent = <a className="text-blue-500 hover:text-blue-400 whitespace-nowrap text-xs" href={content}>{content}</a>
    }


    return (
        <td className={`${colors} px-4 py-3.5 border border-gray-400`}>
            {actualContent}
        </td>
    )
}
