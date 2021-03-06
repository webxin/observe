import {def} from "./untils";
import reactiveProperty from "./reactiveProperty";
import observe from "./observe";
import arrayMethods from "./array";
class ObserverO{
    constructor(value) {
        def(value,"__ob__",this,false);
        //如果是数组，需要改写原型，指向arrayMethods对象，并在arrayMehods对象改写七个方法
        if(Array.isArray(value)){
            Object.setPrototypeOf(value,arrayMethods);
            this.arrayWalk(value);
        }else{
            this.walk(value);
        }
    }
    walk(value){
        for(let i in value){
            reactiveProperty(value,i)
        }
    }
    arrayWalk(value){
        for(let i=0,l=value.length;i<l;i++){
            observe(value[i]);
        }
    }
}
export default ObserverO;
