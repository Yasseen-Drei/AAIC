import { useState } from 'react'
import Form from './form'
import List from './list'
import GenerateResponse from './generateResponse'
import Response from './response'
import generateAIResponse from './ai'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [warning, setWarning] = useState(false)
    const [showResponse, setShowResponse] = useState(false)
    const [response, setResponse] = useState("")
    const [received, setReceived] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    
    function addIngredient(formData) {
        setShowResponse(false)
        setReceived(false)
        setTryAgain(false)
        const newIngredient = formData.get("ingredient")
        if (newIngredient === "") return 0
        setIngredients((prev) => [...prev, newIngredient])
        if(ingredients.length > 1) setWarning(false)
    }

    function removeIngredient(key) {
        setShowResponse(false)
        setReceived(false)
        setTryAgain(false)
        setIngredients((prev) => {
            return prev.filter((ingredient) => ingredient !== key)
        })
    }

    async function getResponse() {
        if(!response){
            setShowResponse(true)
            const tempResponse = await generateAIResponse(ingredients)
            setReceived(true)
            if (tempResponse === "ERROR503") {
                setResponse("The AI is experiencing high demand right now please try again later")
                responseInterval()
            }
            else if (tempResponse === "err"){
                setResponse("Unexpected error please try again later")
                responseInterval()
            }
            else setResponse(tempResponse)
        }
    }

    function responseInterval() {
        setTryAgain(true)
        setTimeout(() => {
            setShowResponse(false)
            setReceived(false)
        }, 10000)
    }

    return (
        <main>
            <Form addIngredient={addIngredient}/>
            <List 
                ingredients={ingredients}
                removeIngredient={removeIngredient}
            />
            <GenerateResponse 
                ingredientsLength={ingredients.length}
                warning={warning}
                setWarning={setWarning}
                getResponse={getResponse}
                tryAgain={tryAgain}
            />
            {showResponse && <Response 
                response={response}
                received={received}
            />}
        </main>
    )
}