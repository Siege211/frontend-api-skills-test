import * as React from "react";
import {Link} from 'react-router-dom';
export interface Props {
  userName?: string;
  lang?: string;
}
export const App = (props: Props) => {

    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3001/recipes")
        .then((response) => {
            let res = response.json()
            console.log(res)
            return res
        })
        .then(response => {
            console.log(response)
            setRecipes(response)
        })
        // .catch(error => setResult({ status: 'error', error }));
    }, [])
    console.log(recipes)
    return (
        <div>
            {recipes.map(recipe=> (
                <div key={recipe.uuid}>
                    {recipe.title}
                </div>
            ))}
            {/* <Link to='/'>Recipes</Link> */}
        </div>
    );
}