function ok(){
	var id = $("#id").val()
	$.ajax({
		url: '/data',
		type: 'POST',
		data: {id}
	})
	.done(function(data) {
		console.log("success");
		console.log(data)
	})
	.fail(function() {
		console.log("error");
	})
}