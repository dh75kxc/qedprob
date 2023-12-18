const receivedData = location.href.split('?')[1];
const data1 = receivedData.split(',')[0];
const data2 = receivedData.split(',')[1];

image = [[[],['001','002'],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]],
        [[],[],[],[]]
        [[],[],[],[]]]

const prob = image[data1][data2]
console.log(prob);
const todayProblem = prob[Math.floor(Math.random() * prob.length)];
document.querySelector('.problem img').setAttribute('src', 'assets/'+data1+'/'+data2+'/'+todayProblem+'.png');

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