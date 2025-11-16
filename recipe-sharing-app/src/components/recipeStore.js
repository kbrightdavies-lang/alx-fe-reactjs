import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes is computed dynamically instead of storing separately
  get filteredRecipes() {
    const term = this.searchTerm.toLowerCase();
    return this.recipes.filter(recipe => recipe.title.toLowerCase().includes(term));
  },
   

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id)
  })),
}));





