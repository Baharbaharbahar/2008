function ok(){
    a2=document.getElementById("a2").value;
    a3=document.getElementById("a3").value;
    age=document.getElementById("age").value;
    a1=document.getElementById("a1").selectedIndex;
    if(!(alph(a2))){
        alert("verifier votre nom !!!!!!");
    }
    if(!(alph(a3))){
        alert ("verifier votre  prenom!!!!!!");
    }
    if (Number(age)<5 ||Number(age)>100){
        alert ("veridier votrre age!!!!!!!!!!");
    }
    if(a1==0){
        alert ("veridier votrre pays!!!!!!!!!!");
    }
 
}
function alph(ch)
{
    ch=ch.toUpperCase();
    for (let i=0;i<ch.length;i++)
    {
        if((ch[i]>"Z"|| ch[i] <"A") & ch[i]!=" ")
        {
            return false;

        }
    }
    return true;

}