function handle(){
    alert('hi');
    event.preventDefault();
}
var bigImg=document.querySelector('#big-img');
var thum=document.querySelectorAll('.hj a');
for(var i=0;i<thum.length;i++){
    thum[i].onclick=function(){
        event.preventDefault();
        
        bigImg.src=this.href;
        console.log('hi');
    }
}