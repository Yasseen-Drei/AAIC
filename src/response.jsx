import Markdown from 'react-markdown'
import loading from "../images/loading-gif.gif"

export default function Response(props) {

    return(
        <section className="response">
            {props.received ? 
            <Markdown>{props.response}</Markdown> :
            <img src={loading} alt='loading'/>
            }
        </section>
    )
}