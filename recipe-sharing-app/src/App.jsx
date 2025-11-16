import RecipeList from '.src/components/RecipeList';
import AddRecipeForm from '.src/components/AddRecipeForm';
import RecipeDetails from '.src/components/RecipeDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to extract the :id param and pass it as recipeId
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
