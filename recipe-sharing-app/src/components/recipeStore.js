import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // --- Recipe actions ---
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id),
    favorites: state.favorites.filter(favId => favId !== id) // remove from favorites if deleted
  })),

  // --- Search/Filtering ---
  setSearchTerm: (term) => set({ searchTerm: term }),
  get filteredRecipes() {
    const term = this.searchTerm.toLowerCase();
    return this.recipes.filter(recipe => recipe.title.toLowerCase().includes(term));
  },

  // --- Favorites ---
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId) ? state.favorites : [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // --- Recommendations (mock) ---
  generateRecommendations: () => set(state => {
    // simple example: pick recipes not yet favorited
    const recommended = state.recipes.filter(recipe => !state.favorites.includes(recipe.id)).slice(0, 5);
    return { recommendations: recommended };
  }),
}));





  





