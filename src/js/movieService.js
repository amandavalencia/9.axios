import { get } from "./serviceBase";

export const searchMovie = async(title) =>{ //titel blir det man skickat över med variabeln movieTitleToSearchFor
    const url = "http://www.omdbapi.com/?apikey=aa1b7a15&s="+title; //gör url:en till en variabel och lägger till titeln vilket är värdet av inputen 
    const data = await get(url); //ny variabel (data) som kör funktionen get med värdet url 

    return data.Search; // returnerar det man fått ut av get funktionen, vilket är resultatet av fetch tar ut egenskapen Search och skickar det till den kallande funktionen, vilket är searchMovie
  }
