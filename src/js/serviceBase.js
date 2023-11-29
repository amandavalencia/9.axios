export const get = async (url)=>{ //skickar in url:en in till funktionen get
    const response = await fetch(url); //gör en fetch med urlen + värdet av input (titel) får ut ett promise
    const data = await response.json(); // tar fram informationen från api 

    return data; // skickar tillbaka informationen data till kallande funktion 
  }