

const PackageContainer=document.querySelector('.package-container');
const HotelSearch=document.querySelector('.hotel-search');
const PackagesTab=document.querySelector('#packages-tab');
const HotelsTab=document.querySelector('#hotels-tab');
const HotelsNow=document.querySelector('.flights-Now');
const SearchHotel=document.querySelector('.search-hotel');
const SearchBtn=document.querySelector('.search-btnss');
const ContainerCard=document.querySelector('.container-Card');
const ContainerCardsPackages=document.querySelector('.container-Cards');
const BookingContainer=document.querySelector('.booking-container');
const FormBook=document.querySelector('.Form-Book');
const TeContainer=document.querySelector('.te-container')

SearchBtn.addEventListener('click',()=>{

 window.location.href = "../html/form.html";
})
   




SearchBtn.addEventListener('click',()=>{     
   console.log('clicked' )
  TeContainer.style.display='block';
})


PackagesTab.addEventListener('click',()=>{
  ContainerCard.style.display='none';
  BookingContainer.style.display='none';  
    TeContainer.style.display='none';  
})
HotelsNow.addEventListener('click',()=>{
    BookingContainer.style.display='none';   
    TeContainer.style.display='none';
    console.log('clicked' )
})
HotelsTab.addEventListener('click',()=>{    
    TeContainer.style.display='none';
})
SearchHotel.addEventListener('click',()=>{
   ContainerCard.style.display='block';

})

PackagesTab.addEventListener('click',()=>{
    PackageContainer.style.display='block';
    HotelSearch.style.display='none';
    PackagesTab.classList.add('active');
   HotelsTab.classList.remove('active');

})
HotelsNow.addEventListener('click',()=>{
    PackageContainer.style.display='none';
        HotelSearch.style.display='block';
          ContainerCard.style.display='none';
    PackagesTab.classList.remove('active');
    FlightsTab.classList.add('active');

})
//  Hotel packges
  document.addEventListener('DOMContentLoaded', function() {
            // Get all select buttons
            const selectButtons = document.querySelectorAll('.select-btn');
            const bookingForm = document.getElementById('bookingForm');
            const packageName = document.getElementById('packageName');
            const packagePrice = document.getElementById('packagePrice');
            const packageLocation = document.getElementById('packageLocation');
            const submitButton = document.getElementById('submitBooking');
            const confirmation = document.getElementById('confirmation');
            
            // Initialize selected packages array in localStorage if it doesn't exist
            if (!localStorage.getItem('selectedPackages')) {
                localStorage.setItem('selectedPackages', JSON.stringify([]));
            }
            
            // Add click event to each select button
            selectButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Get the hotel card details
                    const card = this.closest('.hotel-card');
                    const hotelName = card.querySelector('h2').textContent;
                    const price = card.querySelector('.price').textContent;
                    const location = card.querySelector('.location').textContent;
                    const image = card.querySelector('img').src;
                    
                    // Update the form with selected package details
                    packageName.textContent = hotelName;
                    packagePrice.textContent = `Price: ${price}`;
                    packageLocation.textContent = `Location: ${location}`;
                    
                    // Store the selected package data
                    const selectedPackage = {
                        hotelName,
                        price,
                        location,
                        image,
                        selectedAt: new Date().toLocaleString()
                    };
                   
                    // Get existing packages from localStorage
                    const packages = JSON.parse(localStorage.getItem('selectedPackages'));
                    
                    // Add the new package to the array
                    packages.push(selectedPackage);
                    
                    // Save back to localStorage
                    localStorage.setItem('selectedPackages', JSON.stringify(packages));
                    
                    // Show the booking form
                    BookingContainer.style.display = 'block';
                    // Scroll to the form
                    bookingForm.scrollIntoView({ behavior: 'smooth' });
                });
            });
            
            // Handle form submission
            submitButton.addEventListener('click', function() {
                // Basic form validation
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const CheckIn = document.getElementById('departure').value;
                const checkout = document.getElementById('return').value;
                const adults = document.getElementById('adults').value;
                const children = document.getElementById('children').value;
                
                if (!firstName || !lastName || !email || !phone || !CheckIn  || !checkout || !adults || !children ) {
                    return;
                }

                   // Create form data object
                const DataHotel = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    CheckIn,
                    checkout,
                    adults,
                    children,
                    package: packageName.textContent,
                    bookedAt: new Date().toLocaleString()
                };
              
                   // Get existing form data from localStorage
                const HotelDataArray = JSON.parse(localStorage.getItem('HotelFormData')) || [];
                
                // Add the new form data to the array
                HotelDataArray.push(DataHotel);
                
                // Save back to localStorage
                localStorage.setItem('HotelFormData', JSON.stringify(HotelDataArray));
                
                // Show confirmation message
                confirmation.style.display = 'block';
                
                // Scroll to confirmation
                confirmation.scrollIntoView({ behavior: 'smooth' });
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    bookingForm.style.display = 'none';
                    confirmation.style.display = 'none';
                    document.getElementById('firstName').value = '';
                    document.getElementById('lastName').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('phone').value = '';
                    document.getElementById('departure').value = '';
                    document.getElementById('return').value = '';
                }, 3000);
            });
        });



