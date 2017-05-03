function wait(){
	setTimeout(function(){
		$('#goThree').click(function(){
			act('processbar-p3');
		})
	}, 500);
}
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

function course1(){
	$('#courses').append(`
		<tr>
	        <td>0406111</td>
	        <td>Programming II</td>
	        <td><button type="button" class="btn btn-success" onclick="addcourse(1)" id="btn-course1">Add</button></td>
  		</tr>
	`)	
}
function course2(){
	$('#courses').append(`
		<tr>
	        <td>0406222</td>
	        <td>object oriented programming</td>
	        <td><button type="button" class="btn btn-success" onclick="addcourse(2)" id="btn-course2">Add</button></td>
  		</tr>
	`)
}
function course3(){
	$('#courses').append(`
		<tr>
	        <td>0406333</td>
	        <td>design pattern</td>
	        <td><button type="button" class="btn btn-success" onclick="addcourse(3)" id="btn-course3">Add</button></td>
  		</tr>
	`)
}
function addcourse(num){
	$('.show').remove()
	$('#btn-course'+num).toggleClass('btn-success btn-danger');
	if($('#btn-course'+num).text()=='Add'){
		credits+=3;
		$('#btn-course'+num).text('Remove')
		var color = colors[Math.floor(Math.random() * colors.length)];
		if(num==1){
			$('#item14,#item15,#item16').css('background-color',color)
			$('#item-mid-2,#item-mid-3,#item-mid-4').css('background-color',color)
			$('#item-final-26,#item-final-27,#item-final-28').css('background-color',color)
		}
		else if(num==2){
			$('#item30,#item31,#item32').css('background-color',color)
			$('#item-mid-15,#item-mid-16,#item-mid-17').css('background-color',color)
			$('#item-final-15,#item-final-16,#item-final-17').css('background-color',color)
		}
		else if(num==3){
			$('#item54,#item55,#item56').css('background-color',color)
			$('#item-mid-19,#item-mid-20,#item-mid-21').css('background-color',color)
			$('#item-final-68,#item-final-69,#item-final-70').css('background-color',color)
		}

	}
	else {
		credits-=3;
		$('#btn-course'+num).text('Add')
		if(num==1){
			$('#item14,#item15,#item16').css('background-color',"#fff")
			$('#item-mid-2,#item-mid-3,#item-mid-4').css('background-color',"#fff")
			$('#item-final-26,#item-final-27,#item-final-28').css('background-color',"#fff")
		}
		else if(num==2){
			$('#item30,#item31,#item32').css('background-color',"#fff")
			$('#item-mid-15,#item-mid-16,#item-mid-17').css('background-color',"#fff")
			$('#item-final-15,#item-final-16,#item-final-17').css('background-color',"#fff")
		}
		else if(num==3){
			$('#item54,#item55,#item56').css('background-color',"#fff")
			$('#item-mid-19,#item-mid-20,#item-mid-21').css('background-color',"#fff")
			$('#item-final-68,#item-final-69,#item-final-70').css('background-color',"#fff")
		}
	}
	$('#credits').text(credits)
}

var colors = ['yellow','pink','green','purple','orange']

var courses = [
	{
		id: '0406111',
		name: 'Computer Programming I',
		sec:[{
			sec:1,
			time: '9:00-12:00',
			day:'mon'
		},{
			sec:2,
			time:'13:00-16:00',
			day:'tue'
		},{
			sec:3,
			time:'13:00-16:00',
			day:'wed'
		}]
	},
	{
		id:'0406222',
		name:'object oriented programming',
		sec:[{
			sec:1,
			time: '9:00-12:00',
			day:'mon'
		},{
			sec:2,
			time:'13:00-16:00',
			day:'tue'
		},{
			sec:3,
			time:'13:00-16:00',
			day:'wed'
		}]
	},
	{
		id:'0406333',
		name:'design pattern',
		sec:[{
			sec:1,
			time: '9:00-12:00',
			day:'mon'
		},{
			sec:2,
			time:'13:00-16:00',
			day:'tue'
		},{
			sec:3,
			time:'13:00-16:00',
			day:'wed'
		}]
	}
]

var credits = 0;


$(document).ready(function() {

  $(document).on('input','.xxx',function(e){


      $('.show').html('<table class="table table-condensed" style="border: 1px solid black;">'+
                        '<tbody>'+
                          '<tr class="delete">'+'<td onclick="course1()">'+courses[0].name+'</td>'+'</tr>'+
                          '<tr class="delete">'+'<td onclick="course2()">'+courses[1].name+'</td>'+'</tr>'+
                          '<tr class="delete">'+'<td onclick="course3()">'+courses[2].name+'</td>'+'</tr>'+
                        '</tbody>'+
                      '</table>')


  })
  $(document).on('click','.delete',function(){
    $('.add').append('<tr>'+
      '<td>'+'0406111'+'</td>'+
      '<td>'+'Programming II'+'</td>'+
      '<td>'+'<button type="button" class="btn btn-success">'+'Add'+'</button>'+'</td>'+
    '</tr>')
  })

});
function act(s){
	"processbar-p1"==s?
	($(".processbar-p1").removeClass("processbar-unfocus").addClass("processbar-active"),
	$(".processbar-p2").hasClass("processbar-active")&&$(".processbar-p2").removeClass("processbar-active").addClass("processbar-unfocus"),
	$(".processbar-p3").hasClass("processbar-active")&&$(".processbar-p3").removeClass("processbar-active").addClass("processbar-unfocus"))
	
	:"processbar-p2"==s?($(".processbar-p2").removeClass("processbar-unfocus").addClass("processbar-active"),
	$(".processbar-p1").hasClass("processbar-active")&&$(".processbar-p1").removeClass("processbar-active").addClass("processbar-unfocus"),
	$(".processbar-p3").hasClass("processbar-active")&&$(".processbar-p3").removeClass("processbar-active").addClass("processbar-unfocus"))
	
	:($(".processbar-p3").removeClass("processbar-unfocus").addClass("processbar-active"),
	$(".processbar-p1").hasClass("processbar-active")&&$(".processbar-p1").removeClass("processbar-active").addClass("processbar-unfocus"),
	$(".processbar-p2").hasClass("processbar-active")&&$(".processbar-p2").removeClass("processbar-active").addClass("processbar-unfocus"))}	