alert('악용하지마세요');
var time = prompt("메크로를 돌릴 시간을 입력해주세요(초)");
var settime = time * 1000;
alert('simonj의 메크로 프로그램을 사용해주셔서 감사합니다.');
function start() {
$('.editDescriptionBtn').trigger('click')
$('.editConfirmBtn').trigger('click')
console.log('메크로 성공!')
}
start()
setInterval(start, (settime))
