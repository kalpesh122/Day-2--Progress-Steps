const p=document.getElementById('progress')
const pr=document.getElementById('prev')
const n=document.getElementById('next')
const ci=document.querySelectorAll('.circle')
let cua=1
n.addEventListener('click',()=>{
    cua++
    if(cua>ci.length){
        cua=ci.length
    }
    update()
    // console.log(cua)
})
pr.addEventListener('click',()=>{
    cua--
    if(cua<1){
        cua=1
    }
    update()
    // console.log(cua)
})
function update(){
    ci.forEach((cr,i)=>{
        if(i<cua){
            cr.classList.add('active')
        }else{
            cr.classList.remove('active')
        }

    })
    const ac=document.querySelectorAll('.active')
    progress.style.width=((ac.length-1)/(ci.length-1))*100+'%'
    
    if(cua===1){
       pr.disabled=true
    }else if(cua===ci.length)[
        n.disabled=true
    ]

    else{
        pr.disabled=false
        n.disabled=false
    }
}