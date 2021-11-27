import * as React from "react";
import Article from './Article';
import {Recipe} from './interfaces';
interface Props {
    recipes: Array<Recipe>;
}
// type Ingredient {
//     uuid: string;
//     amount: number;
//     measurement: string;
//     name: string;
// // }
// interface Recipe {
//     uuid: string
//     title: string
//     description: string
//     images: {
//         full: string
//         medium: string
//         small: string
//     }
//     servings: number
//     prepTime: number
//     cookTime: number
//     postDate: string
//     editDate: string
//     ingredients: Array<{
//         uuid: string;
//         amount: number;
//         measurement: string;
//         name: string;
//     }>
//     directions: Array<{
//         instructions: string
//         option: boolean
//     }>
// }

const Recipes: React.FC<Props> = ({recipes}) => {
    return (
        <>
		<section className="wrapper product">
			{recipes.map(recipe => (
				// TODO: destructuring
				<Article images={recipe.images} uuid={recipe.uuid}/>
			))}
		</section>
        </>
    )
}


export default Recipes