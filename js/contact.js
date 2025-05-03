
const formContact=document.querySelector('.form-contact')
const firstName=document.querySelector('.first-name')
const nameUserLast=document.querySelector('.last-names')
const emailAddress=document.querySelector('.email-address')
const ContactNumber=document.querySelector('.Phone-Number')
const ContactTextMassage=document.querySelector('.text-massage')

formContact.addEventListener('click',()=>{
    console.log('clicked')

    const NameFirst=firstName.value
    const NameLast=nameUserLast.value
    const emailAdd=emailAddress.value
    const phones=ContactNumber.value
    const textMassages=ContactTextMassage.value
    
    if (
        NameFirst.trim() && 
        NameLast.trim() &&
        emailAdd.trim() &&
        phones.trim() &&
        textMassages.trim() !== "") 
    
      {
        const contactUsDataUser = {
           contactName:NameFirst,
           contactLastName:NameLast,
           contactEmail:emailAdd,
           contactPhone:phones,
           contactTextMass:textMassages,

        };
    
        saveDataContactUs(contactUsDataUser)  

        firstName.value=""
        nameUserLast.value=""
      emailAddress.value=""
      ContactNumber.value=""
      ContactTextMassage.value=""
      }
})


    
const saveDataContactUs=(contactUsData)=>{
   let contactAllData=JSON.parse(localStorage.getItem("ContactUs")) || []
   contactAllData.push(contactUsData)
   console.log(contactAllData)
    localStorage.setItem("ContactUs",JSON.stringify(contactAllData))
}  