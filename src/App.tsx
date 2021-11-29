import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import Header from './Header'
import Recipes from "./Recipes";
import Detail from "./Detail";
// todo: define this elsewhere
export interface Props {
  userName?: string;
  lang?: string;
//   children: React.ReactChild | React.ReactChildren
}
const App : React.FC<Props> = ({children}) => {

    const [recipeList, setRecipes] = React.useState([]);
    const [specialsList, setSpecials] = React.useState([])
    React.useEffect(() => {
        // ideally this will fetch 
            //1. everytime you open the page
            //2. and everytime you submit or update a recipe
            // but will only set the state if there is a change?? hmmm
        fetch("http://localhost:3001/recipes")
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setRecipes(response)
        })
        // .catch(error => setResult({ status: 'error', error }));
    }, [])
    React.useEffect(() => {
        // ideally this will fetch 
            //1. everytime you open the page
            //2. and everytime you submit or update a recipe
            // but will only set the state if there is a change?? hmmm
        fetch("http://localhost:3001/specials")
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setSpecials(response)
        })
        // .catch(error => setResult({ status: 'error', error }));
    }, [])
    const location = useLocation() // TODO: destructure
    console.log(location, location.pathname.split('/:'))
    return (
        <>
            <Header></Header>
        <Routes>
        <Route path ='/'>
            {/* {children} */}
            <Route index element = {<Recipes recipes={recipeList}/>}></Route>
            <Route path='/recipes' element = {<Recipes recipes={recipeList}/>}> </Route>
            <Route path={`/recipe/:${location.pathname.split('/:').pop()}`} element={<Detail recipes={recipeList} uuid={location.pathname.split('/:').pop()} specialsList={specialsList}/>}> </Route>
        </Route>
        </Routes>
        </>
    );
}

export default App