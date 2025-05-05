
const navigation =document.querySelector(".nav")
const bars=document.querySelector(".bars")
const login=document.querySelector('.log-in')
const bookingNow=document.querySelector('.booking-Now')
const hotelBook=document.querySelector('.Hotel-Book')
bars.addEventListener("click",()=>{
    navigation.classList.toggle('active')
})

login.addEventListener("click",()=>{
    window.location.href="login.html"
})

bookingNow.addEventListener('click',()=>{
    window.location.href="login.html"
})

hotelBook.addEventListener('click',()=>{
    window.location.href="login.html"




})


  // api   Hero-image 

  async function imageBg() {

    const url="https://api.pexels.com/v1/photos/2880600"  // datada aan dalbanay oo ah images
  
    const options={
      headers:{
        Authorization:`g4l0eJkzbzyWgR1pMv8tBqWtSfMJA7paECtVyhJZXz2x3LfYEyNS8olL`,  // api keyga lagu aqoon sanaayo datada.... aan dirayno
      }
    }
     try{
      const response= await fetch(url,options)
  
      const data= await response.json()
      console.log("result data",data)
      const image=data.src.portrait    
      console.log('data image',image)
       dataImage(image)
     }catch(errors){
      console.error("data errors",errors)
     }
  
    }

    const dataImage=(images)=>{
    
      const img=document.querySelector('.img')
      console.log(img)
      img.src=images
    }




    
    window.addEventListener('DOMContentLoaded',()=>{

        imageBg()
    })



//   // api   Hero-image 
    
  async function imageBgs() {

    const url="https://api.pexels.com/v1/photos/2880609"  // datada aan dalbanay oo ah images
  
    const options={
      headers:{
        Authorization:`g4l0eJkzbzyWgR1pMv8tBqWtSfMJA7paECtVyhJZXz2x3LfYEyNS8olL`,  // api keyga lagu aqoon sanaayo datada.... aan dirayno
      }
    }
     try{
      const response= await fetch(url,options) 
  
      const data= await response.json()
      console.log("result data",data)
      const images=data.src.portrait    
      console.log('data image',images)
       dataImages(images)
     }catch(errors){
      console.error("data errors",errors)
     }
  
    }

    const dataImages=(image)=>{
    
      const imgsTwo=document.querySelector('.img-2')
      console.log(imgsTwo)
      imgsTwo.src=image

    }




    
    window.addEventListener('DOMContentLoaded',()=>{

        imageBgs ()
    })






    

    
  async function imageBgss() {

    const url="https://api.pexels.com/v1/photos/2880601"  // datada aan dalbanay oo ah images
  
    const options={
      headers:{
        Authorization:`g4l0eJkzbzyWgR1pMv8tBqWtSfMJA7paECtVyhJZXz2x3LfYEyNS8olL`,  // api keyga lagu aqoon sanaayo datada.... aan dalbanayno
      }
    }
     try{
      const response= await fetch(url,options) 
  
      const data= await response.json()
      console.log("result data",data)
      const imagess=data.src.portrait    
      console.log('data image',imagess)
       dataImagess(imagess)
     }catch(errors){
      console.error("data errors",errors)
     }
  
    }

    const dataImagess=(images)=>{
    
      const imgsThree=document.querySelector('.three-imge')
      console.log(imgsThree)
      imgsThree.src=images
    }




    
    window.addEventListener('DOMContentLoaded',()=>{

        imageBgss ()
    })