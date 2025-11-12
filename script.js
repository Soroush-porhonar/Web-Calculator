clicking()
data = 0
screenshow(0)
let repeat = 0

function clicking(){
    const clicked = document.querySelector("#buttons");
    clicked.addEventListener("click", function (event) {
        const button = event.target.innerText;
        if (repeat===1){
            repeat = 0
            screendata(0,0)
        }
        if (isnumber(button)){
            screendata(+button , 1)
        }else{
            act(button)
        }
        
        
        
    }); 
}


function screenshow(number){
    const show = document.querySelector("#screen")
    show.innerHTML = number
    
    
      
}
    


function isnumber(string){
    if (isNaN(+string) ){
        return(false)
    }else{
        return(true)
    }
}


function act(actor){
    if (actor === "C"){
        screendata(0 , 0);
    }else if(actor === "←"){
        screendata(0 , -1);
    }else {
        math(actor)
        console.log("math")
    }
}


function screendata(number , cond){
    if (cond === 1){
        data = Number(String(data)+ String(number))
    }else if (cond === 0){
        data = number
    }else if (cond === -1){
        data = Number(String(data).slice(0 , -1))
    }else if (cond === false)
        return data
    screenshow(data)
    
    
}
function math(actor){
    if (actor === "="){
        switch(opr){
            case "/":
                result = cach / screendata(0, false);
                break;
            case "*":
                result = cach * screendata(0, false);
                break;
            case "-":
                result = cach - screendata(0, false);
                break;
            case "+":
                result = cach + screendata(0, false) ;  
        }
        repeat = 1
        screendata(result , 0)
    }
    else{
        cach = screendata(0, false)
        opr = actor
        screendata(0, 0)
    }
    
}