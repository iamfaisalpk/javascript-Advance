function ftbal(name,cost){
    this.fname=name;
    this.fcost=cost;

    this.ftball=function(){
        return ` ${this.fname}  ${this.fcost}`
    }

}

let ftbal2=new ftbal ("njan","avanum"); 
let ftbal3=new ftbal ("avn","avl");

console.log(ftbal2.ftball());
console.log(ftbal3.ftball());