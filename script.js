const button = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");


let count = 0;
let liked = false;

button.addEventListener("click", function(){
    // count++;
    // likeCount.innerText = count;
    if(liked === false){
        count = count + 1;
        button.style.color = "red";
        liked = true;
    } else{
        count = count - 1;
        button.style.color = "black";
        liked = false;
    }
    likeCount.innerText = count;
});