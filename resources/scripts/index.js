console.log("hello");
const cards = document.querySelector(".container");
const info = [
    {
        id: 1,
        title: "Perfected Strategies for you",
        dis: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image: "../resources/assets/images/task1.png",
    },
    {
        id: 2,
        title: "Perfected Strategies for you",
        dis: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image: "../resources/assets/images/task1.png",
    },
    {
        id: 3,
        title: "Perfected Strategies for you",
        dis: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image:"../resources/assets/images/task1.png",
    },
];
info.forEach(
    (data) =>
        (cards.innerHTML += `<div class="card">
                <div class="images">
                    <div class="image">
                    <img src=${data.image}>
                    

                    </div>
                    <div class="image-logo">
                        <div class="logo"></div>

                    </div>

                </div>
                
                
                <div class="detail">
                    <h2>${data.title}</h2>
                    <p>${data.dis}</p>
                </div>
            </div>`),
);
