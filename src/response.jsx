import Markdown from 'react-markdown'

export default function Response(props) {

    return(
        <section className="response">
            {props.received ? 
            <Markdown>{props.response}</Markdown> :
            <img src="../images/loading-gif.gif" alt='loading'/>
            }
        </section>
    )
}