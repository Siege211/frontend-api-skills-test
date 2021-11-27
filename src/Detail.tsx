import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import {Recipe} from './interfaces'

interface Props {
    recipes: Array<Recipe>
    uuid: string
}

const Detail : React.FC<Props> = ({recipes, uuid}) => {

    const location = useLocation(
    )
    console.log(recipes, location)
    const recipeDetails = recipes.find(x => x.uuid == uuid)
    console.log(recipeDetails)
    // const recipe = recipeList.find(x => x.uuid == path.uuid)
    return (
        <>
        <div className="large-photo">
            <img src={`http://localhost:3001${recipeDetails.images.full}`}/>
        </div>
        <p>{recipeDetails.title}</p>
      {/* full size image here! */}
    {/* <div class="content">
      <div class="left-col">
        <div class="container">
          <h3>Ingredients</h3>
          <ul>
            <li>2 cups thickened cream</li>
            &nbsp;
            <li>1 tablespoon icing sugar mixture</li>
            &nbsp;
            <li>2 x 125g punnets fresh raspberries</li>
            &nbsp;
            <li>460g packet double unfilled sponge cakes</li>
            &nbsp;
            <li>1/3 cup honey, warmed</li>
            &nbsp;
            <li>2 tablespoons pistachio kernels, chopped</li>
          </ul>
         
        </div>
      </div>   
      <div class="right-col">
        <div class="container">
           <h2>Raspberry Honey Dessert Cake</h2>
          <p>You'll have a sweet on the plate in no time with this easy recipe.</p>
          <h4>Directions</h4>
          <ol>
            <li>Using an electric mixer, beat cream and icing sugar together until medium peakes. Add 2/3 of the raspberries. Beat unitl mixture is combined and raspberries are roughly chopped</li>
            &nbsp;
            <li>Using a serrated knife, cut each sponge in half. Place one cake on serving plate. Brush liberally with honey. Top 1/4 cream mixture. Repeat layering, finishing with a layer of cream. Sprinkle with remaining raspberries and pistachios. Serve</li>
            
          </ol>
          <p></p>
        </div>
      </div>     
          </div>
        </div>
    </div> */}
        </>
    )
}

export default Detail