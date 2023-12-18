const receivedData = location.href.split('?')[1];

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