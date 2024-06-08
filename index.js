document.getElementById('btnLike1').addEventListener('click', function() {
    let count = document.getElementById('countLike1');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnDislike1').addEventListener('click', function() {
    let count = document.getElementById('countDislike1');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnLike2').addEventListener('click', function() {
    let count = document.getElementById('countLike2');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnDislike2').addEventListener('click', function() {
    let count = document.getElementById('countDislike2');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('submit').addEventListener('click', function() {
    let comment = document.getElementById('comment').value;
    if (comment) {
        let commentBox = document.getElementById('commentbox');
        commentBox.value += comment + "\n";
        document.getElementById('comment').value = '';
    }
});
