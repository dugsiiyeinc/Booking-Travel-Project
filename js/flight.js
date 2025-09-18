
const PackageContainer=document.querySelector('.package-container');
const flightSearch=document.querySelector('.flight-search');
const PackagesTab=document.querySelector('#packages-tab');
const FlightsTab=document.querySelector('#flights-tab');
const flightsNow=document.querySelector('.flights-Now');
const SearchBtn=document.querySelector("#search-btn")
const flightResults=document.querySelector(".flight-results")
const containerCard=document.querySelector(".container-Card")
const searchBtnPackage=document.querySelector(".search-btn")
const container=document.querySelector(".container")
const searchBtnPack=document.querySelector(".search-btn")
const containerPack=document.querySelector(".container")

searchBtnPack.addEventListener("click",()=>{
    containerPack.style.display="block" 
})
FlightsTab.addEventListener('click',()=>{
    containerPack.style.display="none" 
    
})
flightsNow.addEventListener('click',()=>{
    containerPack.style.display="none"
})


// flight Book 
document.addEventListener('DOMContentLoaded', function() {
    // Hel dhammaan batoonnada "Select Flight"
    var selectButtons = document.querySelectorAll('.btn-details');
    
    // Ku dar dhagayso (event listener) batoon kasta
    selectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Hel macluumaadka diyaaradda
            var flightCard = this.closest('.flight-card');
            var airline = flightCard.querySelector('.flight-info p:nth-child(2)').textContent;
            var route = flightCard.querySelector('.flight-details p:nth-child(2)').textContent;
            var price = flightCard.querySelector('.price').textContent;
            var departureTime = flightCard.querySelector('.flight-info p:nth-child(1) strong').textContent;
            
            // Soo bandhig formka
            showBookingForm(airline, route, price, departureTime);
        });
    });
    
    // Functionka soo bandhigaya formka
    function showBookingForm(airline, route, price, departureTime) {
        // Haddii form hore uu yaallo → saar
        closeForm();

        // Samee formka
        var formHTML = `
            <div class="booking-form" id="flightBookingForm" 
                 style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        background: #122541; padding: 20px; border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.3); z-index: 1000; width: 300px;">
                <h2 style="color:#fff;">Book Your Flight</h2>
                <p style="color:#fff;"><strong>Airline:</strong> ${airline}</p>
                <p style="color:#fff;"><strong>Route:</strong> ${route}</p>
                <p style="color:#fff;"><strong>Price:</strong> ${price}</p>
                <p style="color:#fff;"><strong>Departure:</strong> ${departureTime}</p>
                
                <form id="flightBookingFormInner">
                    <div style="margin: 10px 0;">
                        <label style="color:#fff;">Full Name:</label>
                        <input type="text" name="name" required style="width: 100%; padding: 5px;">
                    </div>
                    <div style="margin: 10px 0;">
                        <label style="color:#fff;">Email:</label>
                        <input type="email" name="email" required style="width: 100%; padding: 5px;">
                    </div>
                      <div style="margin: 10px 0;">
                        <label style="color:#fff;">Phone Number:</label>
                        <input type="text" name="phone" required style="width: 100%; padding: 5px;">
                    </div>
                    <div style="margin: 10px 0;">
                        <label style="color:#fff;">Date:</label>
                        <input type="date" name="date" required style="width: 100%; padding: 5px;">
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <button type="submit" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Book Now</button>
                        <button type="button" onclick="closeForm()" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Close</button>
                    </div>
                </form>
            </div>
            <div class="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999;"></div>
        `;
        
        // Ku dar formka document-ka
        document.body.insertAdjacentHTML('beforeend', formHTML);
        
        // Ku dar dhagayso formka marka la submit gareeyo
        document.getElementById('flightBookingFormInner').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hel macluumaadka formka
            var formData = {
                name: this.querySelector('[name="name"]').value,
                email: this.querySelector('[name="email"]').value,
                Phone: this.querySelector('[name="phone"]').value,
                date: this.querySelector('[name="date"]').value,
                airline: airline,
                route: route,
                price: price,
                departureTime: departureTime,
                bookingDate: new Date().toISOString()
            };
            // Name,Email,airline,route,Price,departureTime,bookingData
            // Keydi macluumaadka localStorage-ka
            saveBooking(formData);
            
            // Xidh formka
            closeForm();
        });
    }
    
    // Functionka keydinta booking-ka
    function saveBooking(bookingData) {
        var existingBookings = JSON.parse(localStorage.getItem('flightBookings')) || [];
        existingBookings.push(bookingData);
        localStorage.setItem('flightBookings', JSON.stringify(existingBookings));
     
    }
});

