// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

console.log(inventory)

// DONE Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvTypeNames = inventory.map((tv) => {
    return tv.type;
})
console.log(tvTypeNames);


// DONE Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.//
const soldOutTVs = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
})
console.log(soldOutTVs);


// DONE Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const tvWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
//  return tv.options.ambiLight // deze is te gebruiken als we alleen maar naar True statement zijn op zoek naar
})
console.log(tvWithAmbilight);

//  DONE Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// Variant 1:
inventory.sort((a, b) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
})

console.log(inventory);

//Variant 2:
// inventory.sort((a, b) => {return a.price - b.price})
// console.log(inventory)

//Variant 3:
// inventory.sort((a, b) => a.price - b.price);
// console.log(inventory)

// In het geval als we van hoog naar laag willen sorteren:
// inventory.sort((a, b) => b.price - a.price);
// console.log(inventory)


// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

// DONE Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

//Variant 1 (het is een herbruikbare functie):
function calculateTotal(soldTvs) {
    let totalSoldTv = 0;
    for (let i = 0; i < soldTvs.length; i++) {

        totalSoldTv += soldTvs[i].sold;
        //totalSoldTvs = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
    }
    return totalSoldTv;
}

const result = calculateTotal(inventory);
console.log(result);


//Déze variant voor eenmallig gebruik (alleen te loggen):
// let totalSoldTvs = 0;
// for (let i = 0; i < inventory.length; i++) {
//     totalSoldTvs += inventory[i].sold;
//   }
// console.log(totalSoldTvs)


// DONE Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//stap 1: <div> toevoegen in html bestand én daarna aanroepen met het geven id="tv"
//stap 2: moet op de browser komen
//stap 3: gebruik css om een kleur te geven (aan class="tvColor")

const element = document.getElementById("tv"); //eerst in html aanmaken div met id ///zo koppel je html bestand met javascript bestand main.js
const elementTitel = document.createElement("h3"); //h3 bestaat in html document niet tussen div's (regel 10 t/m 12).
elementTitel.setAttribute("class", "tvColor"); // aan elementTitle geven we class met value (net zoals bij een HTML doc zouden doen)
elementTitel.textContent = `${result}`; //op zo'n manier maken we van string een getal. Als we een string zouden willen zien, dan zou het zo uit zien: `result`. In ons geval de "result" is een getal en daarom schrijven we `${result}`
element.appendChild(elementTitel);


// DONE Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

function purchasedTvsQty(purchasedTvs) {
    let purchasedTv = 0;
    for (let i = 0; i < purchasedTvs.length; i++) {
        purchasedTv += purchasedTvs[i].originalStock;
    }
    return purchasedTv;
}

const resultPurchasedTv = purchasedTvsQty(inventory);
console.log(resultPurchasedTv);


// DONE Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const element1 = document.getElementById("purchasedTV");
const element1Titel = document.createElement("h2");
element1Titel.setAttribute("class", "tvColor1");
element1Titel.textContent = `${resultPurchasedTv}`;
element1.appendChild(element1Titel);

// DONE Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// //AP.Stap 1: Eerst bepalen een aantal tv's, die nog moeten worden verkocht

function stillToSellTVsQty(leftOverToSellTvs) {
    let leftOverToSellTv = 0;
    //var.3.
    // let totalOriginalStock = 0;
    // let totalSoldQty = 0;

    for (let i = 0; i < leftOverToSellTvs.length; i++) {
        // var.1.
        leftOverToSellTv += leftOverToSellTvs[i].originalStock - leftOverToSellTvs[i].sold;

        // var.2.
        // leftOverToSellTv = leftOverToSellTv + (leftOverToSellTvs[i].originalStock - leftOverToSellTvs[i].sold);

        // var.3.
        // totalOriginalStock += leftOverToSellTvs[i].originalStock;
        // totalSoldQty += leftOverToSellTvs[i].sold;
        // leftOverToSellTv = totalOriginalStock - totalSoldQty; // kan ook buiten de loop geplaatst worden

        //DEZE IS NIET JUIST => NIET GEBRUIKEN!
        // leftOverToSellTv = (leftOverToSellTv + leftOverToSellTvs[i].originalStock) - (leftOverToSellTv + leftOverToSellTvs[i].sold);
    }
    return leftOverToSellTv;
}

const resultToSellQty = stillToSellTVsQty(inventory)
console.log(resultToSellQty)

// AP.Stap 2: Geven rode kleur aan de resultaat uit Stap 1

const element2 = document.getElementById("leftOverToSellTv");
const element2Titel = document.createElement("h3");
element2Titel.setAttribute("class", "tvColor2");
element2Titel.textContent = `${resultToSellQty}`;
element2.appendChild(element2Titel);


// DONE Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om  alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

