/*
 传参
    1. paginatorBox 分页器 ul 对象 ---- html 必须是 ul，li 结构
        paginatorBox.curPage
        paginatorBox.nextBtn.can_click
        paginatorBox.prevBtn.can_click
    2. warStr 切页方向 ---- "prev" / "next"
 */
function seeSwitch(paginatorBox, newPage){
    if(newPage>=9){
        removeClass(paginatorBox.nextBtn, "can_click");
        paginatorBox.nextBtn.can_click = false;
    }else{
        addClass(paginatorBox.nextBtn, "can_click");
        paginatorBox.nextBtn.can_click = true;
    }
    
    if(newPage<=2){
        removeClass(paginatorBox.prevBtn, "can_click");
        paginatorBox.prevBtn.can_click = false;
    }else{
        addClass(paginatorBox.prevBtn, "can_click");
        paginatorBox.prevBtn.can_click = true;
    }
}
function switchPage(paginatorBox, warStr){
    if( (warStr === "next" && !paginatorBox.nextBtn.can_click) ||
        (warStr === "prev" && !paginatorBox.prevBtn.can_click)
    ){
        return;
    }
    
    oldPage = paginatorBox.curPage;
    newPage = oldPage + ((warStr==="next")?1:-1);
    paginatorBox.curPage = newPage;
    
    removeClass(
        document.querySelector(".paginator_box>li:nth-child("+oldPage+")"),
        "cur_page"
    );
    addClass(
        document.querySelector(".paginator_box>li:nth-child("+newPage+")"),
        "cur_page"
    );
    
    seeSwitch(paginatorBox, newPage)
}

window.addEventListener('DOMContentLoaded', function(){
    let nextBtn = document.querySelector(".next_page");
    let prevBtn = document.querySelector(".prev_page");
    let paginatorBox = document.querySelector(".paginator_box");
    let maxPage = document.querySelector(".paginator_box>li:last-child").previousElementSibling.getElementsByTagName("a")[0].innerHTML;
    
    paginatorBox.curPage = 2;
    
    paginatorBox.nextBtn = nextBtn;
    paginatorBox.nextBtn.can_click = true;
    
    paginatorBox.prevBtn = prevBtn;
    paginatorBox.prevBtn.can_click = false;
    
    nextBtn.addEventListener("click", function () {
        switchPage(paginatorBox, "next")
    }, false);
    
    prevBtn.addEventListener("click", function () {
        switchPage(paginatorBox, "prev")
    }, false);
    
    paginatorBox.addEventListener("click", function(e){
        e = e || window.event;
        let oldELe = document.querySelector(".paginator_box>li:nth-child("+paginatorBox.curPage+")");
        let newEle = e.target;
        let newPage = +newEle.innerHTML;
        newEle = newEle.parentNode;
        
        if(newPage>=1 && newPage<=maxPage && (newPage+1) !== paginatorBox.curPage){
            newPage += 1;
            paginatorBox.curPage = newPage;
            removeClass(
                oldELe,
                "cur_page"
            );
            addClass(
                newEle,
                "cur_page"
            );
    
            seeSwitch(paginatorBox, newPage)
        }
    }, false)
}, false);
