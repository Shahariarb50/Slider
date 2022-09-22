const images=document.querySelectorAll('.image')
const active=document.querySelector('.active')
const array= Array.from(images)
console.log(array.length)
let count = 0
// console.log(array.indexOf(active))
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
    btn1.addEventListener('click',()=>{
        count++
        if(count>-1 && count<array.length){
            removeActive()
            let image=array[count]
            console.log(image)
            image.classList.add('active')
        }
        else if(count==array.length){
            removeActive()
            let image=array[0]
            console.log(image)
            image.classList.add('active')
            count=0
        }
    })
    btn2.addEventListener('click',()=>{
        count--
        if(count>-1 && count<array.length)
        {
            removeActive()
            let image=array[count]
            console.log(image)
            image.classList.add('active')
        }
        else if(count<0){
            removeActive()
            let image=array[4]
            console.log(image)
            image.classList.add('active')
            count=4
        }
        
        
    })

function removeActive(){
    images.forEach(image=>{
    image.classList.remove('active')
    
    })
}
