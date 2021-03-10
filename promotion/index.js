alert('악용하지 마세요');
let url = prompt("작품링크를 입력해주세요");
var time = prompt("홍보를 돌릴 주기를 입력해주세요(1당 10분)");
var settime = time * 600000
alert('simonj의 홍보 프로그램을 사용해주셔서 감사합니다.')
function start() {
	$.ajax({url:"/api/discuss/",type:"POST",dataType:"json",data:{content:url,title:"홍보홍보!",groupNotice:false,images:[],category:"free"}});
	console.log('홍보글작성!');
}
start()
setInterval(start, (settime))
