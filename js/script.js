// Question 1

function cat(complain){
    console.log(complain);
}

cat("Meow!");

//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className ="subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");


for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color ="red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p> New paragraph</p>`;
resultsContainer.style.backgroundColor ="yellow";

// QUestion 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catsArray(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catsArray(cats);

// Question 8

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        
        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        } 

        html += `<div>
            <h5> ${cats[i].name}</h5>
            <p> ${catAge}
            </div>`;
    }

    return html;

}

const catsHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = catsHtml;


// Oppacity transition

// const tex1 = document.querySelector(".text1")
// const text2 = document.querySelector(".text2")
// const displayButton = document.querySelector(".display")

// function displayButtonFunction() {
//     text2.style.opacity = "100%";
// }

// displayButton.addEventListener("click", displayButtonFunction);
