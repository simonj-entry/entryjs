function start() {
	$.ajax({url:"/api/discuss/",type:"POST",dataType:"json",data:{content:promotion,title:"홍보홍보!",groupNotice:false,images:[],category:"free"}});
}
alert('악용하지 마세요');
let url = prompt("작품링크를 입력해주세요");
var time = 0;
var settime = 0;
time = prompt("홍보를 돌릴 주기를 입력해주세요(분)");
