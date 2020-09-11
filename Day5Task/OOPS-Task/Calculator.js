class calc
{
    
    static add(a,b)
    {
        return a+b;
    }
    sub(a,b)
    {
        return a-b;
    }
    mul(a,b)
    {
        return a*b;
    }
}


var a =  new calc();
console.log(a.add(1,2));
console.log(a.mul(1,2));
console.log(a.sub(2,1));