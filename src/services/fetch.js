const fetchAllPlanets = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export default fetchAllPlanets;
