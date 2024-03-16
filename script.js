function myFunction(element){
   let a = element.children[0].innerHTML;
   const input = document.getElementById('fname');
   if(a=="="){
   let b = eval(input.value);
    input.value = b;
   }
   else{
   input.value = input.value +  a;
   }
}


