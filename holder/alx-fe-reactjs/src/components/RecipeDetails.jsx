// RecipeDetails component
  import { useParams } from "raact-router-dom";
  import { useRecipeStore } from './recipeStore';
  import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

  const RecipeDetails = ({ recipeId }) => {
    const { id } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) return <p>Recipe not found.</p>;

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}

        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton id={recipe.id} />
      </div>
    );
  };

  export default RecipeDetails;