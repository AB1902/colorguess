function randomcolor(){
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

function gc(num){
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomcolor())
	}

	return arr
}
var color=gc(6)
//picking colors
//function using math.random function 

function pcs(){
	var x=Math.floor(Math.random()*color.length)
	return color[x]
}

var s=document.querySelectorAll(".square")
var pc=pcs();
var cd=document.getElementById("u")
var text=document.getElementById("text")
var h=document.querySelector("h1")
var b=document.getElementById("nc")



cd.textContent=pc;



for(var i=0;i<s.length;i++){


	s[i].style.backgroundColor=color[i];
	s[i].addEventListener("click",function(){
		console.log(pc,this.style.backgroundColor)
		if(this.style.backgroundColor===pc){
			text.textContent="CORRECT"
			h.style.backgroundColor=pc
			h.style.color="white"
			text.style.backgroundColor=pc
			text.style.textColor="white"
			
			for(var i=0;i<s.length;i++){
				s[i].style.backgroundColor=pc
			}
		}
		else{
			this.style.backgroundColor="maroon"
			text.textContent="WRONG...TRY AGAIN"
		}
	})
}

b.addEventListener("click",function(){
	//generate ranom color again
	color=gc(6)
	//choose colors from the array of colors again
	pc=pcs()
	//change the color display
	cd.textContent=pc 
	//assign to the squares
	for(var i=0;i<s.length;i++){
		s[i].style.backgroundColor=color[i];
	}

})