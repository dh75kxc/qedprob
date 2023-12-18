document.getElementById('test_btn1').addEventListener('click', function() {
    console.log("중학 교과과정을 누른거노 게이야?");
});
document.getElementById('test_btn2').addEventListener('click', function() {
    console.log("고등수학 상 교과과정을 누른거노 게이야?");
});
document.getElementById('test_btn3').addEventListener('click', function() {
    console.log("고등수학 하 교과과정을 누른거노 게이야?");
});
document.getElementById('test_btn4').addEventListener('click', function() {
    console.log("수학 1을 누른거노 게이야?");
});
document.getElementById('test_btn5').addEventListener('click', function() {
    console.log("수학 2를 누른거노 게이야?");
});
document.getElementById('test_btn6').addEventListener('click', function() {
    console.log("미적분을 누른거노 게이야?");
});

document.getElementById('test_btn1').addEventListener('click', () => {
  location.href = `main/main.html?${0}`;
});
document.getElementById('test_btn2').addEventListener('click', () => {
    location.href = `main/main.html?${1}`;
  });
  document.getElementById('test_btn3').addEventListener('click', () => {
    location.href = `main/main.html?${2}`;
  });
  document.getElementById('test_btn4').addEventListener('click', () => {
    location.href = `main/main.html?${3}`;
  });
  document.getElementById('test_btn5').addEventListener('click', () => {
    location.href = `main/main.html?${4}`;
  });
  document.getElementById('test_btn6').addEventListener('click', () => {
    location.href = `main/main.html?${5}`;
  });