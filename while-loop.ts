//while(condition){
 //   statement
//}


//genrate table of 5

let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}
console.log('---------------------------------------------------')

let ramazanDay = 1
let isRamazan = true;
while(isRamazan){

    if(ramazanDay === 30){
        isRamazan = false;
        console.log('ramzan is over');
        break;
    }else{
    console.log('yes we are selling pakoras');
    ramazanDay++;

}
}

console.log('----------------------------------------  ')

//let b = 1;
//while(b<= 10){
  //  console.log(5,"x",i ,"=",5*i);

//}

//do{
    //statement
    //}
    //while(condition); 

    const isFoodFresh = false;
    do{
        console.log('eating')
    }while(isFoodFresh);

    console.log('----------------------------------------');

    //do while 
    let j = 11;
    //do while loop execute the statement first then check the condition
    do{
        console.log(7,"x",j,"=","j","line 54");
        j++;
    }while(j <= 10);





