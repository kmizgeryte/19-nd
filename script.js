// Duomenis pasiimsime iš: https://polar-chartreuse-silverfish.glitch.me/

// 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4.Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const checkbox = document.getElementById("checkbox")
const ieskok = document.getElementById("ieskok")

const API_URL = 'https://polar-chartreuse-silverfish.glitch.me'
const polar = document.querySelector(".polar"); // Naudokite .polar vietoje #polar, jei tai yra klasė, o ne ID

const loadData = () => {
    return fetch(API_URL).then(resp => resp.json());
}

const createTable = () => {
    const table = document.createElement("table");
    table.innerHTML =
        `
        <tr>
            <th>ID</th>
            <th>foto</th>
            <th>Name</th>
            <th>City</th>
            <th>Favor color</th>
        </tr>
        `;
    return table;
}

const printData = (data) => {
    const table = createTable();

    data.map(x => {
        const row = document.createElement("tr");
        row.innerHTML =
            `
            
            <td>${x.id}</td>
            <td>
            <img src="${x.image}" alt="" class="image">
            </td>
            <td>${x.name}</td>
            <td>${x.city}</td>
            <td>${x.fav_color}</td>
            `;
        
        table.appendChild(row);
    });

    polar.appendChild(table);
    console.log(data);
}

loadData()
    .then(data => {
        console.log("Data loaded:", data);
        printData(data);
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });


