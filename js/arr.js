//冒泡排序
function one(){
    var arr=[10,5,9,4,20,3,21,1];
    var temp=0;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}
one();

//颠倒数组
function two(){
    var arr=[1,2,3,4,5,6,7,8];
    var temp=0;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    console.log(arr);
}
two();
//菱形
function aa(){
    var kong="";
    var xing="";
    var num=5;
    for(var i=0;i<num;i++){
        for(var j=0;j<num-i;j++){
            kong+=" ";
        }
        for(var k=num;k>=num-i;k--){
            kong+="* ";
        }
      kong+="\n";
    }
    for(var i=0;i<num;i++){
        for(var j=num;j>=num-i;j--){
            kong+=" ";
        }
        for(var k=0;k<num-i-1;k++){
            kong+=" *";
        }
        kong+="\n";
    }
    console.log(kong);
}
aa();
//正三角（右）
function bb(){
    var s="";
    var num=5;
    for(var i=0;i<num;i++){
        for(var j=num;j>=num-i;j--){
            s+="*";
        }
        s+="\n";
    }
    console.log(s)
}
bb();
//正三角（左）
function cc(){
    var s="";
    var num=5;
    for(var i=0;i<num;i++){
        for(var j=0;j<num-i;j++){
            s+=" ";
        }
        for(var j=num;j>=num-i;j--){
            s+="*";
        }
        s+="\n";
    }
    console.log(s);
}
cc();
//倒三角(左)
function dd(){
    var s="";
    var num=5;
    for(var i=0;i<num;i++){
        for(var j=0;j<num-i;j++){
            s+="*";
        }
        s+="\n";
    }
    console.log(s);
}
dd();
function ee(){
    var s="";
    var num=5;
    for(var i=0;i<num;i++){
        for(var j=num;j>=num-i;j--){
            s+=" ";
        }
        for(var j=0;j<num-i;j++){
            s+="*";
        }
        s+="\n";
    }
    console.log(s);
}
ee();
