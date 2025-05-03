const navDash = document.querySelector(".nav-dash");
const bars = document.querySelector(".bars");
const flightFormDeskTop = document.querySelector(".flight-form");
const flightBookingDesktop = document.querySelector(".flight-booking");


const flightForms=document.querySelector('.flight-forms')
const heads=document.querySelector('.head')

const names=document.querySelector(".Name")



  
// logout User
const LogOut=document.querySelector('.LogOut')

LogOut.addEventListener("click", () => {
  const userSystem=JSON.parse(localStorage.getItem("onine-User"))||[]
  console.log('online data',userSystem)
    localStorage.removeItem("onine-User");
    window.location.href = "../html/index.html";
    
  });

  // const onlineUser = JSON.parse(localStorage.getItem("onine-User")) || null;
  // if (!onlineUser) return (window.location.href = "../html/login.html");


heads.addEventListener("click",()=>{
    flightForms.style.display="none"
 
})
const formDataHotelDeskTop = document.querySelector(".Hotel-form");
const HotelBookingDesktop = document.querySelector(".Hotel-booking");

bars.addEventListener("click", () => {
  navDash.classList.toggle("active");
});

flightBookingDesktop.addEventListener("click", () => {
  console.log("clicked");
  flightFormDeskTop.style.display = "block";
    formDataHotelDeskTop.style.display="none"
 tableFlightBook.innerHTML=""
    thead.style.display="none"
      hotelBookingTable.style.display="none"

});

HotelBookingDesktop.addEventListener("click", () => {
  formDataHotelDeskTop.style.display = "block";
  flightFormDeskTop.style.display = "none";
 tableFlightBook.innerHTML=""
   thead.style.display="none"
     flightBookHeadings.style.display="none"
           hotelBookingTable.style.display="none"
});

// flight Booking   ..........   My Flight Booing..................

const myBooking=document.querySelector('.my-Booking')
const thead=document.querySelector('.thead')
const tableFlightBook=document.querySelector('.flight-booking-Table')

const asideDashboard=document.querySelector('.aside-dashboard')

const flightBookHeadings=document.querySelector('.flight-book-heading')

