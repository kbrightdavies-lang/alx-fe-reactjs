import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // <-- this is the hook


  return <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>;
  navigate("/");            // send user back to home
};

export default DeleteRecipeButton;
