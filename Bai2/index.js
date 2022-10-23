//INPUT: nhập vào đối tượng người dùng
//PROCESS:(pseudo code)
    // kiểm ra ai đang dùng bằng cách
    // if(user === B){
    //     console.log("Con chào Bố !!!");
    // }
    // else if(user === M){
    //     console.log("Con chào Mẹ !!!");
    // }
    // else if(user === A){
    //     console.log("Em chào Anh !!!");
    // }
    // else{
    //     console.log(" chào Em !!!");
    // }
//OUTput: xuất câu xin chào
var B = "Bố";
var M = "Mẹ";
var A = "Anh trai";
var E = "Em gái";
var user = B;
if(user === B){
    console.log("Con chào Bố !!!");
}
else if(user === M){
    console.log("Con chào Mẹ !!!");
}
else if(user === A){
    console.log("Em chào Anh !!!");
}
else{
    console.log(" chào Em !!!");
}