//Dit is een voorbeeld zonder(!) map methode:
// let brands = [];
//
// for (let i=0; i<inventory.length; i++) {
//   console.log(inventory[i].brand);
// }

//Voorbeeld met push():
// let brands = [];
//
// for (let i=0; i<inventory.length; i++) {
//   brands.push(inventory[i].brand);
// }
// console.log(brands);

//En nu gebruiken zoals in het Opdracht 3a was gevraagd:
const tvBrands = inventory.map((inventoryBrand) => {
    return inventoryBrand.brand;
});

console.log(tvBrands);

// Variant 2 (met map methode).
// let tvBrands = inventory.map(a => a.brand);
// console.log(result1)

// Variant 3 (met map methode).
// let tvBrands = inventory.map(({brand}) => brand)
// console.log(result3)

// ? Opdracht 4b: Schrijf de code uit 4a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

function tvBrandNames(input, field) {
    let brand = [];
    for (let i = 0; i < input.length; i++) {
        brand.push(input[i][field]);
    }
    return brand
}

const resultTvBrands = tvBrandNames(inventory, "brand");
console.log(resultTvBrands);


//Opdracht 5 - Functies
//Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

//    Philips 43PUS6504/12 - 4K TV
//€379,-
//    43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

//NIKKEI NH3216SMART - HD smart TV
//€159,-
//    32 inch (81 cm)



// DONE Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

// create function for inventory (tv) and properties (fields)
function infoAboutTv(tv, fields) {
    // create new array, which we want to see (for values of properties)
    let arrValues = [];
    // to loop through array to search required properties (values))
    fields.forEach(field => {
    //to add to a new Array arrValues the properties (values) we want to see. Just add a new item to the end of new array.
        arrValues.push(tv[field]);
            })
    return '   ' + arrValues.join(' ');
}
//save the result in cost (actually right here we can specify with adding index nr to current array inventory, which TV we want to see with all the values of properstie (inventory[0])
const resultTvBrand = infoAboutTv(inventory[0], ["brand", "type", "name"]);
console.log(resultTvBrand);



// DONE Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

// Variant 1.
function priceTv(tv, fields) {
    let arrPrices = [];
    fields.forEach(field => {
        arrPrices.push(tv[field]);
        })
    return "€"+arrPrices.join()+",-";
}

const resultTvPrice = priceTv(inventory[0], ["price"]);
console.log(resultTvPrice);

//Variant 2.
// const priceOfTelevisions = inventory.map((priceOfTelevision) => {
//   return "€" + priceOfTelevision.price + ",-"
// })
// console.log (priceOfTelevisions[0]);





// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

//Voorbeeld resultaat:
//  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)



function tvSizes(arrInput){
let output = ""

    for (let i = 0; i < arrInput.length; i++) {
        const tvSizeInInch = arrInput[i];
        const tvSizeInCm = tvSizeInInch * 2.54;

        output = output + `${tvSizeInInch} inch ${tvSizeInCm} cm`

    }
    return output;
}


console.log(tvSizes(inventory[0].availableSizes))
// console.log(tvSizes(inventory[1].availableSizes))
// console.log(tvSizes(inventory[2].availableSizes))
// console.log(tvSizes(inventory[3].availableSizes))
// console.log(tvSizes(inventory[4].availableSizes))
// console.log(tvSizes(inventory[5].availableSizes))
// console.log(tvSizes(inventory[6].availableSizes))
// console.log(tvSizes(inventory[7].availableSizes))

// function tvSizes(arrInput) { //hiermee is de array bedoeld vanuit de availableSizesarray waardes =inventory[]
//     let tvSizeInInch = arrInput //aanroepen van de waarde uit de availableSizes array. Is dat een juiste manier?
//     let tvSizeInCm = tvSizeInInch * 2.54;
//     if (arrInput.length === 1 || arrInput.lastIndex) { //als de lengte van availablesizes[] is gelijk aan 1 OF is het laast Index van availablesize[], dan consol.log a string (zie onder)
//
//         return tvSizeInInch + " inch " + "(" + tvSizeInCm + " cm)" //consol.log of return?
//     } else if (arrInput.length > 1 && !== arrInput.lastIndex){ //als de lengte van availableSizes[] is meer dan 1, maar niet gelijk aan last Index van availableSizes[], dan consol.log a string (zie onder)
//         return tvSizeInInch + " inch " + "(" + tvSizeInCm + " cm)" + " | "
//     }
//
// }
// console.log(tvSizes(inventory.availableSizes))



// Opdracht 5d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
for (let i = 0; i < inventory.length; i++) {
    console.log(infoAboutTv(inventory,i));
    console.log(priceTv(inventory,i));
    console.log(tvSizes(inventory,i));
}


// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!