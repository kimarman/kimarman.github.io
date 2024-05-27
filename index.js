document.addEventListener("DOMContentLoaded", function() {
    const buttons = [
        { like: "btnLike1", haha: "btnHaha1", heart: "btnHeart1", likeCount: "countLike1", hahaCount: "countHaha1", heartCount: "countHeart1" },
        { like: "btnLike2", haha: "btnHaha2", heart: "btnHeart2", likeCount: "countLike2", hahaCount: "countHaha2", heartCount: "countHeart2" },
        { like: "btnLike3", haha: "btnHaha3", heart: "btnHeart3", likeCount: "countLike3", hahaCount: "countHaha3", heartCount: "countHeart3" },
        { like: "btnLike4", haha: "btnHaha4", heart: "btnHeart4", likeCount: "countLike4", hahaCount: "countHaha4", heartCount: "countHeart4" },
        { like: "btnLike5", haha: "btnHaha5", heart: "btnHeart5", likeCount: "countLike5", hahaCount: "countHaha5", heartCount: "countHeart5" },
        { like: "btnLike6", haha: "btnHaha6", heart: "btnHeart6", likeCount: "countLike6", hahaCount: "countHaha6", heartCount: "countHeart6" }
    ];

    buttons.forEach(button => {
        const likeButton = document.getElementById(button.like);
        const hahaButton = document.getElementById(button.haha);
        const heartButton = document.getElementById(button.heart);
        const likeOutput = document.getElementById(button.likeCount);
        const hahaOutput = document.getElementById(button.hahaCount);
        const heartOutput
