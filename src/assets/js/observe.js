import Observer from "./observer";
function observe(value){
    if(typeof value !="object"){
        return;
    }
    let ob;
    if(typeof value.__ob__ !="undefined"){
        ob=value.__ob__;
    }else{
        ob=new Observer(value);
    }
    return ob;
}
export default observe;
