document.addEventListener("DOMContentLoaded", function(){
    let leftView = document.querySelector(".left_view_box");
    let scaleBox = document.querySelector(".scale_box");
    let bigImg = document.querySelector(".product_view img");
    let bigBox = document.querySelector(".product_view");
    leftView.addEventListener("mousemove", function(e){
        e = e || window.event;
        
        let scaleX = e.offsetX-100;
        let scaleY = e.offsetY-100;
        scaleX = scaleX<0?0:scaleX;
        scaleY = scaleY<0?0:scaleY;
    
        let maxX = this.offsetWidth-200;
        let maxY = this.offsetHeight-200;
        scaleX = scaleX>maxX?maxX:scaleX;
        scaleY = scaleY>maxY?maxY:scaleY;
        
        scaleBox.style.left = scaleX+"px";
        scaleBox.style.top = scaleY+"px";
        
        let xPercent = (bigImg.offsetWidth - bigBox.offsetWidth) / maxX;
        let yPercent = (bigImg.offsetHeight - bigBox.offsetHeight) / maxY;
        bigImg.style.left = -scaleX*xPercent+"px";
        bigImg.style.top = -scaleY*yPercent+"px";
    }, false);
}, false);