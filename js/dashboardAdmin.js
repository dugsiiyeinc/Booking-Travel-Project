const flightBooking=document.querySelector('.flight-booking')

flightBooking.addEventListener('click',()=>{
    const totalFlight=document.querySelector('.total-flight')
    const totalHotel=document.querySelector('.total-Hotels')
    const totalContact=document.querySelector('.total-contact')
    const asideDashboard=document.querySelector('.aside-dashboard')
    const thead=document.querySelector('.thead')
    const tableFlightBook=document.querySelector('.flight-booking-Table')
    const flightBookHeading=document.querySelector('.flight-book-heading')
    asideDashboard.style.display="none"
    flightBookHeading.style.display="block"
   totalFlight.style.display="none"
   totalHotel.style.display="none"
   totalContact.style.display="none"
    
      tableFlightBook.innerHTML=""
    
      thead.style.display="block"
    
     const flightBookingTable=document.querySelector('.flight-booking-Table')
     let allDataFlights=JSON.parse(localStorage.getItem('dataFlight'))|| []
      allDataFlights.forEach(dataFlight=> {
    console.log('data is',allDataFlights)
    const tbody=document.createElement("tbody")
    
    tbody.className="flight-table"
    tbody.dataset.id=dataFlight.userId
    
    tbody.innerHTML=` 
    
           <tr> 
         <td class="full-name">${dataFlight.userFullName}</td>
         <td class="email-address">${dataFlight.userEmail}</td>
         <td class="phone-number">${dataFlight.userPhoneNumber}</td>
         <td class="from">${dataFlight.userFromCity}</td>
         <td class="destination"> ${dataFlight.userDestinationCity}</td>
         <td class="departure-Date">${dataFlight.userDepartureData}</td>
         <td class="returnDate"> ${dataFlight.userReturnDate}</td>
         <td class="flight-classes">${dataFlight.userClassFlight}</td>
         <td>
            <button class="daleteBtn">Dalete</button>
            <button class="Edit">Pending</button>
         </td>
    
           </tr>
        </tbody>`
        flightBookingTable.appendChild(tbody)
     console.log("table is",tbody)
                
     dataFlightBookingDeleted(dataFlight,tbody)
        
    })

    const Pending=document.querySelector('.Edit')
Pending.addEventListener('click',()=>{
   if (Pending.textContent === "Pending") {
     Pending.textContent="ConFirmed"
     Pending.style.backgroundColor="green"
   }
    else{
        Pending.textContent="Pending"
        Pending.style.backgroundColor="orange"
    }
    console.log('cliked')
})
})






// // update and dalete/.....................................

const dataFlightBookingDeleted=(dataFlight,tbody)=>{

    const daleteBtn=tbody.querySelector('.daleteBtn')
 
     daleteBtn.addEventListener('click',()=>{
 
       console.log('clicked')
       DeleteDataUsers(dataFlight.userId,tbody)
      
     })

     
   // .............................  update and dalete shaqadoodi ayaan halkan ku qabanaynaa
 
 }
 
 // // dalete flight-booking
 
 const DeleteDataUsers=(userId,tbody)=>{
    let allDataFlights=JSON.parse(localStorage.getItem('dataFlight'))|| []
   console.log(allDataFlights)
   const allDataBookings=allDataFlights.filter((dataFlight)=> dataFlight.userId !== userId)
 
   localStorage.setItem('dataFlight',JSON.stringify(allDataBookings))
   
   tbody.remove()
 
 }
 // end dalete flight booking .............................................
 
 



//  ................... end Flight Booking Data User






// start hotel Booking Data User


const HotelBooking=document.querySelector('.Hotel-booking')


