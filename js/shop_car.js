function singleSelect(allSelect, selectBoxs){
    let result = true;
    let count = 0;
    selectBoxs.forEach(ele=>{
        if(!ele.checked){
            result = ele.checked
        }else{
            count++;
        }
    });
    document.getElementById("user_selected").innerHTML = count;
    allSelect.checked = result
}

window.addEventListener('DOMContentLoaded', function () {
    let allSelect = document.querySelector(".product_all_select>input");
    let products = document.querySelectorAll(".product_checkbox>input");
    let productNums = document.querySelectorAll(".product_num>input");
    
    function countAllMoney(){
        let allMoney = 0;
        document.querySelectorAll(".product_list>li>ul>li").forEach(ele=>{
            allMoney += +ele.querySelector(".product_money>span").innerHTML;
        });
        document.getElementById("product_final_price").innerHTML = allMoney;
    }
    
    function countPrice(){
        this.value = this.value<0?0:this.value;
        let singalPrice = +document.querySelector(".product_list>li>ul>li:nth-child("+this.pIndex+") .product_price>span").innerHTML;
        document.querySelector(".product_list>li>ul>li:nth-child("+this.pIndex+") .product_money>span").innerHTML = this.value*singalPrice;
        countAllMoney();
    }
    
    countAllMoney();
    allSelect.addEventListener("click", function(){
        products.forEach((ele)=>{
            ele.checked = allSelect.checked
        });
        singleSelect(allSelect, products);
    }, false);
    
    products.forEach(ele=>{
        ele.addEventListener("click", function(e){
            e = e || window.event;
            let clickEle = e.target;
            if(clickEle.type === "checkbox"){
                singleSelect(allSelect, products)
            }
        }, false);
    });
    
    productNums.forEach((ele, index)=>{
        ele.pIndex = index+1;
        ele.addEventListener("mouseup", countPrice, false);
        ele.addEventListener("keyup", countPrice, false);
    });
}, false);
