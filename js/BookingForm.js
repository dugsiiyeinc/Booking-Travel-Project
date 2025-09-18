  document.addEventListener('DOMContentLoaded', function() {
            // Initialize bookings array in localStorage if not exists
            if (!localStorage.getItem('travelBookings')) {
                localStorage.setItem('travelBookings', JSON.stringify([]));
            }
            
            // Load and display saved bookings
            displayBookings();
            
            // Payment method selection
            const paymentMethods = document.querySelectorAll('.payment-method');
            const paymentDetails = document.querySelectorAll('.payment-details');
            
            paymentMethods.forEach(method => {
                method.addEventListener('click', function() {
                    // Remove active class from all methods
                    paymentMethods.forEach(m => m.classList.remove('active'));
                    
                    // Add active class to clicked method
                    this.classList.add('active');
                    
                    // Hide all payment details
                    paymentDetails.forEach(detail => detail.classList.remove('active'));
                    
                    // Show the selected payment details
                    const methodName = this.getAttribute('data-method');
                    document.getElementById(`${methodName}-details`).classList.add('active');
                });
            });
            
            // Save data to localStorage when Pay Now is clicked
            document.getElementById('payNow').addEventListener('click', function() {
                if (validateForm()) {
                    saveBookingToLocalStorage();
                    showNotification('Booking saved successfully!');
                    
                    // Clear form if save info is not checked
                    if (!document.getElementById('saveInfo').checked) {
                        clearForm();
                    }
                    
                    // Refresh bookings list
                    displayBookings();
                }
            });
            
            function validateForm() {
                // Simple validation - check if required fields are filled
                const firstName = document.getElementById('firstName').value;
                const email = document.getElementById('email').value;
                const destination = document.getElementById('destination').value;
                
                if (!firstName || !email || !destination) {
                    alert('Please fill in all required fields');
                    return false;
                }
                
                // Check if a payment method is selected
                const activeMethod = document.querySelector('.payment-method.active');
                if (!activeMethod) {
                    alert('Please select a payment method');
                    return false;
                }
                
                return true;
            }
            
            function saveBookingToLocalStorage() {
                // Get existing bookings
                const bookings = JSON.parse(localStorage.getItem('travelBookings'));
                
                // Create new booking object
                const newBooking = {
                    id: Date.now(), // Unique ID based on timestamp
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    destination: document.getElementById('destination').value,
                    departure: document.getElementById('departure').value,
                    return: document.getElementById('return').value,
                    travelers: document.getElementById('travelers').value,
                    paymentMethod: document.querySelector('.payment-method.active').getAttribute('data-method'),
                    timestamp: new Date().toLocaleString()
                };
                
                // Save payment details based on selected method
                const method = newBooking.paymentMethod;
                if (method === 'sahal') {
                    newBooking.paymentNumber = document.getElementById('sahalNumber').value;
                } else if (method === 'zaad') {
                    newBooking.paymentNumber = document.getElementById('zaadNumber').value;
                } else if (method === 'evc') {
                    newBooking.paymentNumber = document.getElementById('evcNumber').value;
                } else if (method === 'edahab') {
                    newBooking.paymentNumber = document.getElementById('edahabNumber').value;
                } else if (method === 'credit') {
                    newBooking.cardNumber = document.getElementById('cardNumber').value;
                    newBooking.expiry = document.getElementById('expiry').value;
                    newBooking.cvv = document.getElementById('cvv').value;
                    newBooking.cardName = document.getElementById('cardName').value;
                }
                
                // Add new booking to array
                bookings.push(newBooking);
                
                // Save updated array to localStorage
                localStorage.setItem('travelBookings', JSON.stringify(bookings));
            }
            
            function displayBookings() {
                const bookingsList = document.getElementById('bookingsList');
                const bookings = JSON.parse(localStorage.getItem('travelBookings'));
                
                // Clear current list
                bookingsList.innerHTML = '';
                
                if (bookings.length === 0) {
                    bookingsList.innerHTML = `
                        <div class="empty-bookings">
                            <i class="fas fa-plane"></i>
                            <p>No bookings found</p>
                            <p>Your travel bookings will appear here</p>
                        </div>
                    `;
                    return;
                }
                
                // Add each booking to the list
                bookings.forEach(booking => {
                    const bookingElement = document.createElement('div');
                    bookingElement.className = 'booking-card';
                    bookingElement.innerHTML = `
                        <div class="booking-header">
                            <div class="booking-title">${booking.destination}</div>
                            <div class="booking-date">${booking.timestamp}</div>
                        </div>
                        <div class="booking-details">
                            <div>${booking.firstName} ${booking.lastName}</div>
                            <div>${booking.travelers} traveler(s)</div>
                            <div>${booking.departure} to ${booking.return}</div>
                        </div>
                        <div class="booking-payment">
                            <div>Paid with ${booking.paymentMethod}</div>
                            <button class="delete-btn" data-id="${booking.id}">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    `;
                    bookingsList.appendChild(bookingElement);
                });
                
                // Add event listeners to delete buttons
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = parseInt(this.getAttribute('data-id'));
                        deleteBooking(id);
                    });
                });
            }
            
            function deleteBooking(id) {
                // Get existing bookings
                let bookings = JSON.parse(localStorage.getItem('travelBookings'));
                
                // Filter out the booking with the given ID
                bookings = bookings.filter(booking => booking.id !== id);
                
                // Save updated array to localStorage
                localStorage.setItem('travelBookings', JSON.stringify(bookings));
                
                // Refresh bookings list
                displayBookings();
                
                showNotification('Booking deleted successfully!');
            }
            
            function clearForm() {
                document.getElementById('firstName').value = '';
                document.getElementById('lastName').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('destination').value = '';
                document.getElementById('departure').value = '';
                document.getElementById('return').value = '';
                document.getElementById('travelers').value = '1';
                
                // Clear payment details
                document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
                document.querySelectorAll('.payment-details').forEach(d => d.classList.remove('active'));
                document.getElementById('sahalNumber').value = '';
                document.getElementById('zaadNumber').value = '';
                document.getElementById('evcNumber').value = '';
                document.getElementById('edahabNumber').value = '';
                document.getElementById('cardNumber').value = '';
                document.getElementById('expiry').value = '';
                document.getElementById('cvv').value = '';
                document.getElementById('cardName').value = '';
            }
            
            function showNotification(message) {
                const notification = document.getElementById('notification');
                notification.textContent = message;
                notification.style.display = 'block';
                
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);
            }
        });