myBooking.addEventListener('click',()=>{
  console.log('clicked')

  tableFlightBook.innerHTML=""

  thead.style.display="block"

  flightFormDeskTop.style.display = "none";

  formDataHotelDeskTop.style.display = "none";
  asideDashboard.style.display="none"
       flightBookHeadings.style.display="block"

  let allDataBooking=allDataBookingFlight()

  allDataBooking.forEach(dataFlight=> {

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
        <button class="Edit">Edit</button>
     </td>

       </tr>
    </tbody>`
 tableFlightBook.appendChild(tbody)
 console.log("table is",tbody)
            
 dataFlightBookingDeleteAndUpdate(dataFlight,tbody)
    
})


})




// // update and dalete/.....................................

const dataFlightBookingDeleteAndUpdate=(dataFlight,tbody)=>{

   const daleteBtn=tbody.querySelector('.daleteBtn')

    daleteBtn.addEventListener('click',()=>{

      console.log('clicked')
      handleDeleteDataUser(dataFlight.userId,tbody)
     
    })

  const updateFlight=tbody.querySelector('.Edit')
  const fullName=tbody.querySelector('.full-name')
  const emailAddress=tbody.querySelector('.email-address')
  const phoneNumber=tbody.querySelector('.phone-number')
  const from=tbody.querySelector('.from')
  const destination=tbody.querySelector('.destination')
  const departureDate=tbody.querySelector('.departure-Date')
  const returnDate=tbody.querySelector('.returnDate')
  const flightClasses=tbody.querySelector('.flight-classes')

  updateFlight.addEventListener('click',()=>{

  
    const updateName=prompt("Enter Your Name",fullName.textContent)
    const updateEmail=prompt('Enter Your Email',emailAddress.textContent)
    const updatePhoneNumber=prompt("Enter Your Phone Number ",phoneNumber.textContent)
    const updateFrom=prompt("Enter Your Departure City",from.textContent)
    const updateDestination=prompt('Enter Your Destination City',destination.textContent)
    const updateDepartureDate=prompt("Enter Your Departure Date",departureDate.textContent)
    const updatReturnDate=prompt("Enter Your Return Date",returnDate.textContent)
    const updateFlightClass=prompt("Enter Your Flight Class",flightClasses.textContent)


    if (updateName.trim()  && updateEmail.trim()  && updatePhoneNumber.trim()  
      && updateFrom.trim()   && updateDestination.trim()   && updateDepartureDate.trim()  
    && updatReturnDate.trim() && updateFlightClass.trim() !== "") {
      
              
//         // DataUpdateLocalStorageka gey....

       uppdatesDataFlight(dataFlight.userId,updateName, updateEmail,updatePhoneNumber,updateFrom,updateDestination,updateDepartureDate,updatReturnDate,updateFlightClass)
  
       // usooo bandhig isbadalka uu sameeyey userku

       fullName.textContent=updateName
       emailAddress.textContent=updateEmail
       phoneNumber.textContent=updatePhoneNumber
       from.textContent=updateFrom
       destination.textContent=updateDestination
       departureDate.textContent=updateDepartureDate
       returnDate.textContent=updatReturnDate
       flightClasses.textContent=updateFlightClass
    }


  })
    
  // .............................  update and dalete shaqadoodi ayaan halkan ku qabanaynaa

}

// // dalete flight-booking

const handleDeleteDataUser=(userId,tbody)=>{

  const dataFlightBookingAll=allDataBookingFlight()
  console.log(dataFlightBookingAll)
  const dataFlightFilter=dataFlightBookingAll.filter((dataFlight)=> dataFlight.userId !== userId)

  localStorage.setItem('dataFlight',JSON.stringify(dataFlightFilter))
  
  tbody.remove()

}
// end dalete flight booking .............................................




// End update flight booking

const uppdatesDataFlight=(userId,Name, Email,phoneNumber,From,Destination,DepartureDate,ReturnDate,FlightClass)=>{

  
  const updateDataFlight=allDataBookingFlight()
  console.log('is data update',updateDataFlight)

  const allDataUpdate=updateDataFlight.find((updateFlight)=> updateFlight.userId == userId)
  if (allDataUpdate) {
   allDataUpdate.userFullName=Name
   allDataUpdate.userEmail=Email
   allDataUpdate.userPhoneNumber=phoneNumber
   allDataUpdate.userFromCity=From
   allDataUpdate.userDestinationCity=Destination
   allDataUpdate.userDepartureData=DepartureDate
   allDataUpdate.userReturnDate=ReturnDate
   allDataUpdate.userClassFlight=FlightClass
   updateNowFlights(allDataUpdate)   // function shaqada uu qabanaayo waxa weeye in uu Inoo Soo qado Userka Updateka uu sameeyey.....
  }

}
const updateNowFlights = (dataUpdate) => {
  let allFlights = JSON.parse(localStorage.getItem('dataFlight'))|| []   // datadii localka taalay ayaan uyeeranaynaa...ama dalbanaynaa

  const updatedDataFlight = allFlights.map(flight => {

    if (flight.userId === dataUpdate.userId) {   //flight data uu userku wax ka badalaayo ama update ku sameenayo.....
      return dataUpdate ; //replace with updated // isoo celi datada update lagu sameye 
    }

    return flight   // hadii uu san update samayn datadisa usoo celi .....
  })

localStorage.setItem("dataFlight",JSON.stringify(updatedDataFlight))  // datadii uu userku update u sameeyey ayaan geynay localka....
};



// End update flight booking...............................................






// datada markaan localka aan geynayno  data flight Booking..........................


// flight Booking user.........

const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email");
const PhoneNumber = document.querySelector(".phone-Number");
const fromDepartureCity = document.querySelector(".form-Departure-City");
const toDestinationCity = document.querySelector(".to");
const DepartureDate = document.querySelector(".Departure-date");
const returnDate = document.querySelector(".Return-date");
const FlightClass = document.querySelector("#flight-class");
const flightSubmit = document.querySelector(".flight-submit");

// events flight

flightSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullNames = fullName.value;
  const email = emailAddress.value;
  const PhonesNumber = PhoneNumber.value;
  const formCity = fromDepartureCity.value;
  const destinationCity = toDestinationCity.value;
  const departureDates = DepartureDate.value;
  const returnsDates = returnDate.value;
  const classFlights = FlightClass.value;
  


  if (
    fullNames.trim() && 
    email.trim() &&
    PhonesNumber.trim() &&
    formCity.trim() &&
    destinationCity.trim() &&
    departureDates.trim() &&
    returnsDates.trim() &&
    classFlights.trim() !== ""
  ) {
    const flightData =
      {
       userId:Date.now(),
      userFullName: fullNames,
      userEmail: email,
      userPhoneNumber: PhonesNumber,
      userFromCity:formCity,
      userDestinationCity:destinationCity,
      userDepartureData:departureDates,
      userReturnDate:returnsDates,
      userClassFlight:classFlights,
    };
    
    // allDataFlightBooking(flightData)  // funtionkii data soo bandhigaayey...
    saveDataFlight(flightData)  
  fullName.value=""
  emailAddress.value=""
  PhoneNumber.value=""
  fromDepartureCity.value=""
  toDestinationCity.value=""
  DepartureDate.value=""
  returnDate.value=""
  }
});

const saveDataFlight=(flightData)=>{
const allDataFlight=JSON.parse(localStorage.getItem('dataFlight'))|| []
allDataFlight.push(flightData)
console.log(allDataFlight)
  localStorage.setItem('dataFlight',JSON.stringify(allDataFlight))
}


let allDataBookingFlight=()=>{
  const allDataFlight=JSON.parse(localStorage.getItem('dataFlight'))|| []
  return allDataFlight

}



// end flight-Booking........................................................................











// Hotel Booking user.........

const Names = document.querySelector(".full-names");
const emailAddres = document.querySelector(".emails");
const PhoneNumbers = document.querySelector(".phone-Numbers");
const hotelName = document.querySelector(".Hotel-Name");
const cityHotel = document.querySelector(".Destinations-user");
const checkInDate = document.querySelector(".Check-in-Date");
const checkoutDate = document.querySelector(".Check-out-Date");
const hotelRooms = document.querySelector("#Hotel-Rooms");
const numberOfGuest = document.querySelector(".Number-of-Guests");
const flightSubmitHotel = document.querySelector(".flight-submits");

// events Hotel

flightSubmitHotel.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullNamess = Names.value;
  const emailAddr = emailAddres.value;
  const PhonesNumbers = PhoneNumbers.value;
  const hotelNames= hotelName.value;
  const hotelUser=cityHotel.value;
  const checkinDates = checkInDate.value;
  const checkoutDates = checkoutDate.value;
  const hotelsRoom = hotelRooms.value;
  const numberOfGuests =numberOfGuest.value;

  


  if (
    fullNamess.trim() && 
    emailAddr.trim() &&
    PhonesNumbers.trim() &&
    hotelNames.trim() &&
    hotelUser.trim() &&
    checkinDates.trim() &&
    checkoutDates.trim() &&
    hotelsRoom.trim() &&
    numberOfGuests.trim() !== ""
  ) {
    const hotelBookData = {
       userId:Date.now(),
      userName: fullNamess,
      userEmails: emailAddr,
      userPhoneNumber: PhonesNumbers,
      userhotelName:hotelNames,
      userhotelCity:hotelUser,
      usercheckindate:checkinDates,
      usercheckoutDate:checkoutDates,
      userHotelRoom:hotelsRoom,
      userNumberOfGuest:numberOfGuests,
    };
    saveDataHotel(hotelBookData)  
   Names.value=""
   emailAddres.value=""
  PhoneNumbers.value=""
  hotelName.value=""
    cityHotel.value=""
   checkInDate.value=""
   checkoutDate.value=""
    hotelRooms.value=""
    numberOfGuest.value=""
  }
});

const saveDataHotel=(hotelBookData)=>{
const allDataHotel=JSON.parse(localStorage.getItem('dataHotels'))|| []
allDataHotel.push(hotelBookData)
console.log(allDataHotel)
  localStorage.setItem('dataHotels',JSON.stringify(allDataHotel))
}


let allDataBookingHotels=()=>{
  const allDataHotel=JSON.parse(localStorage.getItem('dataHotels'))|| []
  return allDataHotel
}
















// my booking Hotel Data

const hotelBookingTable=document.querySelector('.hotel-booking-Table')
const myHotels=document.querySelector('.my-Hotels')
const HotelBookHeading=document.querySelector('.Hotels-books-heading')
const theadsHotel=document.querySelector('.theads-Hotel')

myHotels.addEventListener('click',()=>{
  console.log('clicked')

  tableFlightBook.innerHTML=""

theadsHotel.style.display="block"

  flightFormDeskTop.style.display = "none";

  formDataHotelDeskTop.style.display = "none";
  asideDashboard.style.display="none"

  HotelBookHeading.style.display="block"
  hotelBookingTable.style.display="block"


  let allDataHotels= allDataBookingHotels()

  allDataHotels.forEach(dataHotels => {

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
        <button class="Edit">Edit</button>
     </td>

       </tr>
    </tbody>`
 hotelBookingTable.appendChild(tbody)
 console.log("table is",tbody)
            
 dataHoteltBookingDeleteAndUpdate(dataHotels,tbody)
    
})


})




