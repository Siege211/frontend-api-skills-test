import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import Header from './Header'
import Recipes from "./Recipes";
import Detail from "./Detail";



const App : React.FC = () => {

    const [recipeList, setRecipes] = React.useState([]);
    const [specialsList, setSpecials] = React.useState([])
    React.useEffect(() => {
        fetch("http://localhost:3001/recipes")
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setRecipes(response)
        })
    }, [])
    React.useEffect(() => {
        fetch("http://localhost:3001/specials")
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setSpecials(response)
        })
    }, [])
    const location = useLocation() // TODO: destructure
    const recipeID = location.pathname.split('/:').pop()
    return (
        <>
            <Header></Header>
        <Routes>
        <Route path ='/'>
            <Route index element = {<Recipes recipes={recipeList}/>}></Route>
            <Route path='/recipes' element = {<Recipes recipes={recipeList}/>}> </Route>
            <Route path={`/recipe/:${recipeID}`} element={<Detail recipes={recipeList} uuid={recipeID} specialsList={specialsList}/>}> </Route>
        </Route>
        </Routes>
        </>
    );
}

export default App