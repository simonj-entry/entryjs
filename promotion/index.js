function start() {
	$.ajax({url:"/api/discuss/",type:"POST",dataType:"json",data:{content:promotion,title:"홍보홍보!",groupNotice:false,images:[],category:"free"}});
}
var macrotime = 0;
var setmacrotime = 0;
let promotion = prompt("작품링크를 입력해주세요");
promotiontime = prompt("홍보 사용 시간 주기 입력(분)");
setpromotiontime = promotiontime * 60000;
if (setpromotiontime > 1){
	alert('홍보를 시작합니다.');
	alert('simonj의 홍보프로그램을 사용해주셔서 감사합니다.');
	start()
	setInterval(start, setpromotiontme);
}
