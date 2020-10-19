
function numberRange() {


    try {
        
        
        



    var array_numbers=[1,2,3,4,5,6,7,8,9];

    n = document.getElementById( "number").value;
    var h1 = document.getElementById("h1");
    var para = document.getElementsByTagName("p");



//verifying if all the condition are correct

    if(n == "")  throw  h1.innerHTML="Please enter a number!";
        if( isNaN(n)) throw h1.innerHTML="Not a number!";
        if(n > 10)   throw h1.innerHTML="Your number is smaller that 10!";
        if(n < 1)   throw h1.innerHTML="Your number is bigger that 0!";



    
//creating a loop wich put all the calcs in the <p> paragraph

    for(var i = 0; i < array_numbers.length;i++){
    para[i].innerHTML =  n +" x " + (i+1)  + " = "+array_numbers[i]*n }
    
}

    catch(err) {
            h1.innerHTML = err;
         }


}
