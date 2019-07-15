function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
   var Request = new Object();
   Request = GetRequest();
   
   
$(function(){
	var num=Request
   	console.log(num)
	$.ajax({
		type:"get",
		url:"http://localhost:9090/api/getmoneyctrlproduct",
		dataType:'json',
		data:{
			productid:num.num
		},
		success:function(data){
			var html=''
			html+=`
			<h3 style="font-size: 0.18rem;margin-bottom: 0.1rem;">${data.result[0].productName}</h3>
			<p>${data.result[0].productFrom}-${data.result[0].productTime} ${data.result[0].productTips}</p>
			<p><img src="${data.result[0].productImgSm.split('=')[3]}"/>${data.result[0].productInfo2}</p>
			<div class="img">
				<img src="${data.result[0].productImg2.split('=')[3]}"/>
			</div>
			<div class="comment">${data.result[0].productComment}</div>`
		$(".main").find("ul").html(html)
		}
	})
	
})