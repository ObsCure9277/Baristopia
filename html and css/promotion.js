var coupon_code= document.getElementById("coupon-code"); 
var coupon_no = document.getElementById("coupon-no");

coupon_code.onclick = function(){
    navigator.clipboard.writeText(coupon_no.innerHTML); 
    coupon_code.innerHTML = "COPIED";
    setTimeout(function(){
        coupon_code.innerHTML= "COPY CODE"
    },3000); 
}