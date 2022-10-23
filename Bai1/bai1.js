// input nhập vào 3 số nguyên: inter1, inter2, inter3
//PROCESS:(pseudo code)
    // lấy từng số nguyên input so sánh với nhau
    // số nào nhỏ cho lên đầu
//OUTPUT: xuất ra số từ nhỏ đến lớn
var inter1 = 10;
var inter2 = 100;
var inter3 = 99;

if (inter1 < inter2 && inter1 < inter3) {
    if (inter2 < inter3) {
        console.log(inter1 + " " + inter2 + " " + inter3);
    }
    else {
        console.log(inter1 + " " + inter3 + " " + inter2);
    }
}
else if (inter2 < inter1 && inter2 < inter3) {
    if (inter1 < inter3) {
        console.log(inter2 + " " + inter1 + " " + inter3);
    }
    else{
        console.log(inter2 + " " + inter3 + " " + inter1);
    }
}
else {
    if (inter1 < inter2) {
        console.log(inter3 + " " + inter1 + " " + inter2);
    }
    else{
        console.log(inter3 + " " + inter2 + " " + inter1);
    }
}