//Objects containing the tourist spots
const spots = [{
        name: 'Royal Palace',
        img: '<img scr="assets/img/royal-palace.jpg" alt="picture of Stockholm Royal Palace from the sky">',
        text: 'The Royal Palace in Stockholm is one of the biggest in europe, with over 600 rooms. The Royal Palace is the official residence and official workplace of the Swedish King Carl XVI Gustaf Bernadotte. The palace was built between 1697 and 1760 and was built on the same spot in old town as the previous palace that was destroyed in a fire 1697.',
        open: 'Mon-Sun 10-17',
        price: 'Adult: 200 SEK <br>Student: 180 SEK <br>Age 7-17: 100 SEK',
        Address: 'Slottsbacken 1, Old Town'
    },
    {
        name: 'City Hall',
        img: '<img scr="assets/img/city-hall.jpg" alt="picture of Stockholm Royal Palace from the sky">',
        text: 'Stockholm City Hall (Swedish: Stockholms stadshus, Stadshuset locally) is the seat of Stockholm Municipality in Stockholm, Sweden. It stands on the eastern tip of Kungsholmen island. It houses offices and conference rooms as well as ceremonial halls. It is the venue of the Nobel Prize banquet and is one of the major tourist attractions in Stockholm.',
        open: 'Mon-Sun 9:30-15',
        price: 'Adult: 150 SEK <br>Student: 130 SEK <br>Age 7-17: 60 SEK',
        Address: 'Hantverkargatan 1, Stockholm'
    }
];

$(document).ready(function() {
    for (spot of spots) {
        console.log(spot.name);
        document.getElementById("content").innerHTML += `${spot.img} <h2>${spot.name}</h2> <p>${spot.text}</p>`;
    };
});