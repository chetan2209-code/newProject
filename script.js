const button = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");


let count = 0;
let liked = false;

button.addEventListener("click", function() {
    if (liked === false) {
        count = count + 1;
        button.classList.add("liked"); 
        liked = true;
    } else {
        count = count - 1;
        button.classList.remove("liked");
        liked = false;
    }
    likeCount.innerText = count;
});