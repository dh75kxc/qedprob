const receivedData = location.href.split('?')[1];
const data1 = receivedData.split(',')[0];
const data2 = receivedData.split(',')[1];


let image = [[['001','002'],['001','002','003','004'],['001','002','003','004'],['001','002']],
            [['001','002','003'],['001','002','003','004','005','006','007','008'],['001','002','003','004','005','006'],['001','002','003','004']],
            [['001','002'],['001','002','003','004','005','006'],['001','002','003','004','005','006'],['001','002','003','004']],
            [['001','002','003','004'],['001','002','003','004'],['001','002','003','004','005'],['001','002','003']],
            [['001','002','003','004'],['001','002','003','004'],['001','002','003'],['001','002','003']],
            [['001'],['001','002','003','004'],['001','002','003','004','005','006'],['001','002','003']]];

let answ = [[[1,12],[121,180,14,100],[8,75,10,28],[520,-400]],
            [[5,7,20],[324,673,1,-2,5,14,13,2],[514,7,2,3,320,6],[68,30,19,4]],
            [[32041,10],[12,164,18,5,120,24],[4,72,308,4100,15,23],[44,7,15,15]],
            [[6,420,532,4],[80,160,4,47],[426,10,84,28,24],[39,220,103]],
            [[1,6,2,3],[6,18,9,16],[34,105,13],[648,33,121]],
            [[3],[21,1,15,3],[20,2,33,8,4,15],[200,300,50]]];

const prob = image[data1][data2];
let randnum = Math.floor(Math.random() * prob.length);
const todayProblem = prob[randnum];
document.querySelector('.problem img').setAttribute('src', 'assets/'+data1+'/'+data2+'/'+todayProblem+'.png');

let ans = answ[data1][data2][randnum];
let temp = 1234567890;

let Byeongsin = 0;
if (data2==1) {
    Byeongsin = 240;
} else if (data2==2) {
    Byeongsin = 360;
} else if (data2==3) {
    Byeongsin = 600;
} else {
    Byeongsin = 120;
}
function msg_time() {
    m = Math.floor(Byeongsin / 60).toString().padStart(2,'0') + ":" + (Byeongsin % 60).toString().padStart(2,'0');
    document.querySelector('#timer').innerText = m;
    Byeongsin--;
    if (Byeongsin < 0) {	
        clearInterval(tid);
        alert("시간이 종료되었습니다.");
        location.href = `../index.html`;
    }
}
window.onload = function TimerStart(){tid=setInterval('msg_time()',1000)};

function inputValueChange(){
    var inputValue = document.getElementById('number').value;
    temp=inputValue;
    alert(temp+"의 값으로 정답을 제출합니다.");
    document.getElementById('number').value = null;
    if (ans==temp) {
        location.href = `main3.html?${data1},${data2},${32384029384}`;
    } else {
        location.href = `main3.html?${data1},${data2},${20110523234}`;
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