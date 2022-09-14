// Atkomentinti po vieną, kad veiktų

// document.body.innerHTML = "<h3>Labas</h3>" // Same as writing <h1>Hello</h1> in HTML doc

// document.body.textContent = "Sveiki" // Tačiau textContent naudojamas dažniau, nei the above

// document.getElementById("title") // getElementById; grąžina reference į kažkokį elementą (kaip adresą)

alert(document.getElementById("title").textContent); // Paalertins, koks yra elemento content ('ten, kur gyvena tekstas, pasakyk, koks kontentas')

document.getElementById("title").textContent = "Bye"; // Perrašom elemento content

document.getElementById("title").innerHTML = "Bye <span style ='color:red'>Yes</span>"; // Pakeičiam textContent į innerHTML ir prirašom stilių

document.getElementsByClassName("text")[3]; // Without [3] would return an array, t.y. visus elementus su klase text. Pasirinkti konkretų, į laužtinius skliaustus įrašome skaičių.

document.getElementsByClassName("text")[0].textContent = "Bye"; // Keičiame pirmo elemento tekstą

document.querySelector("p:nth-child(2)").textContent = "Changed"; // Grąžina pirmą reikšmę pagal kriterijų kabutėse

document.querySelectorAll("p") // Grąžina visas reikšmes