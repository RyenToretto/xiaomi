/**** 操作 className ****/
function addClass(ele, className){
    var reg = new RegExp("\\b"+className+"\\b");
    if(!reg.test(ele.className)){
        /* 如果元素 ele 不包含 className */
        ele.className += " "+className;
    };
};

function removeClass(ele, className){
    if(ele.className){
        var reg = new RegExp("\\b"+className+"\\b");
        var classes = ele.className;
        ele.className = classes.replace(reg, "");
        if(/^\s*$/g.test(ele.className)){
            ele.removeAttribute("class");
        };
    }else{
        ele.removeAttribute("class");
    }
};

function toggleClass(ele, className){
    if(ele.className){
        var reg = new RegExp("\\b"+className+"\\b");
        if(!reg.test(ele.className)){
            /* 如果元素 ele 不包含 className */
            ele.className += " "+className;
        }else{
            var classes = ele.className;
            ele.className = classes.replace(reg, "");
            
            if(/^\s*$/g.test(ele.className)){
                /* 如果元素的 class 为空, 则清除 class 属性 */
                ele.removeAttribute("class");
            };
        };
    }else{
        /* 如果元素的 className 属性不存在, 则清除 class 属性 */
        ele.removeAttribute("class");
    };
};
