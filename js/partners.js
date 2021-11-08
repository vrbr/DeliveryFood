const cardsRestaurants = document.querySelector('.cards-restaurants');

const renderItems = (data) => {
    data.forEach(({ image, kitchen, name, price, products, stars, time_of_delivery }) => {
        const a = document.createElement('a');

        a.setAttribute('href', 'restaurant.html');
        a.classList.add('card');
        a.classList.add('card-restaurant');
        a.dataset.products = products;

        a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title">${name}</h3>
                        <span class="card-tag tag">${time_of_delivery} мин</span>
                    </div>
                    <div class="card-info">
                        <div class="rating">
                            ${stars}
                        </div>
                        <div class="price">От ${price}</div>
                        <div class="category">${kitchen}</div>
                    </div>
                </div>
        `

        cardsRestaurants.append(a);
        console.log(a);
    });
}

fetch('./db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })