let count=0

let main=''
const leftBox=document.querySelector('.left')
const rightBox=document.querySelector('.right')
for(let i=1;i<5;i++){
    count++
    main+=`<div class="list" draggable="true" >${count}</div>
         </div>`
}
leftBox.innerHTML=main 


leftBox.addEventListener('dragstart',function(e){
    let selected=e.target

    rightBox.addEventListener('dragover',function(e){
        e.preventDefault()
    })
    rightBox.addEventListener('drop',function(e){
           rightBox.appendChild(selected)
           selected=null
    })


})
rightBox.addEventListener('dragstart',function(e){
    let selected=e.target

leftBox.addEventListener('dragover',function(e){
    e.preventDefault()
})
leftBox.addEventListener('drop',function(e){
    leftBox.appendChild(selected)
       selected=null
})

})