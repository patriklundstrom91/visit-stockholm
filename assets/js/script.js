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
        type: 'Indoor',
        category: 'Museum',
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
        type: 'Outdoor',
        category: 'Parks',
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
        type: 'Indoor',
        category: 'Museum',
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
        price: 'Free',
        address: 'Old Town, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
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
        price: 'Free',
        address: 'Hötorget, Stockholm',
        type: 'Outdoor',
        category: 'Parks',
        familyFriendly: true,
        id: 'hayMarket',
        button: 'hayMarketBtn'
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
        button: 'metroBtn'
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
        button: 'foodHallBtn'
    }
];
let visible = false;
//Generate all spots when open site
$(document).ready(generateCards(spots));

//Eventlistener for filter
document.getElementById("parks").addEventListener("click", filter);
document.getElementById("museums").addEventListener("click", filter);
document.getElementById("indoor").addEventListener("click", filter);
document.getElementById("outdoor").addEventListener("click", filter);
document.getElementById("familyFriendly").addEventListener("click", filter);
document.getElementById("free").addEventListener("click", filter);

//Eventlistener for weather
document.getElementById("weatherBtn").addEventListener("click", weather);

//Eventlistener for back to spots
document.getElementById("spotsBtn").addEventListener("click", toggleToContent);

//Live filter that updates the the content shown
function filter() {
    console.log('in function filter');
    let keys = [];
    let array = [];
    if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all checked');
        for (spot of spots) {
            if (spot.price == 'Free' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('inside all but free checked');
        for (spot of spots) {
            if (spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all but familyFriendly checked');
        for (spot of spots) {
            if (spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('inside all but familyFriendly and free checked, so shows all');
        array = spots;
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all but outdoor checked');
        for (spot of spots) {
            if (spot.price == 'Free' && spot.familyFriendly == true && spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('inside all but outdoor and free checked');
        for (spot of spots) {
            if (spot.familyFriendly == true && spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all but outdoor and familyFriendly checked');
        for (spot of spots) {
            if (spot.price == 'Free' && spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true) {
        console.log('inside all but outdoor and familyFriendly and free checked');
        for (spot of spots) {
            if (spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all but indoor');
        for (spot of spots) {
            if (spot.price == 'Free' && spot.familyFriendly == true && spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('inside all but indoor and free');
        for (spot of spots) {
            if (spot.familyFriendly == true && spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('inside all but indoor and familyFriendly');
        for (spot of spots) {
            if (spot.price == 'Free' && spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('inside all but indoor and familyFriendly and free');
        for (spot of spots) {
            if (spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but indoor and outdoor');
        for (spot of spots) {
            if (spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but indoor, outdoor and free');
        for (spot of spots) {
            if (spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true && document.getElementById("free").checked == true) {
        console.log('all but indoor, outdoor and familyFriendly');
        for (spot of spots) {
            if (spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("museums").checked == true) {
        console.log('all but indoor, outdoor, familyFriendly and free, shows all');
        array = spots;
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but museums and free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums and familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('all but museums, familyFriendly and free');
        for (spot of spots) {
            if (spot.category == 'Parks') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums, outdoor');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Indoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but museums, outdoor, free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Indoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums, outdoor, familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Indoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("indoor").checked == true) {
        console.log('all but museums, outdoor, familyFriendly, free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums, indoor');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Outdoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but museums, indoor, free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Outdoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but museums, indoor, familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Outdoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('all but museums, indoor, familyFriendly, free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('parks + familyFrienly+free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('parks + familyFrienly');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true && document.getElementById("free").checked == true) {
        console.log('parks +free');
        for (spot of spots) {
            if (spot.category == 'Parks' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("parks").checked == true) {
        console.log('only parks');
        for (spot of spots) {
            if (spot.category == 'Parks') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but parks, free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('all but parks, familyFriendly, free');
        for (spot of spots) {
            if (spot.category == 'Museum') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, outdoor');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Indoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but parks, outdoor, free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Indoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, outdoor, familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Indoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("indoor").checked == true) {
        console.log('all but parks, outdoor, familyFriendly, free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, indoor');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Outdoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but parks, indoor,free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Outdoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, indoor, familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Outdoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('all but parks, indoor, familyFriendly, free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('museums+familyFriendly+free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('museums+familyFriendly');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true && document.getElementById("free").checked == true) {
        console.log('museums+free');
        for (spot of spots) {
            if (spot.category == 'Museum' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("museums").checked == true) {
        console.log('only museums');
        for (spot of spots) {
            if (spot.category == 'Museum') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, museums');
        for (spot of spots) {
            if (spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('all but parks, museums, free');
        for (spot of spots) {
            if (spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, museums, familyFriendly');
        for (spot of spots) {
            if (spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("outdoor").checked == true) {
        console.log('only indoor, outdoor');
        array = spots;
    } else if (document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('all but parks, museums, familyFriendly');
        for (spot of spots) {
            if (spot.type == 'Indoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('only indoor, familyFriendly');
        for (spot of spots) {
            if (spot.type == 'Indoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true && document.getElementById("free").checked == true) {
        console.log('only indoor, free');
        for (spot of spots) {
            if (spot.type == 'Indoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("indoor").checked == true) {
        console.log('only indoor');
        for (spot of spots) {
            if (spot.type == 'Indoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('only outdoor, familyFriendly, free');
        for (spot of spots) {
            if (spot.type == 'Outdoor' && spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("outdoor").checked == true && document.getElementById("familyFriendly").checked == true) {
        console.log('only outdoor, familyFriendly');
        for (spot of spots) {
            if (spot.type == 'Outdoor' && spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("outdoor").checked == true && document.getElementById("free").checked == true) {
        console.log('only outdoor, free');
        for (spot of spots) {
            if (spot.type == 'Outdoor' && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("outdoor").checked == true) {
        console.log('only outdoor');
        for (spot of spots) {
            if (spot.type == 'Outdoor') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("familyFriendly").checked == true && document.getElementById("free").checked == true) {
        console.log('only familyFriendly, free');
        for (spot of spots) {
            if (spot.familyFriendly == true && spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("familyFriendly").checked == true) {
        console.log('only familyFriendly');
        for (spot of spots) {
            if (spot.familyFriendly == true) {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else if (document.getElementById("free").checked == true) {
        console.log('only free');
        for (spot of spots) {
            if (spot.price == 'Free') {
                array.push(spot);
                console.log(spot.name);
            }
        }
    } else {
        array = spots;
    }
    checkResult(array);
    console.log(array);
};

function checkResult(array) {
    if (array.length == 0) {
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
    console.log(width);
    if (width <= 768) {
        for (item of items) {
            document.getElementById("content").innerHTML += `<div class="card col-12">
            <img src="${item.img}" class="card-img-top" alt="${item.alt}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.text}</p>
                <button id="${item.button}">Show more <i class="fa-solid fa-angle-down"></i></button>
                <div id="${item.id}" class="hide">
                <p class="card-text"><small class="text-body-secondary">Opening hours: ${item.open}<br>Price: ${item.price}<br>Address: ${item.address}</small></p>
                ${item.map}
                <a href="#" class="btn btn-primary">Get there</a>
                </div>
            </div>
            </div>`;
        }

    } else if (width > 768 && width <= 992) {
        for (item of items) {
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
                    ${item.map}
                    <a href="#" class="btn btn-primary">Get there</a>
                    </div>
                 </div>
               </div>
              </div>
            </div>`;
        }
    } else {
        for (item of items) {
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
                    </div>
                 </div
                </div>`;
        }
    }
};

//Toggle hiden text

document.getElementById("content").addEventListener("click", function(event) {
    if (event.target.tagName == "BUTTON") {
        console.log("in toggle function");
        let id = event.target.id.slice(0, event.target.id.length - 3);
        console.log(id);
        if (!visible) {
            document.getElementById(`${event.target.id}`).innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`;
            $(`#${id}`).toggle("slow");
            visible = true;
        } else if (visible) {
            document.getElementById(`${event.target.id}`).innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`;
            $(`#${id}`).toggle("slow");
            visible = false;
        }
        console.log(id);
    }
});

// Weather API with open-meteo.com
async function weather() {

    const weatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code,wind_speed_10m,precipitation&current=temperature_2m,wind_speed_10m,precipitation,weather_code&timezone=Europe%2FBerlin';
    //const weatherData = await fetch(weatherAPI);

    document.getElementById("content").classList.add("hide");
    document.getElementById("filter").classList.add("hide");
    document.getElementById("weather").classList.remove("hide");
}

//Toggle back to content and tourist spots div after weather
function toggleToContent() {
    document.getElementById("weather").classList.add("hide");
    document.getElementById("filter").classList.remove("hide");
    document.getElementById("content").classList.remove("hide");

}