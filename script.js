var new_para=document.createElement("p");
new_para.innerHTML="10";
document.body.append(new_para);


setTimeout(()=>{
    new_para.innerHTML=9;
    setTimeout(()=>{
        new_para.innerHTML=8;
        setTimeout(()=>{
            new_para.innerHTML=7;
            setTimeout(()=>{
                new_para.innerHTML=6;
                setTimeout(()=>{
                    new_para.innerHTML=5;
                    setTimeout(()=>{
                        new_para.innerHTML=4;
                        setTimeout(()=>{
                            new_para.innerHTML=3;
                            setTimeout(()=>{
                                new_para.innerHTML=2;
                                setTimeout(()=>{
                                    new_para.innerHTML=1;
                                    setTimeout(()=>{
                                        new_para.innerHTML="Happy Independence Day";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);