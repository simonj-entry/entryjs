alert('악용하지마세요');
let time = prompt('메크로를 돌릴 시간을 입력해주세요(단위=밀리초(1초=1000밀리초))');
alert('simonj의 메크로 프로그램을 사용해주셔서 감사합니다.');
function start() {
$('.editDescriptionBtn').trigger('click')
$('.editConfirmBtn').trigger('click')
console.log('메크로 성공!')
}
start()
setInterval(start, (time))
