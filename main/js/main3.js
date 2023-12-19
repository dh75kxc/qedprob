const receivedData = location.href.split('?')[1];
if (receivedData == 32384029384) {
    document.querySelector('#res').innerText = "정답입니다!!";
} else if (receivedData == 20110523234) {
    document.querySelector('#res').innerText = "오답입니다.";
} else {
    document.querySelector('#res').innerText = "더러운 해커자식";
}