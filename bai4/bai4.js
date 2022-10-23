// INPUT: nhâp vào 3 cạnh
//PROCESS:(pseudo code):
     //tam giác vuông là bình phương 1 tổng bình phương cạnh còn lại
        // công thức:edge1 < edge2 + edge3 && edge2 < edge1 + edge3 && edge3 < edge2 + edge1){
            // if(edge1 * edge1===edge2 * edge2 + edge3 * edge3 || edge2 * edge2 === edge1 * edge1 + edge3 * edge3 || edge3 * edge3 === edge1 * edge1 + edge2 * edge2)
        // tam giác đều là tam giác có 3 cạnh bằng nhau
            //công thức:edge1===edge2&&edge2 ===edge3
        //tam giác cân có 2 cạnh bằng nhau
            //edge1===edge2 || edge1===edge3 || edge2===edge3
//OUTPUT: kết quã là tam giác gì
var edge1 =3;
var edge2 =4;
var edge3 =5;

if(edge1 < edge2 + edge3 && edge2 < edge1 + edge3 && edge3 < edge2 + edge1){
    if(edge1 * edge1===edge2 * edge2 + edge3 * edge3 || edge2 * edge2 === edge1 * edge1 + edge3 * edge3 || edge3 * edge3 === edge1 * edge1 + edge2 * edge2){
        console.log("đây là tam giác vuông");
    }
    else if(edge1===edge2&&edge2 ===edge3){
        console.log("đây là tam giác đều");
    }
    else if(edge1===edge2 || edge1===edge3 || edge2===edge3){
        console.log("đây là tam giác cân");
    }
}
else{
    console.log("3 cạnh này không phải là cạnh của tam giác");
}



