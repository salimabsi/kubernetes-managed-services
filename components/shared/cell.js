

export default function Cell({ content }) {

    const isContentLink = (contentText) => {
        const res = contentText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };


    const isLink = typeof content === 'string' && isContentLink(content)
    const isBoolean = typeof content === 'boolean';
    const isNH = typeof content === 'string' && content === "Needs help";
    const isNA = typeof content === 'string' && content === "Not available";
    const isND = typeof content === 'string' && content === "Not Documented";


    let actualContent = content;
    let classes = ''


    if (isLink) {
        classes = 'link'
        actualContent = <a href={content}>{content}</a>
    }

    if (isBoolean) {
        classes = content === false ? 'false' : 'true'
        actualContent = <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={content === false ? "M6 18L18 6M6 6l12 12" : "M5 13l4 4L19 7"}></path></svg>
    }

    if (isNH) {
        classes = 'needs-help'
    }

    if (isNA) {
        classes = 'not-available'
    }

    if (isND) {
        classes = 'not-documented'
    }
    

    if (isBoolean || isLink) {
        return <td className={classes}>{actualContent}</td>
    } else {
        return <td className={classes} dangerouslySetInnerHTML={{ __html: actualContent }}></td>
    }

}

