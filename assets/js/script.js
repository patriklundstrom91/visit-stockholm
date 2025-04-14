//Global variables
//Array with objects containing the tourist spots
const spots = [{
        name: 'Royal Palace',
        img: 'assets/img/royal-palace.jpg',
        alt: 'picture of Stockholm Royal Palace from the sky',
        text: 'The Royal Palace in Stockholm is one of the biggest in europe, with over 600 rooms. The Royal Palace is the official residence and official workplace of the Swedish King Carl XVI Gustaf Bernadotte. The palace was built between 1697 and 1760 and was built on the same spot in old town as the previous palace that was destroyed in a fire 1697.',
        open: 'Mon-Sun 10-17',
        price: 'Adult: 200 SEK <br>Student: 180 SEK <br>Age 7-17: 100 SEK',
        address: 'Slottsbacken 1, Old Town',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'royalPalace',
        button: 'royalPalaceBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5745.672261870116!2d18.069149842216365!3d59.326821474718805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d587e4c4a01%3A0xbdf97a9648763e36!2sKungliga%20slottet!5e1!3m2!1ssv!2sse!4v1744190854519!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: 'City Hall',
        img: 'assets/img/city-hall.jpg',
        alt: 'picture of Stockholm City Hall',
        text: 'Stockholm City Hall (Swedish: Stockholms stadshus, Stadshuset locally) is the seat of Stockholm Municipality in Stockholm, Sweden. It stands on the eastern tip of Kungsholmen island. It houses offices and conference rooms as well as ceremonial halls. It is the venue of the Nobel Prize banquet and is one of the major tourist attractions in Stockholm.',
        open: 'Mon-Sun 9:30-15',
        price: 'Adult: 150 SEK <br>Student: 130 SEK <br>Age 7-17: 60 SEK',
        address: 'Hantverkargatan 1, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'cityHall',
        button: 'cityHallBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5032688650654!2d18.052577613175252!3d59.327826411034714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77df9092cde9%3A0xaeafc90d911394c0!2sStockholms%20stadshus!5e1!3m2!1ssv!2sse!4v1744319207089!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: 'Royal Opera',
        img: 'assets/img/opera.jpg',
        alt: 'picture of opera',
        text: `Sweden's national stage for opera and ballet was founded by Gustav III in 1773 and thus celebrated our 250th anniversary in 2023. The opera house is located in the middle of Stockholm, opposite the Royal Palace and the Parliament: today's opera house was designed by architect Axel Anderberg and inaugurated in 1898. It stands on the same site as Stockholm's first large opera house from 1782. Inspiration was taken from the Paris Opera, with a neo-Renaissance style exterior and staircase, foyer and auditorium in neo-baroque design. Today, the Royal Swedish Opera House is a listed building monument.`,
        open: '2 hours before show',
        price: 'check operan.se',
        address: 'Gustav Adolfs torg 2, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: false,
        id: 'royalOpera',
        button: 'royalOperaBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.3397298585915!2d18.06790261317529!3d59.329734510881984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d592bf2a53d%3A0x5afe7e58cbd3397b!2sKungliga%20Operan!5e1!3m2!1ssv!2sse!4v1744319271875!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: 'Gröna Lund',
        img: 'assets/img/grona-lund.jpg',
        alt: 'picture of Grona Lund amusement park',
        text: `Gröna Lund, or colloquially Grönan, is an amusement park in Stockholm, Sweden. Located on the seaward side of Djurgården Island, it is relatively small compared to other amusement parks, mainly because of its central location, which limits expansion. The 3.8 ha (9.4 acres) amusement park has over 30 attractions and is a popular venue for concerts in the summer. It was founded in 1883 by Jacob Schultheis`,
        open: 'Mon-Sun 11-22',
        price: 'from 160 SEK for entrance',
        address: 'Lilla Allmänna Gränd 9, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'gronaLund',
        button: 'gronaLundBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.8866711394394!2d18.093767183761745!3d59.32335289733475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82aac87aa537%3A0xd53ee16e34a5e131!2sGr%C3%B6na%20Lund!5e1!3m2!1ssv!2sse!4v1744319327761!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: 'ABBA the Museum',
        img: 'assets/img/abba.jpg',
        alt: 'picture of ABBA',
        text: `ABBA The Museum is a Swedish interactive exhibition about the pop band ABBA that opened in Stockholm, Sweden in May 2013. ABBA's collected works are showcased in a contemporary, interactive setting at Djurgården, Stockholm.`,
        open: 'Mon-Sun 09-20',
        price: 'Adult: 239 SEK <br>Student: 200 SEK <br>Age 7-15: 100 SEK',
        address: 'Djurgårdsvägen 68, Stockholm',
        type: 'Indoor',
        category: 'Museum',
        familyFriendly: true,
        id: 'abba',
        button: 'abbaBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.7527322652577!2d18.09438551317515!3d59.324915711267614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82aad341ff05%3A0x4a15f07835978e47!2sABBA%20The%20Museum!5e1!3m2!1ssv!2sse!4v1744319370002!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: 'Old Town',
        img: 'assets/img/old-town.jpg',
        alt: 'picture of Old Town Stockholm',
        text: `The Old Town dates from the 13th century but most buildings are from the 1600s and 1700s. It is a glorious labyrinth of charming cobbled streets, alleyways, faded mustard and rust-coloured townhouses and meeting squares. Stortorget is the main square and all the big attractions lead off it, including the baroque style Royal Palace (Kungliga Slottet) and The Royal Chapel (Storkyrkan) around the corner, where Crown Princess Victoria married Daniel Westling in June 2010. Old Town today Some 3,000 people live in the Old Town and it is packed with cafés, restaurants, tourist shops, studios, galleries and museums, including the Nobel Prize Museum.`,
        open: '',
        price: 'Free',
        address: 'Old Town, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'oldTown',
        button: 'oldTownBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11650.986493754708!2d18.060366881720743!3d59.32498698914416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e2669ff92b%3A0x2600fef435168b11!2sGamla%20stan%2C%20S%C3%B6dermalm%2C%20Stockholm!5e1!3m2!1ssv!2sse!4v1744319411518!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: `Haymarket`,
        img: 'assets/img/hotorget.jpg',
        alt: 'picture of Haymarket square',
        text: `Haymarket (Hötorget) is a city square in the center of Stockholm, Sweden that has been transitioning since the Early Medieval Period. To its east lies the Royal Concert Hall, to its south lies Filmstaden Sergel, one of the largest multiscreen cinemas in inner-city Stockholm, and the adjacent Hötorgshallen food market hall.`,
        open: '',
        price: 'Free',
        address: 'Hötorget, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'hayMarket',
        button: 'hayMarketBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.903855761831!2d18.059654913175496!3d59.33481991047487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d67674b1659%3A0xe87d05663d192851!2sH%C3%B6torget%2C%20Stockholm!5e1!3m2!1ssv!2sse!4v1744319450160!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: `Stockholm Metro, Underground Art`,
        img: 'assets/img/metro.jpg',
        alt: 'picture of metro station',
        text: `Considered the world's longest art gallery, Stockholm metro consist of many unique underground stations each decorated by different swedish artists. Take a trip in the metro system and explore stations like Kungsträdgården (King's garden), T-centralen, Stadshuset (City Hall) or Stadion (Stadium) as shown in the picture.`,
        open: '',
        price: 'Adult: 43 SEK<br>Children up to 20 years: 26 SEK',
        address: 'Stockholm',
        type: 'Indoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'metro',
        button: 'metroBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.223602432464!2d18.057090313175394!3d59.33108941077355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d60812e6cc7%3A0xbe2201dc8bf32611!2sT-Centralen!5e1!3m2!1ssv!2sse!4v1744319496176!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: `Östermalm Food Hall`,
        img: 'assets/img/food-hall.jpg',
        alt: 'picture of food hall stand',
        text: `Visit Östermalm's premium food hall with a wide selection of food to buy home or sit down and have a glas of wine with some food in one of the many restaurants inside.`,
        open: 'Mon-fri: 9:30-19<br>Sat-Sun: 9:30-17',
        price: 'Free',
        address: 'Östermalmstorg, Stockholm',
        type: 'Indoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'foodHall',
        button: 'foodHallBtn',
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.8063822133226!2d18.075108513175643!3d59.335957110383916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5b24096139%3A0x3d784e22bab4355a!2s%C3%96stermalms%20Saluhall!5e1!3m2!1ssv!2sse!4v1744319542256!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
];
//Array with weekdays, 2 weeks so it can rotate 1 week ahead of today
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Trackers if hidden elements are visible or not
let visible = false;
let hourlyVisible = false;

//Generate all spots when open site
$(document).ready(() => generateCards(spots));

//Add event listeners for all filters
["parks", "museums", "indoor", "outdoor", "familyFriendly", "free"].forEach(id => {
    document.getElementById(id).addEventListener("change", filter);
});

//Eventlistener for weather
document.getElementById("weatherBtn").addEventListener("click", weather);

//Eventlistener for back to spots
document.getElementById("spotsBtn").addEventListener("click", toggleToContent);

/**
 * Live filter function that updates the the content shown
 */
function filter() {
    const parks = document.getElementById("parks").checked;
    const museums = document.getElementById("museums").checked;
    const indoor = document.getElementById("indoor").checked;
    const outdoor = document.getElementById("outdoor").checked;
    const family = document.getElementById("familyFriendly").checked;
    const free = document.getElementById("free").checked;

    const filtered = spots.filter(spot => {
        const matchCategory = (!parks && !museums) ||
            (parks && spot.category === 'Parks') ||
            (museums && spot.category === 'Museum');

        const matchType = (!indoor && !outdoor) ||
            (indoor && spot.type === 'Indoor') ||
            (outdoor && spot.type === 'Outdoor');

        const matchFamily = !family || spot.familyFriendly;
        const matchFree = !free || spot.price === 'Free';
        return matchCategory && matchType && matchFamily && matchFree;
    });
    checkResult(filtered);
}

/**
 * Checks the result from filter function, if 0 then generate text no result otherwise generate cards
 * @param {*} array 
 */
function checkResult(array) {
    if (array.length === 0) {
        document.getElementById("content").innerHTML = '<p class="text-center">No Results...Try to change the filters</p>';
    } else {
        generateCards(array);
    }

}

/**
 * Function to generate code for the cards containing every spot, different cards are used depening on screen size
 * @param {*} items 
 */
function generateCards(items) {
    // Clear content of previus result
    document.getElementById("content").innerHTML = "";
    let width = window.innerWidth;

    if (width < 768) {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card col-12">
        <img src="${item.img}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.text}</p>
            <button id="${item.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
            <div id="${item.id}" class="hide">
            <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
            <div class="map">
            ${item.map}
            </div>
            </div>
        </div>
        </div>`;
        }

    } else if (width >= 768 && width <= 992) {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
             <img src="${item.img}" class="img-fluid rounded-start" alt="${item.alt}">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${item.name}</h5>
               <p class="card-text">${item.text}</p>
               <button id="${item.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
                <div id="${item.id}" class="hide">
                <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                <div class="map">
                ${item.map}
                </div>
                </div>
             </div>
           </div>
          </div>
        </div>`;
        }
    } else {
        for (let item of items) {
            document.getElementById("content").innerHTML += `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.img}" class="img-fluid rounded-start" alt="${item.alt}">
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
             <p class="card-text">${item.text}</p>
             </div>
             </div>
             <div class="col-md-3">
                <div class="card-body">
                <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                <button id="${item.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
                </div>
             </div>
             <div id="${item.id}" class="hide">
                <div class="map">
                ${item.map}
                </div>
            </div>
        </div>`;
        }
    }
}

