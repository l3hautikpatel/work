var profiles = ["https://ideogram.ai/api/images/direct/zYCAMx_bRPynuyr5FKWLIQ.jpg" ,"https://ideogram.ai/api/images/direct/C2NaIC_hSwO8X6g6orai0w.jpg", "https://ideogram.ai/api/images/direct/QCzU2FtJQISe9Qn0WOnwOQ.jpg" , "https://ideogram.ai/api/images/direct/pzf876plQ4ufooceUfUJhA.jpg" ,"https://ideogram.ai/api/images/direct/4f0jH82BRlSPwA87J50ZuQ.jpg" ,"https://ideogram.ai/api/images/direct/oA0R6D0KTpSDw-qumX-Jxg.jpg","https://ideogram.ai/api/images/direct/ah7G_X8rRMyl6WeN1OChmQ.jpg","https://ideogram.ai/api/images/direct/lLognk1NRn2m7_HKNBVetQ.jpg","https://ideogram.ai/api/images/direct/dxdv8HCAQQWDRIk-5gVFgA.jpg"]
var photo = document.querySelector('.photo')
var strips = document.querySelectorAll('.strip')
var strNO = strips.length;
var pointer = document.querySelector('.pointer')
var pointerString = ''
var activeStrip = 0;
var changeTimer = 6000;
strips.forEach((ele,index)=>{
    ele.style.transform = `translate(0%, 0%) rotate(${(index)*20}deg)`; 
})

for (let index = 0; index <  strips.length; index++) {
    pointerString += `<span class="pointers"></span>`
}

pointer.innerHTML = pointerString;
var pointers = document.querySelectorAll('.pointers')


pointers.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
        setPage(index);
        activeStrip = index ;
    })
})

function pointerSet(activeStrip){
    pointers.forEach((ele ,index)=>{
        if(index == activeStrip){
            ele.style.scale = 1.2
            ele.style.backgroundColor = "#000"
        }else{
            ele.style.scale = 0.8;
            ele.style.backgroundColor = "#969696"
        }
    })
}

function setPage(activeStrip){
    strips.forEach((ele,index)=>{
        if(index == activeStrip){
            ele.style.opacity = 1;
        }else{
            if (window.innerWidth <= 600) {
                ele.style.opacity = 0;    
            }else{
                ele.style.opacity = 0.3;    
            }
        }
        index = index - activeStrip+2
        ele.style.transform = `translate(0%, 0%) rotate(${(index - 2)*20}deg)`; 
    })

    photo.innerHTML = `<img src="${profiles[activeStrip]}" alt="Please add photo">`
    pointerSet(activeStrip)
}

setPage(activeStrip);


setInterval(() => {
    if (activeStrip == strNO-1) {
        activeStrip = 0;
    }
    else{
        activeStrip +=1; 
    }
    setPage(activeStrip);
}, changeTimer);

