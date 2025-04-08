//Objects containing the tourist spots
const spots = [{
        name: 'Royal Palace',
        img: 'assets/img/royal-palace.jpg',
        alt: 'picture of Stockholm Royal Palace from the sky',
        text: 'The Royal Palace in Stockholm is one of the biggest in europe, with over 600 rooms. The Royal Palace is the official residence and official workplace of the Swedish King Carl XVI Gustaf Bernadotte. The palace was built between 1697 and 1760 and was built on the same spot in old town as the previous palace that was destroyed in a fire 1697.',
        open: 'Mon-Sun 10-17',
        price: 'Adult: 200 SEK <br>Student: 180 SEK <br>Age 7-17: 100 SEK',
        address: 'Slottsbacken 1, Old Town',
        type: 'indoor',
        category: 'museum',
        familyFriendly: true,
        id: 'royalPalace',
        button: 'royalPalaceBtn'
    },
    {
        name: 'City Hall',
        img: 'assets/img/city-hall.jpg',
        alt: 'picture of Stockholm City Hall',
        text: 'Stockholm City Hall (Swedish: Stockholms stadshus, Stadshuset locally) is the seat of Stockholm Municipality in Stockholm, Sweden. It stands on the eastern tip of Kungsholmen island. It houses offices and conference rooms as well as ceremonial halls. It is the venue of the Nobel Prize banquet and is one of the major tourist attractions in Stockholm.',
        open: 'Mon-Sun 9:30-15',
        price: 'Adult: 150 SEK <br>Student: 130 SEK <br>Age 7-17: 60 SEK',
        address: 'Hantverkargatan 1, Stockholm',
        type: 'indoor',
        category: 'museum',
        familyFriendly: true,
        id: 'cityHall',
        button: 'cityHallBtn'
    },
    {
        name: 'Royal Opera',
        img: 'assets/img/opera.jpg',
        alt: 'picture of opera',
        text: `Sweden's national stage for opera and ballet was founded by Gustav III in 1773 and thus celebrated our 250th anniversary in 2023. The opera house is located in the middle of Stockholm, opposite the Royal Palace and the Parliament: today's opera house was designed by architect Axel Anderberg and inaugurated in 1898. It stands on the same site as Stockholm's first large opera house from 1782. Inspiration was taken from the Paris Opera, with a neo-Renaissance style exterior and staircase, foyer and auditorium in neo-baroque design. Today, the Royal Swedish Opera House is a listed building monument.`,
        open: '2 hours before show',
        price: 'check operan.se',
        address: 'Gustav Adolfs torg 2, Stockholm',
        type: 'indoor',
        category: 'shows',
        familyFriendly: false,
        id: 'royalOpera',
        button: 'royalOperaBtn'
    },
    {
        name: 'Gröna Lund',
        img: 'assets/img/grona-lund.jpg',
        alt: 'picture of Grona Lund amusement park',
        text: `Gröna Lund, or colloquially Grönan, is an amusement park in Stockholm, Sweden. Located on the seaward side of Djurgården Island, it is relatively small compared to other amusement parks, mainly because of its central location, which limits expansion. The 3.8 ha (9.4 acres) amusement park has over 30 attractions and is a popular venue for concerts in the summer. It was founded in 1883 by Jacob Schultheis`,
        open: 'Mon-Sun 11-22',
        price: 'from 160 SEK for entrance',
        address: 'Lilla Allmänna Gränd 9, Stockholm',
        type: 'outdoor',
        category: 'parks',
        familyFriendly: true,
        id: 'gronaLund',
        button: 'gronaLundBtn'
    },
    {
        name: 'ABBA the Museum',
        img: 'assets/img/abba.jpg',
        alt: 'picture of ABBA',
        text: `ABBA The Museum is a Swedish interactive exhibition about the pop band ABBA that opened in Stockholm, Sweden in May 2013. ABBA's collected works are showcased in a contemporary, interactive setting at Djurgården, Stockholm.`,
        open: 'Mon-Sun 09-20',
        price: 'Adult: 239 SEK <br>Student: 200 SEK <br>Age 7-15: 100 SEK',
        address: 'Djurgårdsvägen 68, Stockholm',
        type: 'indoor',
        category: 'museum',
        familyFriendly: true,
        id: 'abba',
        button: 'abbaBtn'
    },
    {
        name: 'Old Town',
        img: 'assets/img/old-town.jpg',
        alt: 'picture of Old Town Stockholm',
        text: `The Old Town dates from the 13th century but most buildings are from the 1600s and 1700s. It is a glorious labyrinth of charming cobbled streets, alleyways, faded mustard and rust-coloured townhouses and meeting squares. Stortorget is the main square and all the big attractions lead off it, including the baroque style Royal Palace (Kungliga Slottet) and The Royal Chapel (Storkyrkan) around the corner, where Crown Princess Victoria married Daniel Westling in June 2010. Old Town today Some 3,000 people live in the Old Town and it is packed with cafés, restaurants, tourist shops, studios, galleries and museums, including the Nobel Prize Museum and the Post Museum`,
        open: '',
        price: 'Free entry',
        address: 'Old Town, Stockholm',
        type: 'outdoor',
        category: 'parks',
        familyFriendly: true,
        id: 'oldTown',
        button: 'oldTownBtn'
    },
    {
        name: `Haymarket`,
        img: 'assets/img/hotorget.jpg',
        alt: 'picture of Haymarket square',
        text: `Haymarket (Hötorget) is a city square in the center of Stockholm, Sweden that has been transitioning since the Early Medieval Period. To its east lies the Royal Concert Hall, to its south lies Filmstaden Sergel, one of the largest multiscreen cinemas in inner-city Stockholm, and the adjacent Hötorgshallen food market hall`,
        open: '',
        price: 'Free entry',
        address: 'Hötorget, Stockholm',
        type: 'outdoor',
        category: 'parks',
        familyFriendly: true,
        id: 'hayMarket',
        button: 'hayMarketBtn'
    }
];

