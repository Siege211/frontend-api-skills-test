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
			{recipes.map(({
				images,
				uuid,
				title,
				description,
				servings,
			}) => (
				<Article 
					images={images}
					uuid={uuid}
					title={title}
					description={description}
					servings={servings}
				/>
			))}
		</section>
        </>
    )
}


export default Recipes