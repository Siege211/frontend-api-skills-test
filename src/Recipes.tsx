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
        {recipes.map(recipe=> (
            <div key={recipe.uuid}>
                {recipe.title}
            </div>
        ))}
		<section className="wrapper product">
			{recipes.map(recipe => (
				// TODO: destructuring
				<Article images={recipe.images}/>
			))}
		<article className="card featured">
			<div className="box"><img src="http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg"/></div>
			<header className="card-content">
				<span className="card-category chicken">food category</span>
				<span className="card-header">recipe name</span>
				<span className="card-desc">recipe short description goes here.</span>
			</header>
			<footer className="card-content">
				<div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
				<div className="bookmark"></div>
			</footer>
		</article>
		<article className="card">
			<div className="box"><img src="http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg"/></div>
			<header className="card-content">
				<span className="card-category chicken">food category</span>
				<span className="card-header">recipe name</span>
				<span className="card-desc">recipe short description goes here.</span>
			</header>
			<footer className="card-content">
				<div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
				<div className="bookmark"></div>
			</footer>
		</article>
		<article className="card">
			<div className="box"><img src="http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg"/></div>
			<header className="card-content">
				<span className="card-category chicken">food category</span>
				<span className="card-header">recipe name</span>
				<span className="card-desc">recipe short description goes here.</span>
			</header>
			<footer className="card-content">
				<div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
				<div className="bookmark"></div>
			</footer>
		</article>
		<article className="card">
			<div className="box"><img src="http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg"/></div>
			<header className="card-content">
				<span className="card-category chicken">food category</span>
				<span className="card-header">recipe name</span>
				<span className="card-desc">recipe short description goes here.</span>
			</header>
			<footer className="card-content">
				<div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
				<div className="bookmark"></div>
			</footer>
		</article>
		<article className="card">
			<div className="box"><img src="http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg"/></div>
			<header className="card-content">
				<span className="card-category chicken">food category</span>
				<span className="card-header">recipe name</span>
				<span className="card-desc">recipe short description goes here.</span>
			</header>
			<footer className="card-content">
				<div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
				<div className="bookmark"></div>
			</footer>
		</article>
	</section>
        </>
    )
}


export default Recipes