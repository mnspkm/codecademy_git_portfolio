let brandPool = ['Samsung','LG','Apple','Datadog','Amazon','NAVER',"Kakao",'Microsoft'];
const pickRandomBrand = () => {
    return brandPool[brandPool.length * Math.ceil(Math.random())];
};
console.log(pickRandomBrand());