//Toggle hiden text
document.getElementById("content").addEventListener("click", function(event) {
    if (event.target.tagName == "BUTTON") {
        let id = event.target.id.slice(0, event.target.id.length - 3);

        if (document.getElementById(id).getAttribute("style") === "display: block;") {
            document.getElementById(`${event.target.id}`).innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`;
            $(`#${id}`).toggle("slow");
        } else {
            document.getElementById(`${event.target.id}`).innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`;
            $(`#${id}`).toggle("slow");
        }
    }
});

/**
 * Weather function that hide spots content div and shows weather div, API for weather with open-meteo.com
 */
async function weather() {

    const weatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum&hourly=temperature_2m,weather_code,wind_speed_10m,precipitation&current=temperature_2m,wind_speed_10m,precipitation,weather_code&timezone=Europe%2FBerlin&wind_speed_unit=ms';
    const weatherResponse = await fetch(weatherAPI);
    const weatherData = await weatherResponse.json();

    if (weatherResponse.ok) {
        //Check the day
        let currentDay = checkDay(weatherData.current.time);
        //Show current weather
        const currentWeather = checkWeatherCode(weatherData.current.weather_code);

        console.log(weatherData);
        document.getElementById("currentDay").innerHTML = `${currentDay}`;
        document.getElementById("currentDateData").innerHTML = `${weatherData.current.time}`;
        document.getElementById("currentSymbol").innerHTML = `${currentWeather[0]}`;
        document.getElementById("currentText").innerHTML = `${currentWeather[1]}`;
        document.getElementById("currentTempData").innerHTML = `${Math.round(weatherData.current.temperature_2m)}`;
        document.getElementById("currentWindData").innerHTML = `${Math.round(weatherData.current.wind_speed_10m)}`;
        document.getElementById("currentPrecipitationData").innerHTML = `${weatherData.current.precipitation}`;

        //Show hourly 24h forward from present time
        detailedForecast(weatherData);
        //Create daily forecast for a week
        weeklyForecast(weatherData.daily);

        //Hide places/spots div and show weather div
        document.getElementById("content").classList.add("hide");
        document.getElementById("filter").classList.add("hide");
        document.getElementById("weather").classList.remove("hide");
    } else {
        alert("Weather function not available right now");
        throw new Error(weatherData.error);
    }
}
/**
 * Function to check day, returns day of today, send current.time from API, weekDay array declared up at global variables
 * @param {*} d 
 */
