 const apiKeys="1f8bc806cf856c1d04f246c889dfa954";

 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox=document.querySelector(".search input");
 const searchBtn=document.querySelector(".search button");
 const weatherIcon=document.querySelector(".weather-icon");

 async function checkWeather(city){
    const response = await fetch(apiUrl+city+ `&appid=${apiKeys}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    if(data.weather[0]=="clouds"){
        weatherIcon.src="images/clouds.png";
    }
   else  if(data.weather[0]=="rain"){
        weatherIcon.src="images/rain.png";
    }
  else  if(data.weather[0]=="clear"){
        weatherIcon.src="images/clear.png";
    }
   else if(data.weather[0]=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
   else if(data.weather[0]=="Mist"){
        weatherIcon.src="images/mist.png";
    }
   else if(data.weather[0]=="clouds"){
        weatherIcon.src="images/clouds.png";
    }


 }
 searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
 })

 