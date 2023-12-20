const receivedData = location.href.split('?')[1];

let image = [[['001','002'],['001','002','003','004'],['001','002','003','004'],['001','002']],
            [['001','002'],['001','002','003','004','005'],['001','002','003','004','005'],['001']],
            [[],[],[],[]],
            [[],[],[],[]],
            [[],[],[],[]],
            [[],[],[],[]]];

document.querySelector('#probnum1').innerText = image[receivedData][0].length+" Problems";
document.querySelector('#probnum2').innerText = image[receivedData][1].length+" Problems";
document.querySelector('#probnum3').innerText = image[receivedData][2].length+" Problems";
document.querySelector('#probnum4').innerText = image[receivedData][3].length+" Problems";

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