document.addEventListener('DOMContentLoaded', function() {
    // Tabs-ka kala beddelka
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    
    // Nooca safarka (radio buttons)
    const tripRadios = document.querySelectorAll('input[name="trip"]');
    tripRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'oneway') {
                document.getElementById('return-date').disabled = true;
                document.getElementById('return-date').style.opacity = '0.5';
            } else {
                document.getElementById('return-date').disabled = false;
                document.getElementById('return-date').style.opacity = '1';
            }
        });
    });

    // Raadinta marka la gufo
    document.getElementById('search-btn').addEventListener('click', function(e) {
        e.preventDefault();
        
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const departDate = document.getElementById('depart-date').value;
        const returnDate = document.getElementById('return-date').value;
        const passengers = document.getElementById('passengers').value;
        const tripType = document.querySelector('input[name="trip"]:checked').value;
        const directOnly = document.getElementById('direct-flights').checked;
        
        // Halkan waxaad ku sameyn kartaa validation iyo form submission
        if (!origin || !destination || !departDate) {
            alert('Fadlan buuxi goobaha loo baahan yahay');
            return;
        }
        
        if (tripType !== 'oneway' && !returnDate) {
            alert('Fadlan geli taariikhda soo noqosho');
            return;
        }
        
        // Tusaale ahaan, halkan waxaad ku samayn kartaa redirect to search results
        // window.location.href = `https://example.com/search?origin=${origin}&destination=${destination}&depart=${departDate}&return=${returnDate}&passengers=${passengers}&trip=${tripType}&direct=${directOnly}`;
        
        // alert('Raadinta waxay shaqaynaysaa! Params: ' + 
        //       `Origin: ${origin}, Destination: ${destination}, Depart: ${departDate}, ` +
        //       `Return: ${returnDate}, Passengers: ${passengers}, Trip Type: ${tripType}, Direct: ${directOnly}`);
    });

    // Auto-completion suggestions (tusaale ahaan)
    const airports = ['MGQ', 'DXB', 'DXG', 'JFK', 'LHR', 'CDG'];
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    
    function setupAutocomplete(input) {
        input.addEventListener('input', function() {
            const value = this.value.toUpperCase();
            if (value.length < 2) return;
            
            const filteredAirports = airports.filter(airport => 
                airport.includes(value)
            );
            
            // Halkan waxaad ku soo bandhin kartaa suggestions
            console.log('Suggestions:', filteredAirports);
        });
    }
    
    setupAutocomplete(originInput);
    setupAutocomplete(destinationInput);
});

// packages Hotel

 // hel foomka iyo button
  const searchBtn = document.querySelector('.search-btnss');

  // Marka la click gareeyo button-ka "Search Packages"
  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Soo qaad xogta
    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const travelers = document.getElementById('travelers').value.trim();
    const cabinClass = document.getElementById('cabinClass').value;
    const tripType = document.querySelector('input[name="trip"]:checked').nextSibling.textContent.trim();

    // Hubi in xog buuxdo
    if (!from || !to || !checkin || !checkout || !travelers) {
      alert("Fadlan buuxi xogta oo dhan!");
      return;
    }

    // Object xogta package
    const packageData = {
      from,
      to,
      checkin,
      checkout,
      travelers,
      cabinClass,
      tripType
    };

    // Qaado xogtii hore ee localStorage
    let packages = JSON.parse(localStorage.getItem('packagesHotelSearch')) || [];

    // Ku dar xogta cusub
    packages.push(packageData);

    // Keydi localStorage
    localStorage.setItem('packagesHotelSearch', JSON.stringify(packages));

    alert("Package booking waa la keydiyay ✅");

    // optional: clear form
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('checkin').value = '';
    document.getElementById('checkout').value = '';
    document.getElementById('travelers').value = '';
  });
// packages Hotel End
 


document.addEventListener("DOMContentLoaded", () => {
  const hotelSearchBtn = document.querySelector(".search-hotel");

  hotelSearchBtn.addEventListener("click", () => {
    const destination = document.querySelector(".destination").value;
    const checkin = document.querySelector(".checkin").value;
    const checkout = document.querySelector(".checkout").value;
    const roomTravelers = document.querySelector(".roomTravelers").value;

    // Haddii hore xog jirto, soo qaado. Haddii kale array cusub samee
    let hotelSearches = JSON.parse(localStorage.getItem("hotelSearches")) || [];

    // Dhis object xogta userka
    const searchData = {
      destination: destination,
      checkin: checkin,
      checkout: checkout,
      roomTravelers: roomTravelers,
      dateSaved: new Date().toLocaleString()
    };
    //   destination checkin checkout roomTravelers dateSaved
    // Ku dar xog cusub
    hotelSearches.push(searchData);

    // Dib ugu keydi localStorage
    localStorage.setItem("hotelSearches", JSON.stringify(hotelSearches));

 
  });
});

