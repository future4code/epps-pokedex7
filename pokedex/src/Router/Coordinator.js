export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  export const goToPokemonDetails = (history) => {
    history.push("/details-page");
  };

  export const goToDetailsPokemon = (history, id) => {
    history.push(`/details-page/${id}`)
}
