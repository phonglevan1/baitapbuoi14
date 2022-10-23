// INPUT: 
    // nhập vào 3 số nguyên và 1 biến để đếm số chắn.
//PROCESS:(pseudo code)
    // lấy input chia hết cho 2 thì tăng số đếm lên 1 đơn vị
    //số lẽ = 3 - số chẵn
//OUTput: xuất bao nhiêu số chắn và bao nhiêu số lẻ

var number1 = 2;
var number2 = 6;
var number3 = 1;
var count = 0;
if(number1%2===0){
    count++;
    if(number2%2===0){
        count++;
        if(number3%2===0){
            count++;
        }
        else{}
    }
    else{
        if(number3%2===0){
            count++;
        }
    }
    console.log("có " + count + " số chẵn");
    console.log("và " + (3-count) +" số lẻ");
}
else{
    if(number2%2===0){
        count++;
        if(number3%2===0){
            count++;
        }
        else{}
    }
    else{
        if(number3%2===0){
            count++;
        }
    }
    console.log("có " + count + " số chẵn");
    console.log("và " + (3-count) +" số lẻ");
}


