const receivedData = location.href.split('?')[1];
const data1 = receivedData.split(',')[0];
const data2 = receivedData.split(',')[1];

window.onload = function () {
    if (window.Notification) {
        Notification.requestPermission();
    }
}

function notify() {
    if (Notification.permission !== 'granted') {
        alert('notification is disabled');
    }
    else {
        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'Notification text',
        });

        notification.onclick = function () {
            window.open('http://google.com');
        };
    }
}

let image = [[[],['001','002','003','004','005'],['001','002','003'],['001']],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]]
        [[],[],[],[]]];

let answ = [[[],[121,180,,,],[8,400,],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]]
        [[],[],[],[]]];

const prob = image[data1][data2];
let randnum = Math.floor(Math.random() * prob.length);
const todayProblem = prob[randnum];
document.querySelector('.problem img').setAttribute('src', 'assets/'+data1+'/'+data2+'/'+todayProblem+'.png');

let ans = answ[data1][data2][randnum];
let temp = 1234567890;

let Byeongsin = 300;
function msg_time() {
    m = Math.floor(Byeongsin / 60).toString().padStart(2,'0') + ":" + (Byeongsin % 60).toString().padStart(2,'0');
    document.querySelector('#timer').innerText = m;
    Byeongsin--;
    if (Byeongsin < 0) {	
        clearInterval(tid);
        alert("시간이 종료되었습니다.");
    }
}
window.onload = function TimerStart(){tid=setInterval('msg_time()',1000)};

function inputValueChange(){
    var inputValue = document.getElementById('number').value;
    temp=inputValue;
    console.log(temp);
    document.getElementById('number').value = null;
    if (ans==temp) {
        location.href = `main3.html?${32384029384}`;
    } else {
        location.href = `main3.html?${20110523234}`;
    }
}

function NotReload(){
    if( (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116) ) {
        event.keyCode = 0;
        event.cancelBubble = true;
        event.returnValue = false;
    } 
}
document.onkeydown = NotReload;

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });