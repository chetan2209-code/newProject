
// const button = document.getElementById("likeBtn");
// const likeCount = document.getElementById("likeCount");


// let count = 0;
// let liked = false;

// button.addEventListener("click", function() {

//     if (liked === false) {
//         count = count + 1;
//         button.classList.add("liked"); 
//         liked = true;
//     } else {
//         count = count - 1;
//         button.classList.remove("liked");
//         liked = false;
//     }
//     likeCount.innerText = count;
// });

// DOM Elements ko select karna
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likeCountLabel = document.getElementById("likeCount");
const dislikeCountLabel = document.getElementById("dislikeCount");

// LocalStorage se purana data nikalna (agar pehle se save hai toh, nahi toh 0 ya false)
let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
let dislikeCount = parseInt(localStorage.getItem("dislikeCount")) || 0;
let isLiked = localStorage.getItem("isLiked") === "true";
let isDisliked = localStorage.getItem("isDisliked") === "true";

// UI ko initial load par update karna (Refresh ke baad jaisa tha waisa dikhane ke liye)
function updateUI() {
    likeCountLabel.innerText = likeCount;
    dislikeCountLabel.innerText = dislikeCount;

    if (isLiked) {
        likeBtn.classList.add("liked");
    } else {
        likeBtn.classList.remove("liked");
    }

    if (isDisliked) {
        dislikeBtn.classList.add("disliked");
    } else {
        dislikeBtn.classList.remove("disliked");
    }
}

// LocalStorage me naya data save karne ka function
function saveData() {
    localStorage.setItem("likeCount", likeCount);
    localStorage.setItem("dislikeCount", dislikeCount);
    localStorage.setItem("isLiked", isLiked);
    localStorage.setItem("isDisliked", isDisliked);
}

// --- LIKE BUTTON CLICK LOGIC ---
likeBtn.addEventListener("click", function() {
    if (!isLiked) {
        likeCount++;
        isLiked = true;
        
        // Agar pehle se dislike tha, toh use hatao
        if (isDisliked) {
            dislikeCount--;
            isDisliked = false;
        }
    } else {
        // Dobara click karne par unlike ho jaye
        likeCount--;
        isLiked = false;
    }
    
    saveData();
    updateUI();
});

// --- DISLIKE BUTTON CLICK LOGIC ---
dislikeBtn.addEventListener("click", function() {
    if (!isDisliked) {
        dislikeCount++;
        isDisliked = true;
        
        // Agar pehle se like tha, toh use hatao
        if (isLiked) {
            likeCount--;
            isLiked = false;
        }
    } else {
        // Dobara click karne par undislike ho jaye
        dislikeCount--;
        isDisliked = false;
    }
    
    saveData();
    updateUI();
});

// Page load hote hi UI setup karo
updateUI();