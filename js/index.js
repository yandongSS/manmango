

$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:9090/api/getmoneyctrl?pageid=0",
		async:true,
		
		dataType:'json',
		success:function(data){
			console.log(data)
			var html=''
			for (i=0;i<data.result.length;i++) {
				html+=`<li><a href="zhekou.html?num=${data.result[i].productId}">
				<div class="pic"><img src="${data.result[i].productImgSm.split('=')[3]}"></div>
				<div class="right">
				<p class="name">${data.result[i].productName}</p>
				<span style="color:red;">${data.result[i].productPinkage}</span>
				<p>${data.result[i].productFrom}${data.result[i].productTime}</p>
				</div>
				</a>
				</li>`
			}
			console.log(html)
			$(".main").find("ul").html(html)
		}
	})
	
})