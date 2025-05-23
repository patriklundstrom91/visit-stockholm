# Visit Stockholm Website  
![Pic of site on different devices](/assets/img/devicePic.png)  

Visit Stockholm is a dynamic and interactive website with the purpose of helping tourists explore and experience the city of Stockholm. It will present the visitor with a number of tourist attractions/ spots in a clear and informative way with map to make it easier to find. Filters will let the user show a specific category of attractions like museums or parks, free entry etc. The site will also use API to be able to show weather forecast for Stockholm.

[Link to deployed version of Visit-Stockholm](https://patriklundstrom91.github.io/visit-stockholm/)

## Contents

* [User Experience](#user-experience-ux)  
  * [Business Goals](#business-goals)  
  * [User Goals / User Stories](#user-goals--user-stories)  
    * [Tourist Goals](#tourist-goals)  

* [Design](#design)  
  * [Wireframes](#wireframes)  
  * [Colour Scheme](#colour-scheme)  
  * [Fonts](#fonts)  
  * [Logo](#logo)  
  * [Favicon](#favicon)  

* [Features](#features)  
  * [Navbar](#navbar)  
  * [Images](#images)  
  * [Place card](#place-card)  
  * [Filters](#filters)  
  * [Weather](#weather)  
  * [Footer](#footer)  

* [Used Technologies](#used-technologies)  
  * [Languages](#languages)  
  * [Libraries and Frameworks](#libraries-and-frameworks)  
  * [Platforms and Software](#platforms-and-software)  
  * [Other Resources](#other-resources)  

* [Testing](#testing)  
  * [Manual Testing](#manual-testing)  
  * [Bugs](#bugs)  
    * [Fixed Bugs](#fixed-bugs)  
    * [Unresolved Bugs](#unresolved-bugs)  
  * [Code Validation](#code-validation)  
  * [Lighthouse](#lighthouse)  
  * [Waveapp Accessibility Test](#waveapp-accessibility-test)  

* [Deployment](#deployment)  
  * [Version Control](#version-control)  
  * [GitHub Pages](#github-pages)  
  * [How to Fork](#how-to-fork)  
  * [How to Clone](#how-to-clone)  

* [Credits](#credits)  
  * [Code Used](#code-used)  
  * [Images / Media](#images--media)  

## User Experience (UX)

### Business Goals

The goal for the site is to help promote Stockholm as a tourist destination and help visitors/tourists find and experience different places/attractions in and around the city of Stockholm while visiting. 

### User Goals / User Stories

The target audience is travellers/tourists visiting the capital of Sweden, Stockholm. 

#### Tourist Goals

* As a tourist I want to find out about places I should see while visiting Stockholm. (Must-have)
* As a tourist I want to be able to filter for free entry attractions/places. (Must-have)
* As a tourist I want to be able to filter for museums or other categories of attractions. (Must-have)
* As a tourist I want to be able to use the site well on different devices. (Must-have)
* As a tourist I want to find the information easily and clarily. (Must-have)
* As a tourist I want to be able to see what the weather will be like so I know how to dress. (Must-have)
* As a tourist I want to I want to get help to plan my route to the location with public transport. (Could-have)

## Design

### Wireframes

Below is the wireframes for the project, showing default index page and weather, it's all on the same index page but gets manipulated with JavaScript.

* Index page
![wireframe of index page](/assets/wireframes/wireframe_index.png)  

* Index page with mobile menu open
![wireframe of index with nav open](/assets/wireframes/wireframe_index_menu_open.png)  

* Weather section (content with spots gets hidden)
![wireframe of weather section](/assets/wireframes/wireframe_weather.png)  

### Colour Scheme

The colour scheme was picked with the help of Coolors. I find the colours chosen to be fitting for the page since it's about visiting Stockholm, a city with a lot of water and royal toutch, so dark blue goes well with representing water and is also often used in royal banners etc. This combined with a more earthy/sandy colour. It gives a classy feel, connects with nature and provides good contrast to the text. Not all colours are used in the project. Mainly Penn Blue and Dun.

* [Link to Coolors website and pallet](https://coolors.co/1f271b-001c55-cbb9a8-dcc7be-7d451b)
![Colour scheme](/assets/img/color_pallet.png)

### Fonts

Google fonts is used and imported in CSS, the font JOST is chosen as main font. [Link to font on google fonts](https://fonts.google.com/specimen/Jost)

### Logo

Custom logo made with [FreeLogoDesign.org](https://app.freelogodesign.org/design)

* Logo  
![Logo](/assets/img/logo.png)


### Favicon

Favicons made from logo with [favicon.io](https://favicon.io/favicon-converter/)

* Favicon  
![Favicon](/assets/img/favicon-32x32.png)  

## Features

### Navbar

The page has a Bootstrap v5.3 Navbar that is responsive and lets the user toggle between places/spots and weather, the buttons in the navbar are not links to other pages just buttons that trigger the page manipulation. For mobile you have a expand button and on desktop you have the buttons showing directly in the navbar according to deafult responsivness of Bootstrap navbar. Added custom code so navbar closes after you press a button, did not by default when not linking to other page.  

* Navbar Mobile  
![Navbar mobile](/assets/img/navbar_mobile.png)  

* Navbar open on mobile  
![open navbar mobile](/assets/img/navbar_mobile_open.png)  

* Navbar Desktop  
![Navbar desktop](/assets/img/navbar_desktop.png)  

### Images

The page has a "hero" image of Stockholm directly below navbar to directly give the user a feel about what the page is about, and to make the user want to go there.  

* Hero pic  
![Hero pic of Stockholm](/assets/img/heroPicReadme.png)  

Images are also used in the cards containing the places to visit, every place has a picture connected, see place card below.

### Place card

A Bootstrap card is generated for every spot/place by JavaScript. Every spot is saved in script file as a object in an array with several keys holding all important data about the spot such as name, category, image file path, price, address, embedded map URL and ID etc. 3 different cards are being generated depending on the browser width, so after reading in the width card 1, card 2 or card 3 is generated, card 1 being for mobile with pic above, card 2 for tablet with pic on side and card 3 for desktop with pic on the side extra information visible on the right (only map hidden). card 1 and 2 both have detailed info and map hidden by default and as mentioned card 3 only has map hidden. Button show more toggle to show less when card is "fully open"  

* Mobile card, Card 1 and open after pressing show more  
![Card on mobile, card 1](/assets/img/card1.png)![open card 1](/assets/img/card1open.png)  

* Tablet card, card 2 and open after pressing show more  
![card on tablet](/assets/img/card2.png)  
![open card 2](/assets/img/card2open.png)  

* Desktop card, card 3 and open after pressing show more  
![Card on desktop, card 3](/assets/img/card3.png)  
![open card 3](/assets/img/card3open.png)  

### Filters

The page has 6 filters on the top of the page, the filters can be combined and update the shown places live without any apply button. Bootstrap switches was chosen for aesthetic reasons combined with functionality. In javaScript eventlisteners are ready to pick up and change to filters and directly trigger a filter function that update the array of places to be generated and shown.  

* Filters  
![Pic of filters](/assets/img/filters.png)  

### Weather

The page has a weather section that allow the user to better plan their visit to Stockholm and what clothes to pack. The page uses weather API from open-meteo.com to gather and show weather data/forecast. Data shown is current weather updated every 15 minutes, hourly forecast for the next 24 hours (hidden by default) and a daily 7 day forecast.

* Weather section with places section hidden  
![Weather section](/assets/img/weather.png)  

* Open hourly 24h forecast  
![hourly 24h forecast](/assets/img/weatherhourly.png)  

### Footer

A basic footer is used on the page with text created by PL and a link back to the top/filter, can be useful if showing many place cards. If not enough content on page footer is still pushed to bottom of page with flex. 

* Footer  
![Pic of footer](/assets/img/footer.png)  

## Used Technologies

### Languages

* HTML
* CSS
* JavaScript
* JSON

### Libraries and Frameworks

* [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Google fonts](https://fonts.google.com/)
* [FontAwesome kit](https://fontawesome.com/search)
* [Jquery](https://jquery.com/)

### Platforms and Software

* VS Code
* [Github](https://github.com/patriklundstrom91/visit-stockholm)
* Balsamiq

### Other Resources

* [Weather API from open-meteo.com](https://open-meteo.com/en/docs)  
* [Freelogodesign](https://app.freelogodesign.org/design)
* [Coolers](https://coolors.co/0a369d-92b4f4-cfdee7)
* [Favicon.io](https://favicon.io/)
* Images from [Unsplash](https://unsplash.com), [Pexels](https://www.pexels.com) and [Pixabay](https://pixabay.com/)

## Testing

### Manual Testing

I've tested the page manually to make sure all functions work as intended. See test chart below. 

Test Chart:  

Action   | Expectation   | Outcome   | Pass/Fail   
----- | ----- | ----- | -----
Open page | Cards with spots load when you enter page | As expected | Pass   
Click show more on a card | Card expands and show hidden text + map | As expected | Pass   
Click show more on several cards | The cards expands and show hidden text + map | As expected | Pass   
Click show less on some cards | The cards hide the extra info and toggle button back to show more | As expected | Pass   
Click filter Parks | Filter out and show spots with category "Parks" | As expected | Pass   
Click filter Museum | Filter out and show spots with category "Museum" | As expected | Pass   
Click filter Parks + Museum | Show all spots, both category "Parks" and "Museum" | As expected | Pass   
Click filter Museum + Outdoor | Filter out and show spots with category "Museum" and type "Outdoor" | As expected | Pass   
Click filter Museum + Free entry | Filter out and show spots with category "Museum" and free entry | As expected | Pass
Click filter Parks+Outdoor+Family friendly+Free entry | Filter out and show spots with category/type "Parks","Outdoor", family friendly and free entry | As expected | Pass   
Click filter Museum+Outdoor+free | Show a text No Results (since no such spot is added) | As expected | Pass   
Unclick all filters | Show all spots again | As expected | Pass   
Click Back to top/filters button | go back up to top/filter section | As expected | Pass   
Responsiveness when showing spots | The cards are responsive and adapt to screen size | As expected | Pass
Card layout is different depending on screen size | On mobile card with IMG on top and hidden details + map, tablet IMG on side hidden details+map, desktop 992px+ IMG on side visible details and hidden map | As expected | Pass
Click Weather button in Nav | Hide spots and show weather section on the page | As expected | Pass   
Click show hourly 24h forecast | Toggle hidden div and show hourly forecast, change button to hide | As expected | Pass   
Click hide hourly 24h forecast | Toggle hourly div and hide hourly forecast, change button to show | As expected | Pass   
Change screen size when on weather | change 7-day forecast so on mobile 1 per row, tablett 2 days per row, then 3 and max 4 per row for big screens | As expected | Pass   
Day shown in forecast | Shows the correct day of today and for daily 7-day forecast | As expected | Pass

Browsers:   

Action   | Expectation   | Outcome   | Pass/Fail   
----- | ----- | ----- | -----   
All tests in Chrome (PC & Mac)| All tests should pass | All tests passed | Pass   
All tests in Edge (PC)| All tests should pass | All tests passed | Pass   
All tests in Firefox (PC)| All tests should pass | All tests passed | Pass  
All tests in Safari (Mac)| All tests should pass | All tests passed | Pass    
All tests in Safari (Iphone 11)| All tests should pass | All tests passed | Pass    

### Bugs

#### Fixed Bugs

Bug with pictures not beeing loaded on page, alt text shows instead. 
![Pic of JS code](/assets/img/bug%20img%20src.png)
![Pic of alt text that showed](/assets/img/bug%20img%20alt%20text.png)  
Took a while to see it but managed to misspell so wrote scr instead of src. 
![Pic of alt text that showed](/assets/img/bug%20img%20src%20fixed.png)  
Solution: write img src instead of scr  
![Pic of alt text that showed](/assets/img/bug%20img%20fixed.png)

Bug after adding filter, show more stopped working, after research seems because cards are changed so old show more button that eventlistener was connected to was no longer there.   
![Pic show more not working](/assets/img/bug_show_more_after_filter.png)   
Solution: Had to redo eventlisteners to listen do the content div that is always there and doesn't get manipulated.   
![new eventlisteners for show more button](/assets/img/bug_fix_showmore_afterfilter.png)  

Bug if opening more that one show more and then close, can say show less after close or show more when open etc  
![Pic of wrong button text](/assets/img/bug_show_more_wrong_text.png)  
Solution: change toggle function, instead of a varible visible(that got changed by all buttons and therefore go out of order) then I check attribute display: none; or display: block; Now it works if you open several and close some etc  
![solution toggle text](/assets/img/bug_show_more_fixed_styleAttribute.png)  

#### Unresolved Bugs

No known unresolved bugs.

### Code Validation

The code have been validated again different validators and pass basic HTML and CSS validation without errors.

* [Validator.w3.org](https://validator.w3.org/#validate_by_input)  
![HTML validator](/assets/img/HTMLvalidator.png)  

* [CSS by jigsaw.w3.org](https://jigsaw.w3.org/css-validator/validator)  
![CSS by jigsaw.w3.org test](/assets/img/cssValidator.png)  

The JavaScript have been tested with [jshint.com](https://jshint.com/) and shows many warnings but no error, most warnings seems to be that some code is not available in older versions than ES6.  

* JsHint
![jshint](/assets/img/jshint.png)  

#### Lighthouse

Page pass Lighthouse test with good score.  

* Lighthouse  
![Lighthouse test](/assets/img/lighthouse.png) 

#### Waveapp Accessibility Test

The page has been tested aginst [Waveapp](https://wave.webaim.org/report#/https://patriklundstrom91.github.io/visit-stockholm/) accessibility test with no errors.  

* waveapp  
![waveapp](/assets/img/waveapp.png)  

## Deployment  

### Version Control  

The website was created in VS Code and pushed to GitHub repository and there deployed with GitHub pages. Every push to GitHub repository can be seen so easy to fall back on earlier version if any problems with new code. Following steps were taken.

1. You push from VS code to GitHub repository by creating a repository in GitHub and then enter the given code, in VS code terminal to make a first push and also create a readme.md file.  

2. You can now push regularly to GitHub with the VS code terminal using the comands:  
git add . (press enter)  
git commit -m "commit message about changes"  (press enter)  
git push  (press enter)  

### GitHub Pages  

The website was deployed with GitHub Pages, to do so follow the following steps.  

1. Go to GitHub repository and select settings  

2. In settings select Pages  

3. In Pages you will find a section Branch with a selector with value none, change to main and save  

4. Done! Now when you push to GitHub it will get deployed online. A link to your deployed site is now available in the deployments section at GitHub  

[Link to deployed version of the Visit-Stockholm website](https://patriklundstrom91.github.io/visit-stockholm/)

### How to Fork  

1. Go to GitHub and sign in or sign up  
2. Go to the repository of this site [link here](https://github.com/patriklundstrom91/visit-stockholm)  
3. Press Fork button on upper right part of the page  

### How to Clone  

1. Go to GitHub and sign in or sign up  
2. Go to the repository of this site [link here](https://github.com/patriklundstrom91/visit-stockholm)  
3. Press the green Code button, from there you can clone or download the code as zip  

## Credits

I want to give credit to my mentor Spencer Bariball who gives give good advice and insight that helps me and project forward! He also deserve credit for the efficient filter since I first made a huge filter function with tons of else if statements and it worked but got guidence to the current much more code efficient filter that works as it should!

Also thanks to our Cohort Facilitator who on weekly basis have calls with us and gives guidence and tips.

Thanks to friends and family who have tried my webside and given input and support. 

Credit to Slack and w.3.schools etc for being used to figure out functions and troubleshoot. 

### Code Used

Code from [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) have been used for basic structures as navbar and cards on page.  

Filter changed to shorter and more efficient code guided by mentor Spencer Barriball.  

Picked inspiration for code from Code Institute learning modules and code along projects.

### Images / Media
[Royal Palace from the sky, source Pixabay](https://pixabay.com/photos/the-royal-palace-sweden-stockholm-377913/)  
[City Hall, source Pixabay](https://pixabay.com/photos/sweden-water-stockholm-tower-5017423/)  
[Hero pic over Stockholm, source Pixabay](https://pixabay.com/photos/historic-center-stockholm-sweden-4553585/)  
[Nordic museum, source Pixabay](https://pixabay.com/photos/stockholm-sweden-museum-building-4987515/)  
[Opera, source Pixabay](https://pixabay.com/photos/phantom-opera-mask-theatre-theater-4577790/)  
[Gröna Lund amusement park, source Pixabay](https://pixabay.com/photos/gr%C3%B6na-lund-sweden-stockholm-heaven-2416534/)  
[ABBA museum, source Pixabay](https://pixabay.com/photos/the-star-of-pop-music-figure-of-wax-3981219/)  
[Old Town, source Pixabay](https://pixabay.com/photos/stockholm-old-town-sweden-718879/)  
[Hötorget, source Pixabay](https://pixabay.com/photos/stockholm-market-trade-h%C3%B6torget-2971339/)  
[Kingsgarden blossom tree, source Pixabay](https://pixabay.com/photos/cherry-tree-cherry-cherry-blossom-2254137/)  
[Stockholm Metro, source Pexels](https://www.pexels.com/sv-se/foto/konst-tunnel-farg-stockholm-16578002/)  
[Food Hall, source Unsplash](https://unsplash.com/photos/man-standing-behind-glass-display-counter-e9bho1OWGa0)  
[Drottningholm Palace, source Pixabay](https://pixabay.com/photos/drottningholm-palace-palace-garden-4275464/)  
[Vasa Museum, source Pixabay](https://pixabay.com/photos/vasaskeppet-regalskeppb-stockholm-2432912/)  
[Skansen open air museum, source Pixabay](https://pixabay.com/photos/stockholm-open-air-museum-village-434004/)  
[Vaxholm, source Pixabay](https://pixabay.com/photos/vaxholm-stockholm-vaxholms-hotels-2060074/)  