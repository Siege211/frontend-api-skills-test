import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import {Recipe, Special, idMap} from './interfaces'

interface Props {
    recipes: Array<Recipe>
    uuid: string
    specialsList: Array<Special>
}



const Detail : React.FC<Props> = ({recipes, uuid, specialsList}) => {
    const recipeDetails = recipes.find(x => x.uuid == uuid)
    const ingredientIDs: idMap = {}
    recipeDetails.ingredients.forEach(({uuid}, i) => {
      ingredientIDs[uuid] = i
    })
    return (
        <>
          <div className="large-photo-container">
              <img className="large-photo" src={`http://localhost:3001${recipeDetails.images.full}`}/>
          </div>
        <div className="content">
          <div className="left-col">
            <div className="container">
              <h3>Ingredients</h3>
              <ul>
                {recipeDetails.ingredients.map(ingredient => {
                  let special = null
                  if (ingredient.uuid in ingredientIDs) {
                    special = specialsList[ingredientIDs[ingredient.uuid]]
                  }
                  return (
                    <>
                    <li>{`${ingredient.amount} ${ingredient.measurement} ${ingredient.name}`}</li>
                    {special && 
                      <>
                        <p>{`${special.title}- ${special.type}`}<br/>{special.text}</p>
                      </>
                    }
                    &nbsp;
                    </>
                  )
                })}
              </ul>   
            </div>
          </div>   
          <div className="right-col">
            <div className="container">
              <h2>{recipeDetails.title}</h2>
              <p>{recipeDetails.description}</p>
              <h4>Directions</h4>
              <ol>
                {recipeDetails.directions.map(({instructions, optional}) => {
                  return (
                    <>
                      <li>
                        {optional && <b>[Optional] </b>}
                        {instructions}
                        </li>
                      &nbsp;
                    </>
                  )
                })}
              </ol>
              <p></p>
            </div>
        </div>     
      </div>
        </>
    )
}

export default Detail