HotelBooking.addEventListener('click',()=>{
  console.log('click')
  const HotelBookHeading=document.querySelector('.Hotels-books-heading')
  const theadsHotel=document.querySelector('.theads-Hotel')
  const hotelBookingTable=document.querySelector('.hotel-booking-Table')
  const asideDashboard=document.querySelector('.aside-dashboard')
  const totalFlight=document.querySelector('.total-flight')
  const totalHotel=document.querySelector('.total-Hotels')
  const totalContact=document.querySelector('.total-contact')
    asideDashboard.style.display="none"
  totalFlight.style.display="none"
  totalHotel.style.display="none"
  totalContact.style.display="none"
 hotelBookingTable.style.display="block"
 theadsHotel.style.display="block"
   HotelBookHeading.style.display="block"
  const allDataHotel=JSON.parse(localStorage.getItem('dataHotels'))|| []

  allDataHotel.forEach(dataHotels => {

    const tbody=document.createElement("tbody")
    
    tbody.className="hotel-table"
    tbody.dataset.id=dataHotels.userId
    
    tbody.innerHTML=` 
    
           <tr>
         <td class="Names">${dataHotels.userName}</td>
         <td class="addresss">${dataHotels.userEmails}</td>
         <td class="phone">${dataHotels.userPhoneNumber}</td>
         <td class="fromss">${dataHotels.userhotelName}</td>
         <td class="destination"> ${dataHotels.userhotelCity}</td>
         <td class="departure-Datess">${dataHotels.usercheckindate}</td>
         <td class="returnDates"> ${dataHotels.usercheckoutDate}</td>
         <td class="flight-classess">${dataHotels.userHotelRoom}</td>
         <td class="number-of-Guest">${dataHotels.userNumberOfGuest}</td>
         <td>
            <button class="daleteBtn">Dalete</button>
            <button class="Edit">Pending</button>
         </td>
    
           </tr>  
        </tbody>`
     hotelBookingTable.appendChild(tbody)
     console.log("table is",tbody)
                
     dataHotelsBookingDeleted(dataHotels,tbody)
        
    })

    const Pending=document.querySelector('.Edit')
    Pending.addEventListener('click',()=>{
       if (Pending.textContent === "Pending") {
         Pending.textContent="ConFirmed"
         Pending.style.backgroundColor="green"
       }
        else{
            Pending.textContent="Pending"
            Pending.style.backgroundColor="orange"
        }
        console.log('cliked')
    })

 
    })





    const dataHotelsBookingDeleted=(dataHotels,tbody)=>{

      const daleteBtn=tbody.querySelector('.daleteBtn')
   
       daleteBtn.addEventListener('click',()=>{
   
         console.log('clicked')
         DeleteDataHotelsUsers(dataHotels.userId,tbody)
        
       })
  
       
     // .............................  update and dalete shaqadoodi ayaan halkan ku qabanaynaa
   
   }
   
   // // dalete hotel-booking
   
   const DeleteDataHotelsUsers=(userId,tbody)=>{
  const allDataHotel=JSON.parse(localStorage.getItem('dataHotels'))|| []
     console.log(allDataHotel)
     const allDataHotelsBookings=allDataHotel.filter((dataHotel)=> dataHotel.userId !== userId)
   
     localStorage.setItem('dataHotels',JSON.stringify(allDataHotelsBookings))
     
     tbody.remove()
   
   }



  //  total of flights
  const totalFlight=document.querySelector('.flight-total-count')

  window.addEventListener('DOMContentLoaded',()=>{
    let allDataFlights=JSON.parse(localStorage.getItem('dataFlight'))|| []
    console.log('length of array',allDataFlights.length)
    totalFlight.textContent=allDataFlights.length;
  })
  
  // end total of flights

// start total of hotels
  const totalCountHotels=document.querySelector('.Hotel-total-count')
  window.addEventListener('DOMContentLoaded',()=>{
    const allDataHotel=JSON.parse(localStorage.getItem('dataHotels'))|| []
    console.log('length of array',allDataHotel.length)
    totalCountHotels.textContent=allDataHotel.length;
  })




  //  all User System......

  const allUsersBooking=document.querySelector('.all-Users-booking')    
    
  allUsersBooking.addEventListener('click',()=>{

    console.log('clicked data')



    const allUserBookHeading=document.querySelector('.all-Users-books-heading')
    const theadsAllUsersBook=document.querySelector('.theads-All-Users')
    const allUserBookingTable=document.querySelector('.all-Users-booking-Table')
    const asideDashboard=document.querySelector('.aside-dashboard')
    const totalFlight=document.querySelector('.total-flight')
    const totalHotel=document.querySelector('.total-Hotels')
    const totalContact=document.querySelector('.total-contact')
      asideDashboard.style.display="none"
    totalFlight.style.display="none"
    totalHotel.style.display="none"
    totalContact.style.display="none"
    allUserBookingTable.style.display="block"
   theadsAllUsersBook.style.display="block"
     allUserBookHeading.style.display="block"

     const allDataUser=JSON.parse(localStorage.getItem("userData"))||[]
     console.log("all users",allDataUser)
    allDataUser.forEach(dataUser => {
  
      const tbody=document.createElement("tbody")
      
      tbody.className="User-table"
      tbody.dataset.id=dataUser.userIds      
    console.log('date.now',dataUser)      
      tbody.innerHTML=` 
      
             <tr>
           <td class="Names">${dataUser.username}</td>
           <td class="addresss">${dataUser.userEmail}</td>
           <td class="phone">${dataUser.userSelectSystem}</td>
           <td>
              <button class="daleteBtn">Dalete</button>
           </td>
      
             </tr>  
          </tbody>`
       allUserBookingTable.appendChild(tbody)
       console.log("table is",tbody)
                  
       dataAllUserBookingDeleted(dataUser,tbody)
    })  
  })
 
 
  const dataAllUserBookingDeleted=(dataUser,tbody)=>{

    const daleteBtn=tbody.querySelector('.daleteBtn')
 
     daleteBtn.addEventListener('click',()=>{
 
       console.log('clicked')
       DeleteDataUsersAll(dataUser.userIds,tbody)
      
     })

     
   // .............................   dalete shaqadoodi ayaan halkan ku qabanaynaa
 
 }
 
 // // dalete user system
 
 const DeleteDataUsersAll=(userIds,tbody)=>{
  const allDataUser=JSON.parse(localStorage.getItem("userData"))||[]
   console.log(allDataUser)
   const allDataUsers=allDataUser.filter((dataAllUser)=> dataAllUser.userIds !== userIds)
 
   localStorage.setItem('userData',JSON.stringify(allDataUsers))
   
   tbody.remove()


 }



 

window.addEventListener("DOMContentLoaded", () => {
  const userDash=JSON.parse(localStorage.getItem("onine-User"))||[]
  
    console.log('username admin',userDash)

  const adminDashboard=document.querySelector('.User')

  console.log("is waa",adminDashboard)
if (userDash.length > 0) {   // arrayga datada ayaan hubin ku samaynay ....
  adminDashboard.textContent=`${userDash[0].username}` // hadii ay data array ah jirto nasii......
}
else{
  adminDashboard.textContent="guest"  // hadaysan jirina guest Noso bandhig.....
}
 


});




window.addEventListener('DOMContentLoaded',()=>{
  const userSystem=JSON.parse(localStorage.getItem("onine-User"))||[]

  const nameAdmin=document.querySelector('.name-user')

  
  console.log(" waa addmn",userSystem)

if (userSystem.length > 0) {   // arrayga datada ayaan hubin ku samaynay .... oo waxaan hubinaynay in ay data ku jidho localka...
 nameAdmin.textContent=`Manager ,${userSystem[0].username}` // hadii ay data array ah jirto nasii......
}
else{
  nameAdmin.textContent="guest"  // hadaysan jirina guest Noso bandhig.....
}

})

// end sytem user.....



// contact user

const contactUs=document.querySelector('.Contact-Booking')

contactUs.addEventListener('click',()=>{
  console.log('clicked')
  const allContactUsHeading=document.querySelector('.all-contact-books-heading')
  const theadsAllContactsBook=document.querySelector('.theads-All-Contact')
  const allContactBookingTable=document.querySelector('.all-Contact-booking-Table')
  const asideDashboard=document.querySelector('.aside-dashboard')
  const totalFlight=document.querySelector('.total-flight')
  const totalHotel=document.querySelector('.total-Hotels')
  const totalContact=document.querySelector('.total-contact')
    asideDashboard.style.display="none"
  totalFlight.style.display="none"
  totalHotel.style.display="none"
  totalContact.style.display="none"
  allContactBookingTable.style.display="block"
 theadsAllContactsBook.style.display="block"
 allContactUsHeading.style.display="block"



 let contactAllData=JSON.parse(localStorage.getItem("ContactUs")) || []

 contactAllData.forEach(dataContact => {

   const tbody=document.createElement("tbody")
   
   tbody.className="contact-table"
   tbody.dataset.id=dataContact.userId
   
   tbody.innerHTML=` 
   
          <tr>
        <td class="Names">${dataContact.contactName}</td>
        <td class="addresss">${dataContact.contactLastName}</td>
        <td class="phone">${dataContact.contactEmail}</td>
        <td class="fromss">${dataContact.contactPhone}</td>
          </tr>  
       </tbody>`
    allContactBookingTable.appendChild(tbody)
    console.log("table is",tbody)
               
       
   })
})


  //  total of contact
  const totalContact=document.querySelector('.contact-total-count')

  window.addEventListener('DOMContentLoaded',()=>{
    let contactAllData=JSON.parse(localStorage.getItem("ContactUs")) || []
    console.log('length of array',contactAllData.length)
    totalContact.textContent=contactAllData.length;
  })



