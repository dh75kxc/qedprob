const receivedData = location.href.split('?')[1];

let image = [[[1,2],[1,2,3,4],[1,2,3,4],[1,2]],
            [[1,2,3],[1,2,3,4,5,6,7],[1,2,3,4,5,6],[1,2,3,4]],
            [[1,2],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4]],
            [[1,2,3,4],[1,2,3,4],[1,2,3,4,5],[1,2,3]],
            [[1,2,3,4],[1,2,3,4],[1,2,3],[1,2]],
            [[],[],[],[]]];

document.querySelector('#probnum1').innerText = image[receivedData][0].length+" Problems";
document.querySelector('#probnum2').innerText = image[receivedData][1].length+" Problems";
document.querySelector('#probnum3').innerText = image[receivedData][2].length+" Problems";
document.querySelector('#probnum4').innerText = image[receivedData][3].length+" Problems";

if (receivedData < 3) {
    document.querySelector('#price1').innerText = "2 coins";
    document.querySelector('#price2').innerText = "3 coins";
    document.querySelector('#price3').innerText = "5 coins";
    document.querySelector('#price4').innerText = "10 coins";
} else {
    document.querySelector('#price1').innerText = "3 coins";
    document.querySelector('#price2').innerText = "4 coins";
    document.querySelector('#price3').innerText = "8 coins";
    document.querySelector('#price4').innerText = "15 coins";
}
document.getElementById('test_btn1').addEventListener('click', () => {
    location.href = `main2.html?${receivedData},${0}`;
});
document.getElementById('test_btn2').addEventListener('click', () => {
    location.href = `main2.html?${receivedData},${1}`;
});
document.getElementById('test_btn3').addEventListener('click', () => {
    location.href = `main2.html?${receivedData},${2}`;
});
document.getElementById('test_btn4').addEventListener('click', () => {
    location.href = `main2.html?${receivedData},${3}`;
});