demo = module.exports ={};

demo.squareOfNumber = function(arg){
    return arg * arg;
}

demo.addNum = (f, s)=>{
    return f + s;
}


demo.mathCalc = function(){
    this.curVal = 0.0;

    this.addFunc = (value)=>{
        this.curVal += value;
        return this.curVal;
    }

    this.addMany = (args)=>{
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            this.curVal += element;
        }
        return this.curVal;
    }

    this.minus = (val) =>{
        this.curVal -= val;
        return this.curVal;
    }
}
