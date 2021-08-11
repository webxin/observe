import {def} from "./untils";
let arrayPrototype=Array.prototype;
let arrayMethods=Object.create(arrayPrototype);
let needChangeMehods=[
    "push",
    "pop",
    "unshift",
    "shift",
    "splice",
    "sort",
    "reverse"
];
needChangeMehods.forEach(function (item) {
    const origin=arrayPrototype[item];
    def(arrayMethods,item,function(){
        const result=origin.apply(this,arguments)
        let args=[...arguments];
        const ob=this.__ob__;
        let inserted=[];
        switch (item) {
            case "push":
            case "unshift":
                inserted=args;
                break;
            case "splice":
                inserted=args.slice(2);
                break;
        }
        if(inserted){
            ob.observeArray(inserted);
        }
        console.log("啦啦啦")
        return result;
    },false);
})

export default arrayMethods;
