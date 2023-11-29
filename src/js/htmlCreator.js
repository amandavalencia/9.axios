import { getMovieById } from "./movieService";

export const createHtml = (movies) => {
    const movieContainer = document.getElementById("movieContainer");
    movieContainer.innerHTML = "";

    for (let i = 0; i < movies.length; i++){
      const h3 = document.createElement("h3");
      h3.innerHTML = movies[i].Title;
      console.log(movies[i].Title);
      const movieDiv = document.createElement("div");
      movieDiv.className = "movieDiv";
      movieDiv.appendChild(h3);
      movieContainer.appendChild(movieDiv);

      movieDiv.addEventListener("click", async (i)=>{
        const movieDetails = await getMovieById(movies[i].imdbID);
        console.log("movie:"+ movieDetails);

      })
    }
  }