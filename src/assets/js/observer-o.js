import {def} from "./untils";
import reactiveProperty from "./reactiveProperty";
import observe from "./observe";
import arrayMethods from "./array-o";
class ObserverO{
    constructor(value) {
        def(value,"__ob__",this,false);
        if(Array.isArray(value)){
            Object.setPrototypeOf(value,arrayMethods);
            this.observeArray(value);
        }else{
            this.walk(value);
        }

    }
    walk(value){
        for(let i in value){
            reactiveProperty(value,i)
        }
    }
    observeArray(val){
        for(let i=0,l=val.length;i<l;i++){
            observe(val[i]);
        }
    }

}
export default ObserverO;
