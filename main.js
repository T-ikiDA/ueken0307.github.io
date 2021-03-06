window.onload = ()=>{
  if(769 <= window.innerWidth){
    //widhtが768pxのときだけマウス追従有効化
    document.addEventListener("mousemove",fn);
  }
}

window.onresize = ()=>{
  if(769 <= window.innerWidth){
    //widhtが768pxのときだけマウス追従有効化
    document.addEventListener("mousemove",fn);
  }else{
    document.removeEventListener("mousemove",fn);
    let elements = document.getElementsByClassName('Item');
    
    for(let i=0;i<elements.length;i++){
      elements[i].style.transform = 'translate(0px,0px)';
    }
  }
}

fn = (e)=>{
  var z = [0.05,0.08,0.17,0.2,0.10,0.15,0.16];
  let mX = e.pageX - window.innerWidth/2;
  let mY = e.pageY - window.innerHeight/2;;
  
  let elements = document.getElementsByClassName('Item');
  
  for(let i=0;i<elements.length;i++){
    elements[i].style.transform = 'translate('+(-mX*z[i])+'px,'+(-mY*z[i])+'px)';
  }
}

display = (name)=>{
  var element = document.getElementsByClassName(name);
  element[0].style.display = 'block';
}

windowsClose = (window)=>{
  window.style.display = "none";
}
