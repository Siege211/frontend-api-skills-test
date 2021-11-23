import * as React from "react";
interface Props {
    recipes: Array<Recipe>;
}
// type Ingredient {
//     uuid: string;
//     amount: number;
//     measurement: string;
//     name: string;
// }
type Recipe = {
    uuid: string
    title: string
    description: string
    images: {
        full: string
        medium: string
        small: string
    }
    servings: number
    prepTime: number
    cookTime: number
    postDate: string
    editDate: string
    ingredients: Array<{
        uuid: string;
        amount: number;
        measurement: string;
        name: string;
    }>
    directions: Array<{
        instructions: string
        option: boolean
    }>
}

const Recipes: React.FC<Props> = ({recipes}) => {
    return (
        <>
        {recipes.map(recipe=> (
            <div key={recipe.uuid}>
                {recipe.title}
            </div>
        ))}
        </>
    )
}


export default Recipes