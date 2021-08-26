const like=document.querySelector(" .like i");
const likeCount=document.querySelector(" .likeCount");
like.addEventListener("click", ()=>{
    like.classList.toggle("far");
    like.classList.contains("fas");
    if(like.classList.contains("far")){
        likeCount.innerHTML=Number(likeCount.innerHTML)+1;
       like.style.color="red";
    }
    else{
        likeCount.innerHTML=Number(likeCount.innerHTML)-1;
        like.style.color="#0066ff";
    }
});
const pra=document.querySelector(" .ncomment");
window.onclick = function(e)
{  
     var id =  e.target.id;   
    
     
 if (id === 'sent')  
 { var txt = document.getElementById('example').value    
   $( "#para" ).empty().append( txt );
   pra.style.visibility="visible";
 }
}
function contactform(){
    alert("Sended Successfully");
}