function checkDay(d) {
    let date = new Date(d);
    let currentDay = weekDay[date.getDay()];
    return currentDay;
}
/**
 * Generate the detailed 48h forecast
 * @param {*} data 
 */
function detailedForecast(data) {
    //code to find index of now in hourly data that starts att 00 of today, but since current time can be 18:45 then I use slice to cut :45 so indexOf works. 
    let hourlySliced = [];
    for (let i = 0; i < 24; i++) {
        hourlySliced.push(data.hourly.time[i].slice(0, 13));
    }
    let index = hourlySliced.indexOf(data.current.time.slice(0, 13));
    document.getElementById("hourlyForecast").innerHTML = ``;
    for (let i = 0; i < 24; i++) {
        let symbolText = checkWeatherCode(data.hourly.weather_code[index]);
        document.getElementById("hourlyForecast").innerHTML += `<div class="hourly">
    <p>${data.hourly.time[index].slice(11)} ${symbolText[0]} ${Math.round(data.hourly.temperature_2m[index])}°C ${Math.round(data.hourly.wind_speed_10m[index])}m/s ${data.hourly.precipitation[index]}mm</p>
    </div>`;
        index++;
    }
}
/**
 * Function to toggle 48h hourly forecast
 */
document.getElementById("hourlyBtn").addEventListener("click", function() {
    $("#hourlyForecast").toggle("slow");
    if (!hourlyVisible) {
        document.getElementById("hourlyBtn").innerHTML = `Hide hourly 24h forecast <i class="fa-solid fa-angle-up"></i>`;
        hourlyVisible = true;
    } else {
        document.getElementById("hourlyBtn").innerHTML = `Show hourly 24h forecast <i class="fa-solid fa-angle-down"></i>`;
        hourlyVisible = false;
    }
});
/**
 * Generate cards with daily forecast 7 days
 * @param {*} data 
 */
function weeklyForecast(data) {
    let today = checkDay(data.time[0]);
    let dayIndex = weekDay.indexOf(today);
    let i = 0;
    let symbolText = checkWeatherCode(data.weather_code[i]);

    document.getElementById("weeklyCards").innerHTML = ``;
    //Create first card with today text
    document.getElementById("weeklyCards").innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Today <span id="dayFirstCard">(${weekDay[dayIndex]})</span></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${data.time[i]}</h6>
                    <p class="card-text">${symbolText[0]}</p>
                    <p class="card-text">${symbolText[1]}</p>
                    <p class="card-text">Temp: ${Math.round(data.temperature_2m_max[i])} °C (${Math.round(data.temperature_2m_min[i])} °C)</p>
                    <p class="card-text">Max Wind: ${Math.round(data.wind_speed_10m_max[i])} m/s</p>
                    <p class="card-text">Estimated Precipitation: ${data.precipitation_sum[i]} mm</p>
                    </div>
                </div>
            </div>`;
    i++;
    dayIndex++;
    for (i; i < 7; i++) {
        symbolText = checkWeatherCode(data.weather_code[i]);
        document.getElementById("weeklyCards").innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${weekDay[dayIndex]}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${data.time[i]}</h6>
                    <p class="card-text">${symbolText[0]}</p>
                    <p class="card-text">${symbolText[1]}</p>
                    <p class="card-text">Temp: ${Math.round(data.temperature_2m_max[i])} °C (${Math.round(data.temperature_2m_min[i])} °C)</p>
                    <p class="card-text">Max Wind: ${Math.round(data.wind_speed_10m_max[i])} m/s</p>
                    <p class="card-text">Estimated Precipitation: ${data.precipitation_sum[i]} mm</p>
                    </div>
                </div>
            </div>`;
        dayIndex++;
    }

}
/**
 * Function to check weather code from open-meteo.com API and return symbol and text in a array with symbol index 0 and text index 1.
 */
