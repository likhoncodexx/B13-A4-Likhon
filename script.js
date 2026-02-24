const totalElement = document.getElementById("total");
const interviewElement = document.getElementById("interviewCount");
const rejectedElement = document.getElementById("rejectedCount");


// filter button 
const allButton = document.getElementById("all-filter-btn");
const interviewTabButton = document.getElementById("interview-filter-btn");
const rejectedTabButton = document.getElementById ("rejected-filter-btn");


// card 
const cards = document.querySelectorAll(".card");


// unknown Comment :)
let interviewCount = 0 ;
let rejectedCount = 0;

//  length 
totalElement.innerText = cards.length;
// const amraJanii = totalElement;
// console.log(amraJanii);


// loop with condition 

for (let i=0; i < cards.length;i++ ){
let card = cards[i];

let interviewButton = card.querySelector(".interview-btn");
let rejectedButton = card.querySelector(".rejected-btn");
let deleteButton = card.querySelector(".btn-delete");
let status =   card.querySelector(".status");

// addEventListener
// interview 
interviewButton.addEventListener("click", function(){
if(status.innerText === "Rejected"){
    rejectedCount--;
}
if(status.innerText !== "Interview"){
    interviewCount++;
}
status.innerText="Interview";
status.style.backgroundColor = "#d1fae5"

interviewElement.innerText= interviewCount;

rejectedElement.innerText =rejectedCount;
});

// // rejected 
rejectedButton.addEventListener("click", function (){
    if(status.innerText === "Interview"){
        interviewCount--;
    }
    if(status.innerText !== "Rejected"){
        rejectedCount++;
    }
    
    status.innerText ="Rejected"
    status.style.backgroundColor = "#fee2e2";

    interviewElement.innerText = interviewCount;
    rejectedElement.innerText = rejectedCount;
});
// delete 
deleteButton.addEventListener("click",function (){
card.style.display ="none";
totalElement.innerText = parseInt(totalElement.innerText)-1;


interviewElement.innerText = interviewCount;
rejectedElement.innerText = rejectedCount;

});
// now filter button 
// all 

 allButton.addEventListener("click",function (){
    for(let i =0; i < cards.length;i++){
        cards[i].style.display = "flex";
    }
 });
//  interviewTabButton
interviewTabButton.addEventListener("click",function (){
    for(let i = 0; i < cards.length; i++){

       let status = cards[i].querySelector(".status");

        if(status.innerText === "Interview"){
            cards[i].style.display = "flex"
        }
        else{
            cards[i].style.display = "none";
        }
    }
});

// rejectedTabButton

rejectedTabButton.addEventListener("click", function () {

    for (let i = 0; i < cards.length; i++) {

        let status = cards[i].querySelector(".status");

        if (status.innerText === "Rejected") {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }

});

// background change
function resetFilterButtons() {
    allButton.classList.remove("bg-black", "text-white");
    allButton.classList.add("bg-gray-300", "text-black");

    interviewTabButton.classList.remove("bg-black", "text-white");
    interviewTabButton.classList.add("bg-gray-300", "text-black");

    rejectedTabButton.classList.remove("bg-black", "text-white");
    rejectedTabButton.classList.add("bg-gray-300", "text-black");
}

// all button
allButton.addEventListener("click", function () {
    resetFilterButtons();
    allButton.classList.add("bg-black", "text-white");
    allButton.classList.remove("bg-gray-300", "text-black");
});

// interview button
interviewTabButton.addEventListener("click", function () {
    resetFilterButtons();
    interviewTabButton.classList.add("bg-black", "text-white");
    interviewTabButton.classList.remove("bg-gray-300", "text-black");
});

// rejected button
rejectedTabButton.addEventListener("click", function () {
    resetFilterButtons();
    rejectedTabButton.classList.add("bg-black", "text-white");
    rejectedTabButton.classList.remove("bg-gray-300", "text-black");
});

}