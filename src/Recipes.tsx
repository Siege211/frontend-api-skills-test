import * as React from "react";
import Article from './Article';
import {Recipe} from './interfaces';
interface Props {
    recipes: Array<Recipe>;
}

const Recipes: React.FC<Props> = ({recipes}) => {
    return (
        <>
		<section className="wrapper product">
			{recipes.map(recipe => (
				// TODO: destructuring
				<Article 
					images={recipe.images}
					uuid={recipe.uuid}
					title={recipe.title}
					description={recipe.description}
					servings={recipe.servings}
				/>
			))}
		</section>
        </>
    )
}


export default Recipes