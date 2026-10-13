export default function List(props) {
    
    const ingredientsItems = props.ingredients.map((ingredient) => {
        return <li key={ingredient}>
                <button 
                onDoubleClick={() => props.removeIngredient(ingredient)}
                className='delete-ingredient-btn'
                >
                    {ingredient}
                </button>
            </li>
    })

    return (
        <section className="ingredient-list">
            <ul>
                {ingredientsItems}
            </ul>
        </section>
    )
}