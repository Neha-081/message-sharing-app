const {hash}=window.location;
const message=atob(hash.replace('#',''));
if(message){
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML=message;
}


document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();   //not submit the form automatically

    //toggle visibility
 document.querySelector('#message-form').classList.add('hide')
 document.querySelector('#link-form').classList.remove('hide')

    const input = document.querySelector('#message-input');
   const encrypted=btoa(input.value)   //convert text to encrypted code
  

   const linkinput =document.querySelector('#link-input');
   linkinput.value=`${window.location}#${encrypted}`;   //to get full url to share
 linkinput.select();  //select input immediately after create for users to copy full url easily
});
//alphabets character codes-> code to binary->merge all code->8 digit binary reprensentation of character code->all joined together->group of 6 charcters->conert each into a character->joined charcters together

