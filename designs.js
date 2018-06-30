//select color input
function addColor(){
	let col = $("td");
	col.click(function(){
		const color = $("#colorPicker").val();
		if ($(this).attr("style")){
			$(this).removeAttr("style");
		} 
		else{
			$(this).attr("style","background-color:"+color);
		} 
	}	
);
}
//Select size input
$("#sizePicker").submit(function(evt){
	evt.preventDefault();
	let height = $("#inputHeight").val();
	let weight = $("#inputWeight").val();
	makeGrid(height, weight);
	addColor();

}
);
function makeGrid(row, col) {
	$("tr").remove();
	let  i=1;
	while(i <=row){
		$("#pixelCanvas").append("<tr></tr>");
		i++;
	}
	let j=1;
	while(j<= col){
		$("tr").append("<td></td>");
		//$("tr").filter(':last').append("<td></td>");
		j++;
	}
}