// Functionka xidhida formka
function closeForm() {
    var form = document.querySelector('#flightBookingForm');
    var overlay = document.querySelector('.overlay');
    if (form) form.remove();
    if (overlay) overlay.remove();
}

// Functionka daawakinta dhammaan bookings-ka
function displayAllBookings() {
    var bookings = JSON.parse(localStorage.getItem('flightBookings')) || [];
    if (bookings.length === 0) {
        console.log('Ma jiro booking-ah');
        return;
    }
    
    console.log('Dhammaan Bookings-ka:');
    bookings.forEach(function(booking, index) {
        console.log('Booking ' + (index + 1) + ':');
        console.log('Magaca: ' + booking.name);
        console.log('Email: ' + booking.email);
        console.log('Taariikhda: ' + booking.date);
        console.log('Diyaarad: ' + booking.airline);
        console.log('Jidka: ' + booking.route);
        console.log('Qiimaha: ' + booking.price);
        console.log('Wakhtiga Bilaabanta: ' + booking.departureTime);
        console.log('Taariikhda Booking: ' + booking.bookingDate);
        console.log('----------------------');
    });
}

// Ku dar batoon daawakinta bookings-ka HTML-ka (optional)
document.addEventListener('DOMContentLoaded', function() {
    var showBookingsBtn = document.createElement('button');
    showBookingsBtn.style.position = 'fixed';
    showBookingsBtn.style.top = '10px';
    showBookingsBtn.style.right = '10px';
    showBookingsBtn.style.zIndex = '1000';
    showBookingsBtn.onclick = displayAllBookings;
    document.body.appendChild(showBookingsBtn);
});
// end flight 

//  Hotel packges
  document.addEventListener('DOMContentLoaded', function() {
            // Get all select buttonsm 
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
                    bookingForm.style.display = 'block';
                    
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
                const departure = document.getElementById('departure').value;
                const returnDate = document.getElementById('return').value;
                const adults = document.getElementById('adults').value;
                const children = document.getElementById('children').value;
                
                if (!firstName || !lastName || !email || !phone || !departure || !returnDate || !adults) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Create form data object
                const formData = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    departure,
                    returnDate,
                    adults,
                    children,
                    package: packageName.textContent,
                    bookedAt: new Date().toLocaleString()
                };
                
                // Get existing form data from localStorage
                const formDataArray = JSON.parse(localStorage.getItem('bookingFormData')) || [];
                
                // Add the new form data to the array
                formDataArray.push(formData);
                
                // Save back to localStorage
                localStorage.setItem('bookingFormData', JSON.stringify(formDataArray));
                
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
                    document.getElementById('adults').value = '';
                    document.getElementById('children').value = '0';
                }, 3000);
            });
            
        });
// end Hotel Packages




SearchBtn.addEventListener("click",()=>{
flightResults.style.display="block"


})


PackagesTab.addEventListener('click',()=>{
    PackageContainer.style.display='block';
    flightSearch.style.display='none';
    PackagesTab.classList.add('active');
    FlightsTab.classList.remove('active');
    flightResults.style.display="none"
})
flightsNow.addEventListener('click',()=>{
    PackageContainer.style.display='none';
    flightSearch.style.display='block';
    PackagesTab.classList.remove('active');
    FlightsTab.classList.add('active');
  containerCard.style.display="none"
})

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