// // // update and dalete Function........................

const dataHoteltBookingDeleteAndUpdate=(dataHotels,tbody)=>{

   const daleteBtn=tbody.querySelector('.daleteBtn')

    daleteBtn.addEventListener('click',()=>{

      console.log('clicked')
      handleDeleteDataUsers(dataHotels.userId,tbody)

    })

  const updateHotel=tbody.querySelector('.Edit')
  const Names=tbody.querySelector('.Names')
  const emailAdd=tbody.querySelector('.addresss')
  const phone=tbody.querySelector('.phone')
  const hotelName=tbody.querySelector('.fromss')
  const hotelCity=tbody.querySelector('.destination')
  const checkInDate=tbody.querySelector('.departure-Datess')
  const checkoutDate=tbody.querySelector('.returnDates')
  const hotelRoom=tbody.querySelector('.flight-classess')
  const numberoFguest=tbody.querySelector('.number-of-Guest')

  updateHotel.addEventListener('click',()=>{

    const updateNames=prompt("Enter Your Name",Names.textContent)
    const updateEmails=prompt('Enter Your Email',emailAdd.textContent)
    const updatePhoneNumbers=prompt("Enter Your Phone Number ",phone.textContent)
    const updateHotelName=prompt("Enter Your Hotel Name ",hotelName.textContent)
    const updateHotelCity=prompt('Enter Your Hotel City',hotelCity.textContent)
    const updatecheckinDate=prompt("Enter Your CheckIn-Date ",checkInDate.textContent)
    const updatCheckoutdate=prompt("Enter Your Check-Out-Date",checkoutDate.textContent)
    const updateHotelRoom=prompt("Enter Your Hotel Room",hotelRoom.textContent)
    const updateGuestNumber=prompt("Enter Your Number Of Guest",numberoFguest.textContent)


    if (updateNames.trim()  && updateEmails.trim()  && updatePhoneNumbers.trim()  
      && updateHotelName.trim()   && updateHotelCity.trim()   && updatecheckinDate.trim()  
    && updatCheckoutdate.trim() && updateHotelRoom.trim() && updateGuestNumber.trim() !== "") {
      
              
//         // PostDataUpdateLocalStorage 

       uppdatesDataHotel(dataHotels.userId,updateNames, updateEmails,updatePhoneNumbers,updateHotelName,updateHotelCity,updatecheckinDate,updatCheckoutdate,updateHotelRoom,updateGuestNumber)

       // usooo bandhig isbadalka uu sameeyey userku

       Names.textContent=updateNames
       emailAdd.textContent=updateEmails
       phone.textContent=updatePhoneNumbers
       hotelName.textContent=updateHotelName
       hotelCity.textContent=updateHotelCity
       checkInDate.textContent=updatecheckinDate
       checkoutDate.textContent=updatCheckoutdate
        hotelRoom.textContent=updateHotelRoom
       numberoFguest.textContent=updateGuestNumber
    }
  })
    

}

