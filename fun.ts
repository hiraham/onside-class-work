//()function ko call krte hen
//basic syntex
//funtion functionname(param1,param2){
 //   function body
//}
//function declearation of parameters
let myFriends: string[] =['ali',muneeb','areesha'];
const unFriends: string[] =[];

function addFriend(name:string):void {
    //push name to array
    myFriends.push(name);
 //print arry to console
    console.log(myFriends);

}
addFriend('john cena');

console.log('-----------------------------------------');

//function with     return type
function remonveFriend(name: string):string{
    return name;
}
const remonveFriend = remonveFriend


console.log('myFriends',myFriends);
console.log('remonveFriend',remonveFriend);