$(document).ready(generateCards());
/*{
    for (spot of spots) {
        console.log(spot);
        document.getElementById("content").innerHTML += `${spot.img} <h2>${spot.name}</h2> <p>${spot.text}</p>`;
    };
});
*/
function generateCards() {
    let width = window.innerWidth;
    console.log(width);
    if (width <= 768) {
        for (spot of spots) {
            document.getElementById("content").innerHTML += `<div class="card col-12">
            <img src="${spot.img}" class="card-img-top" alt="${spot.alt}">
            <div class="card-body">
                <h5 class="card-title">${spot.name}</h5>
                <p class="card-text">${spot.text}</p>
                <button id="${spot.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
                <div id="${spot.id}" class="hide">
                <p class="card-text"><small class="text-body-secondary">Opening hours: ${spot.open}<br>Price: ${spot.price}<br>Address: ${spot.address}</small></p>
                <a href="#" class="btn btn-primary">Get there</a>
                </div>
            </div>
            </div>`;
        }

    } else if (width > 768 && width <= 992) {
        for (spot of spots) {
            document.getElementById("content").innerHTML += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                 <img src="${spot.img}" class="img-fluid rounded-start" alt="${spot.alt}">
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h5 class="card-title">${spot.name}</h5>
                   <p class="card-text">${spot.text}</p>
                   <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                 </div>
               </div>
              </div>
            </div>`;
        }
    } else {
        for (spot of spots) {
            document.getElementById("content").innerHTML += `<div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${spot.img}" class="img-fluid rounded-start" alt="${spot.alt}">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <h5 class="card-title">${spot.name}</h5>
                 <p class="card-text">${spot.text}</p>
                 </div>
                 </div>
                 <div class="col-md-3">
                    <div class="card-body">
                    <p class="card-text"><small class="text-body-secondary">Opening hours: ${spot.open}<br>Price: ${spot.price}<br>Address: ${spot.address}</small></p>
                    </div>
                 </div
                </div>`;
        }
    }
};

/*Toggle hiden text*/
$("button").on("click", function() {
    let id = this.id.slice(0, this.id.length - 3);
    $(`#${id}`).toggle("slow");
    if (document.getElementById(`${this.id}`).innerText == 'Show more') {
        document.getElementById(`${this.id}`).innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`;
    } else {
        document.getElementById(`${this.id}`).innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`;
    }
    console.log(id);
    console.log(att);
});