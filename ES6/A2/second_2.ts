function getnextArmstrong(){
    let i=1
    const nextArmNum={
        next:function(){
            let numberOfDigits = i.toString().length;
            let sum=0
            let temp=i
            while(temp>0){
                let remainder=temp % 10
                sum += remainder ** numberOfDigits
                temp= Math.floor(temp / 10)

            }
            if(sum==i){
                i++
                return{value: sum, done:false}
            }
            else{
                i++
                return{value: undefined, done:true}
            }

        }
    }
    return nextArmNum
}

const armNum = getnextArmstrong()
let res = armNum.next()
for(let i=0;i<=2000;i++){
    if(res.done == false)
    console.log(res.value);
    res=armNum.next()
    i++
    
}