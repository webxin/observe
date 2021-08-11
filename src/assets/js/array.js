import {def} from "./untils";
let arrayPrototype=Array.prototype;
let arrayMethods=Object.create(arrayPrototype);
let needChangeMethods=[
    "push",
    "pop",
    "unshift",
    "shift",
    "splice",
    "sort",
    "reverse"
];
needChangeMethods.forEach(function(item){
    let origin=arrayPrototype[item];
    def(arrayMethods,item,function(){
        let ob=this.__ob__;
        let result=origin.apply(this,arguments);
        let args=[...arguments];
        let addval=[];
        switch (item) {
            case "push":
            case "unshift":
                addval=args;
                break;
            case "splice":
                addval=args.slice(2);
                break;
        }
        if(addval){
            console.log(addval);
            ob.arrayWalk(addval);
        }
        console.log("lalla")
    },false);
});
export default arrayMethods;
