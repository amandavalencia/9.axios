import { createHtml } from './htmlCreator';
import { searchMovie } from './movieService';
import '/src/css/style.css'


document.getElementById("searchForm").addEventListener("submit", async (e) => { //hittar min form och lägger till eventlistener
  e.preventDefault();
  const movieTitleToSearchFor = document.getElementById("searchText").value; //sätter variabeln movieTitleToSearchFor till value från det man skriver i input rutan, alltså namnet på filmen
  const movies = await searchMovie(movieTitleToSearchFor); //skickar in value från input till funktionen searchMovie
  console.log(movies);
  createHtml(movies);
})



// 
// const r = await fetch("http://www.omdbapi.com/?apikey=aa1b7a15&i=tt1285016");
// const data = await r.json();
// console.log(data);

