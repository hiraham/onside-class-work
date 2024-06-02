function myInfo():void{
    console.log('my name is hira')
    console.log('i am  from pakistani')
    console.log('iam a softwear engeiner');
}

console.log('---------------------------------------')

myInfoWithParameter(name:string, country:string,job:string)


myInfoWithParameter(name:









    console.log("-----------------------------------")

    myInfoWithDefaltParameter("zubada","pakistan");
    myInfoWithDefaltParameter("hiba","pakistan");
    myInfoWithDefaltParameter("ali","pakistan");

    

    //function with optional parameters

    function myInfoWithOptionalParameter(name:string,country:string,job?:string):void{
        console.log('my name is hira',name);//argument pass log
        console.log("i am pakistani",country);//
        console.log('i am a teacher',job);




        //function with return type
        function myFunctionWithReturnType(n1:number,n2:number): number{
            return n1 + n2;
        }

        const result :number = myFunctionWithReturnType (10,20)
        console.log(result);
        console.log(myFunctionWithReturnType(50,20));

    }