// dalete hotel-booking

const handleDeleteDataUsers=(userId,tbody)=>{

  const dataHotelBookingAll=allDataBookingHotels()
  console.log(dataHotelBookingAll)
  const dataHoteltFilter=dataHotelBookingAll.filter((dataHotels)=> dataHotels.userId !== userId)

  localStorage.setItem('dataHotels',JSON.stringify(dataHoteltFilter))
  
  tbody.remove()

}

// // // update flight booking

const uppdatesDataHotel=(userId,Names, Emails,phoneNumbers,hotelName,hotelCity,checkInDate,checkoutDate,hotelsRoom,numberOfGuest)=>{

  
  const updateedHotels=allDataBookingHotels()
  console.log('is data update',updateedHotels)

  const allDataUpdateHotel=updateedHotels.find((hotelsData)=> hotelsData.userId == userId)
  if (allDataUpdateHotel) {

    allDataUpdateHotel.userName=Names
    allDataUpdateHotel.userEmails=Emails
    allDataUpdateHotel.userPhoneNumber=phoneNumbers
    allDataUpdateHotel.userhotelName=hotelName
    allDataUpdateHotel.userhotelCity=hotelCity
    allDataUpdateHotel.usercheckindate=checkInDate
    allDataUpdateHotel.usercheckoutDate=checkoutDate
   allDataUpdateHotel.userHotelRoom=hotelsRoom
   allDataUpdateHotel.userNumberOfGuest=numberOfGuest
  }
updateNowHotels(allDataUpdateHotel)   // function shaqada uu qabanaayo waxa weeye in uu Inoo Soo qado Userka Updateka uu sameeyey.....
}


const updateNowHotels = (allDataUpdateHotels) => {
  let allHotels = JSON.parse(localStorage.getItem('dataHotels'))|| []   // datadii localka taalay ayaan uyeeranaynaa...ama dalbanaynaa

  const updatedDataHotels = allHotels.map(hotelsData => {

    if (hotelsData.userId === allDataUpdateHotels.userId) {   //flight data uu userku wax ka badalaayo ama update ku sameenayo.....
      return allDataUpdateHotels ; //replace with updated // isoo celi datada update lagu sameye 
    }

    return hotelsData   // hadii uu san update samayn datadisa usoo celi .....
  })

localStorage.setItem("dataHotels",JSON.stringify(updatedDataHotels))  // datadii uu userku update u sameeyey ayaan geynay localka....
};
