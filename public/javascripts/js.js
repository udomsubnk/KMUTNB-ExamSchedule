$(document).ready(function() {
	$('#button').click(function(event) {
		var id = $("#id").val()
		$.ajax({
			url: '/data',
			type: 'POST',
			data: {id}
		})
		.done(function(data) {
			console.log("success");
			setTimeout(()=>{
				window.location.href = "/file/"+data;
			}, 1000);
		})
		.fail(function() {
			console.log("error");
		})
	});
});