document.addEventListener('DOMContentLoaded', function() {
    // Cabin class dropdown functionality
    const cabinClassLabel = document.querySelector('.cabin-class-label');
    const cabinClassDropdown = document.querySelector('.cabin-class-dropdown');
    
    cabinClassLabel.addEventListener('click', function() {
        cabinClassDropdown.style.display = cabinClassDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Handle cabin class selection
    const cabinOptions = document.querySelectorAll('.cabin-option');
    cabinOptions.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            let displayText = '';
            
            switch(value) {
                case 'economy':
                    displayText = 'Coach (Economy)';
                    break;
                case 'premium':
                    displayText = 'Premium Economy';
                    break;
                case 'business':
                    displayText = 'Business';
                    break;
                case 'first':
                    displayText = 'First Class';
                    break;
            }
            
            cabinClassLabel.textContent = displayText + ' ▼';
            cabinClassDropdown.style.display = 'none';
            
            // Store the selected value for form submission
            document.querySelector('input[name="cabin-class"]').value = value;
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.cabin-class-label') && !e.target.matches('.cabin-option')) {
            cabinClassDropdown.style.display = 'none';
        }
    });
    
    // Other existing functionality (tabs, trip type, search validation)
    // ... (keep the previous JavaScript code here)
    
    // Update search function to include cabin class
    document.getElementById('search-btn').addEventListener('click', function(e) {
        e.preventDefault();
 // default cabin class
let selectedCabin = "economy";

// marka option la doorto
document.querySelectorAll(".cabin-option").forEach(option => {
  option.addEventListener("click", () => {
    selectedCabin = option.dataset.value; // tusaale: "economy", "business"
    document.querySelector(".cabin-class-label").textContent = option.textContent + " ▼";
  });
});

// marka search la gujiyo
document.getElementById("search-btn").addEventListener("click", () => {
  console.log("Selected cabin class:", selectedCabin);

  const searchData = {
    tripType: document.querySelector('input[name="trip"]:checked').value,
    origin: document.getElementById("origin").value.trim(),
    destination: document.getElementById("destination").value.trim(),
    departDate: document.getElementById("depart-date").value,
    returnDate: document.getElementById("return-date").value,
    passengers: document.getElementById("passengers").value.trim(),
    cabinClass: selectedCabin
  };
    // tripType,  origin,   destination, departDate,    returnDate,  passengers, cabinClass
// Retrieve existing array or create new
      let flightArray = JSON.parse(localStorage.getItem("flightSearchArray")) || [];

      // Add new search
      flightArray.push(searchData);

      // Save updated array
      localStorage.setItem("flightSearchArray", JSON.stringify(flightArray));

});

        
        // Rest of your search functionality
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", () => {
    // Qaado xogta input-yada
    const origin = document.getElementById("origins").value.trim();
    const destination = document.getElementById("destinations").value.trim();
    const departDate = document.getElementById("depart-dates").value;
    const returnDate = document.getElementById("return-dates").value;
    const passengers = document.getElementById("passengerss").value.trim();

    // Trip type
    const tripType = document.querySelector('input[name="trip"]:checked').value;

    // Travel class
    const travelClass = document.getElementById("travel-class").value;

    // Diyaari object xogta userka
    const packageData = {
      origin,
      destination,
      departDate,
      returnDate,
      passengers,
      tripType,
      travelClass
    };

    // Haddii hore wax loo keydiyey, soo qaado array
    let storedPackages = JSON.parse(localStorage.getItem("packages")) || [];

    // Ku dar xog cusub
    storedPackages.push(packageData);

    // Dib ugu keydi localStorage
    localStorage.setItem("packages", JSON.stringify(storedPackages));

    console.log("Xog la keydiyey:", storedPackages);

  });
});
