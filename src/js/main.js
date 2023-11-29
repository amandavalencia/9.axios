import { searchMovie } from './movieService';
import '/src/css/style.css'


document.getElementById("searchForm").addEventListener("submit", async (e) => { //hittar min form och lägger till eventlistener
  e.preventDefault();
  const movieTitleToSearchFor = document.getElementById("searchText").value; //sätter variabeln movieTitleToSearchFor till value från det man skriver i input rutan, alltså namnet på filmen
  const movies = await searchMovie(movieTitleToSearchFor); //skickar in value från input till funktionen searchMovie
  console.log(movies);
  createHtml(movies);
})

const createHtml = (movies) => {
  const movieContainer = document.getElementById("movieContainer");
  movieContainer.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const h3 = document.createElement("h3");
    h3.innerHTML = movies[i].Title;
    console.log(movies[i].Title);
    const movieDiv = document.createElement("div");
    movieDiv.className = "movieDiv";
    movieDiv.appendChild(h3);
    movieContainer.appendChild(movieDiv);
  }
}