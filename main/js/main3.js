const receivedData = location.href.split('?')[1];
if (receivedData == 32384029384) {
    document.querySelector('#res').innerText = "정답입니다!!";
    document.querySelector('#outer b').setAttribute('style', 'color: hotpink;');
} else if (receivedData == 20110523234) {
    document.querySelector('#res').innerText = "오답입니다.";
    document.querySelector('#outer b').setAttribute('style', 'color: darkviolet;');
} else {
    document.querySelector('#res').innerText = "더러운 해커자식";
}
setTimeout(function() {
    location.href = `../index.html`;
}, 8000);