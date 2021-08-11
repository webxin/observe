import observe from "./observe"
function reactiveProperty(data,key,val){
    if(arguments.length==2){
        val=data[key];
    }
    observe(val)
    Object.defineProperty(data,key,{
        set(newVal){
            console.log("设置",key);
            val=newVal;
            observe(val);
        },
        get(){
            console.log("访问",key);
            return val;
        }
    })
}
export default reactiveProperty;
