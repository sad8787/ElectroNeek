var a = presentationLetter;
var text="";
for (let i = 0; i < a.length; i++) {
  if(a[i]==="<"){
    if(a[i+1]==="/"){
        if(a[i+2]==="p")
        {
            i=i+3;
            text+="\n";
        }
        else if(a[i+2]==="a")
        {
            i=i+3;
            text+="\n";
        }      
    }
    else if (a[i+1]==="p"){
      i=i+2;
      text+=" ";
    }
    else if (a[i+1]==="a"){
      i=i+2;
      text+=" ";
    }
  }
  else{
    text += a[i] ;
  }  
}
presentationLetter=text;