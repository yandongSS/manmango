$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:9090/api/getbaicaijiatitle",
		async:true,
		success:function(data){
			console.log(data)
			var html=""
			for (i=0;i<data.result.length;i++) {
				html+=`
				<li><a href="">${data.result[i].title}</a></li>
				`
			}
			$('.nav').find("ul").html(html)
		}
	})
	$.ajax({
		type:"get",
		url:"http://localhost:9090/api/getbaicaijiaproduct?titleid=1",
		async:true,
		success:function(data){
			console.log(data)
			var html=""
			for (i=0;i<data.result.length;i++) {
				html+=`
				<li>
				<div class="baicai-left">
					${data.result[i].productImg}
				</div>
				<div class="baicai-right">
					<p>${data.result[i].productName}</p>
					<p>${data.result[i].productPrice}</p>
					<p>${data.result[i].productCouponRemain}</p>
					<p>${data.result[i].productCoupon}${data.result[i].productHref}</p>
				</div>
			</li>
				`
			}
			$('.main').find("ul").html(html)
		}
//		根据tab切换,在tab绑定的点击事件中发送相应的ajax请求,返回相应数据渲染页面。
	})
})