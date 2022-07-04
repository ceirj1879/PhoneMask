'use strict';
const mask=(selector)=>{
    function setCursorPosition(pos,elem){
        
        elem.focus();
        if(elem.setSelectionRange){
           
            
            elem.setSelectionStart=elem.setSelectionEnd=pos;
            
        }else if(elem.createTextRange){
            let range=elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }

    }
function cmask(event){
let matrix='+38(___)___-__-__',
i=0,
def=matrix.replace(/\D/g,''),
val=this.value.replace(/\D/g,'');
if(def.length>=val.length){
    val=def;
}
this.value=matrix.replace(/./g,function(a){

    return/[_\d]/.test(a)&& i<val.length ? val.charAt(i++) : i>=val.length ? '' :a;
});

if(event.type==='blur'){
    if(this.value.length==3){
        this.value='';
    }
}else{
    setCursorPosition(this.value.length, this);
}
    }


    let inputs = document.querySelectorAll(selector);
    inputs.forEach(i=>{
        i.addEventListener('input',cmask);
        i.addEventListener('focus',cmask);
        i.addEventListener('blur',cmask);
    });

};
export default mask;