let buddies = [
    {id: 1, name: "Allie", age: 8, breed: "Labrador", fee: 12.99, location: "Hamilton, ON", image: "img/allie.jpg"},
    {id: 2, name: "Charlie", age: 6, breed: "Border Collie", fee: 8.99, location: "Windsor, ON", image: "img/charlie.jpg"},
    {id: 3, name: "Frank", age: 3, breed: "Pug", fee: 17.99, location: "Hamilton, ON", image: "img/frank.jpg"},
    {id: 4, name: "IPA", age: 4, breed: "English Bulldog", fee: 29.99, location: "Toronto, ON", image: "img/ipa.jpg"},
    {id: 5, name: "Layla", age: 7, breed: "Siberian Husky", fee: 14.99, location: "Scarborough, ON", image: "img/layla.jpg"},
    {id: 6, name: "Luna", age: 3, breed: "Rotweiller", fee: 12.99, location: "Toronto, ON", image: "img/luna.jpg"},
    {id: 7, name: "Maggie", age: 5, breed: "Corgi", fee: 4.99, location: "Newark, ON", image: "img/maggie.jpg"},
    {id: 8, name: "Rufus", age: 9, breed: "German Shepherd", fee: 32.99, location: "St. Catharines, ON", image: "img/rufus.jpg"},
    {id: 9, name: "Sophie", age: 4, breed: "German Spitz", fee: 11.99, location: "Toronto, ON", image: "img/sophie.jpg"},
];

let cart = [];

function renderBuddies() {
    let buddieGrid = document.querySelector(".buddie-grid");
    buddieGrid.innerHTML = "";
    buddies.forEach((buddie) => {
        let buddieDiv = document.createElement("div");
        buddieDiv.className = "buddie";
        buddieDiv.innerHTML = `
            <img src="${buddie.image}" alt="${buddie.name}">
            <h3>${buddie.name}</h3>
            <h3>${buddie.age} years</h3>
            <h3>${buddie.breed}</h3>
            <p>Adoption Fee: $${buddie.fee}</p>
            <button>Add to list</button>
        `;
        buddieDiv.querySelector("button").addEventListener("click", () => addtoCart(buddie.id));

        buddieDiv.querySelector("img").addEventListener("click", () => openModal(buddie.image));

        buddieGrid.appendChild(buddieDiv);
    });
}

function addtoCart(buddieid) {
    if (cart.some(b => b.id === buddieid)) {
        alert("This buddy is already in your list!");
        return;
    }

    let buddie = buddies.find((buddie) => buddie.id === buddieid);
    cart.push(buddie);
    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector(".cart table tbody");
    cartTable.innerHTML = "";
    cart.forEach((buddie) => {
        let cartRow = document.createElement("tr");
        cartRow.innerHTML = `
            <td>${buddie.name}</td>
            <td>${buddie.age} years</td>
            <td>${buddie.breed}</td>
            <td>${buddie.location}</td>
            <td>$${buddie.fee}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, buddie) => acc + buddie.fee, 0);
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

function openModal(imageSrc) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-image");
    modalImg.src = imageSrc;
    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("You didn't choose a buddy!");
    } else {
        alert("Soon an agent will contact you!");
        cart = [];
        renderCart();
    }
});

renderBuddies();
