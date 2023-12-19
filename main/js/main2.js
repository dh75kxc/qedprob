const receivedData = location.href.split('?')[1];
const data1 = receivedData.split(',')[0];
const data2 = receivedData.split(',')[1];

let image = [[[],['001','002'],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]]
        [[],[],[],[]]];

let answ = [[[],[121,180],[],[]],
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
        alert("종료");
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
        console.log("정답코드 실행 예정");
    } else {
        location.href = `main3.html?${20110523234}`;
        console.log("오답코드 실행 예정");
    }
}