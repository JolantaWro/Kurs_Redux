import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const SingleRecipe = ({allRecipes}) => {
    const [idRecipe, setIdRecipe] = useState(useParams().id)

    return (
        <div>
            <article className="message is-dark">
                <div className="message-header">
                    <p>Przepis {parseInt(idRecipe) + 1}</p>
                    <button type="button" className="delete" onClick={() => null} />
                </div>
                <div className="message-body">
                    <div className="field">
                        <p className="control has-icons-left">
            <span className="select">
              <select onChange={(e) => setIdRecipe(e.target.value)} value={idRecipe}>
                <option>Wybierz...</option>
                  {allRecipes.map(recipe => (
                      <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
              </select>
            </span>
                            <span className="icon is-small is-left"><i className="fas fa-pizza-slice"></i></span>
                        </p>
                    </div>
                </div>
            </article>

        </div>
    );
};

export default SingleRecipe;