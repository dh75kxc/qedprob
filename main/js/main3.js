const receivedData = location.href.split('?')[1];
const data1 = receivedData.split(',')[0];
const data2 = receivedData.split(',')[1];
const data3 = receivedData.split(',')[2];

if (data3 == 32384029384) {
    document.querySelector('#res').innerText = "정답입니다!!";
    document.querySelector('#outer b').setAttribute('style', 'color: hotpink;');
    if (data1 < 3) {
        if (data2 == 1) {
            document.querySelector('#chips').innerText = 3;
        } else if (data2 == 2) {
            document.querySelector('#chips').innerText = 5;
        } else if (data2 == 3) {
            document.querySelector('#chips').innerText = 10;
        } else {
            document.querySelector('#chips').innerText = 2;
        }
    } else {
        if (data2 == 1) {
            document.querySelector('#chips').innerText = 4;
        } else if (data2 == 2) {
            document.querySelector('#chips').innerText = 8;
        } else if (data2 == 3) {
            document.querySelector('#chips').innerText = 15;
        } else {
            document.querySelector('#chips').innerText = 3;
        }
    }
} else if (data3 == 20110523234) {
    document.querySelector('#res').innerText = "오답입니다.";
    document.querySelector('#outer b').setAttribute('style', 'color: darkviolet;');
    document.querySelector('#chips').innerText = "0";
    setTimeout(function() {
        location.href = `../index.html`;
    }, 5000);
} else {
    document.querySelector('#res').innerText = "더러운 해커자식";
}

let coin=0;

if (data1 == 1) {
    document.querySelector('#subject').innerText = "수학(상)";
} else if (data1 == 2) {
    document.querySelector('#subject').innerText = "수학(하)";
} else if (data1 == 3) {
    document.querySelector('#subject').innerText = "수학 I";
} else if (data1 == 4) {
    document.querySelector('#subject').innerText = "수학 II";
} else if (data1 == 5) {
    document.querySelector('#subject').innerText = "미적분";
} else {
    document.querySelector('#subject').innerText = "중등수학";
}

if (data2 == 1) {
    document.querySelector('#difficulty').innerText = "하";
} else if (data2 == 2) {
    document.querySelector('#difficulty').innerText = "중";
} else if (data2 == 3) {
    document.querySelector('#difficulty').innerText = "상";
} else {
    document.querySelector('#difficulty').innerText = "초보";
}
document.querySelector('#').innerText = m;

function returnToHome() {
    alert("카운터가 당신의 결과를 확인하지 못한 채로 이 창이 닫힌다면 얻게 되는 칩을 얻지 못할 수 있습니다.");
    setTimeout(function() {
        location.href = `../index.html`;
    }, 200);
}
