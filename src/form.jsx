export default function Form(props) {
    return(
        <>
            <form action={props.addIngredient}>
                <input 
                type="text" 
                placeholder="e.g. Eggs" 
                aria-label="add ingredient"
                name="ingredient">
                </input>
                <button>+ Add Ingredient</button>
            </form>
            <p className="db-note">* double click to delete an element</p>
        </>
    )
}