function checkWeatherCode(weatherCode) {
    let symbolText = [];
    if (weatherCode === 0) {
        symbolText = [`<i class="fa-solid fa-sun"></i>`, `Clear skies`];
    } else if (weatherCode === 1) {
        symbolText = [`<i class="fa-solid fa-cloud-sun"></i>`, `Mainly clear`];
    } else if (weatherCode === 2) {
        symbolText = [`<i class="fa-solid fa-cloud-sun"></i>`, `Partly cloudy`];
    } else if (weatherCode === 3) {
        symbolText = [`<i class="fa-solid fa-cloud"></i>`, `Cloudy`];
    } else if (weatherCode === 45 || weatherCode === 48) {
        symbolText = [`<i class="fa-solid fa-smog"></i>`, `Fog`];
    } else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
        symbolText = [`<i class="fa-solid fa-cloud-rain"></i>`, `Drizzle`];
    } else if (weatherCode === 61 || weatherCode === 63) {
        symbolText = [`<i class="fa-solid fa-cloud-rain"></i>`, `Rain`];
    } else if (weatherCode === 65) {
        symbolText = [`<i class="fa-solid fa-cloud-showers-heavy"></i>`, `Heavy rain`];
    } else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
        symbolText = [`<i class="fa-solid fa-snowflake"></i>`, `Snow fall`];
    } else if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
        symbolText = [`<i class="fa-solid fa-cloud-sun-rain"></i>`, `Rain showers`];
    } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
        symbolText = [`<i class="fa-solid fa-cloud-bolt"></i>`, `Risk of thunderstorm`];
    } else {
        symbolText = [`<i class="fa-solid fa-cloud"></i>`, `Cloudy`];
    }
    return symbolText;
}

/**
 * Toggle back to content and tourist spots div after weather div
 */
function toggleToContent() {
    document.getElementById("weather").classList.add("hide");
    document.getElementById("filter").classList.remove("hide");
    document.getElementById("content").classList.remove("hide");

}