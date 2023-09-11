const dob=document.getElementById("dob");
const btn=document.getElementById("button");
const result=document.getElementById("result");

btn.addEventListener("click",function() {
    const dobNew=new Date(dob.value);
    console.log(dobNew);
    const ageInMs=Date.now()-dobNew.getTime();
    console.log(ageInMs);
    const ageDate=new Date(ageInMs);
    console.log(ageDate);
    const age=Math.abs(ageDate.getUTCFullYear()-1970);
    console.log(age);
    result.innerHTML=`Your age is ${age} years`;

})
