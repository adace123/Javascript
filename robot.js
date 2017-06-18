//button, robot image and both input field elements are saved in variables
var button=document.getElementById('btn');
var robot=document.getElementById('robot');
var speed=document.getElementById('speed');
var amount=document.getElementById('amount');
//anim stores the setTimeout call to be used in the move function. 
var anim;
var count=0;
/*When the button is clicked, count is incremented by 1. If count is odd, the button's text is 'Stop' and the move function is called. 
If even, the text is 'Start' and the stop function is called.*/ 
btn.addEventListener('click',function(){
	count++;
	if(count%2!=0){
	this.innerHTML="Stop";
	move();

	}
	else {this.innerHTML="Start";
	stop();
	}
});


/*If the image's left position is less than the width of the screen, the move function increases its left style property by its 
left offset + the amount set by the user (or default 10). The setTimeout function handles repeats this action at a speed specified in the input box.*/
function move() {

	if(parseInt(robot.style.left)<=parseInt(window.innerWidth)){
		robot.style.left=robot.offsetLeft+(parseInt(amount.value)||10)+'px';
		anim=setTimeout(move,speed.value);
 }
 //If the image's left position is greater than the screen width, the position is reset.
	else{
		robot.style.left=(parseInt(robot.style.left)*-.7)+'px';
		robot.style.left=robot.offsetLeft+(parseInt(amount.value)||10)+'px';
		anim=setTimeout(move,speed.value);
}

}
//Cancels move function.
function stop(){
	if(anim)
		clearTimeout(anim);
}