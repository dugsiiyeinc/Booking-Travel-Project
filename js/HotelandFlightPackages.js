document.addEventListener("DOMContentLoaded", function () {
    loadDashboardBookings();
});

// Load all bookings
function loadDashboardBookings() {
    const dashboardBody = document.getElementById("dashboardBodyPackages");
    dashboardBody.innerHTML = "";

    const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];

    if (bookings.length === 0) {
        dashboardBody.innerHTML = `
          <tr>
            <td colspan="14" style="text-align:center;">No bookings found</td>
          </tr>
        `;
        return;
    }

   bookings.forEach((booking, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${booking.client.split(" ")[0]}</td>
      <td>${booking.client.split(" ")[1] || ""}</td>
      <td>${booking.email}</td>
      <td>${booking.phone}</td>
    <td>$${booking.totalPrice}</td>
      <td>${booking.departureDate}</td>
      <td>${booking.travelers}</td>
      <td>${booking.destination}</td>
      <td>${booking.bookingDate}</td>
      <td>${booking.specialRequests || "-"}</td>
      <td>
        <span class="status ${booking.status ? booking.status.toLowerCase() : 'pending'}">
          ${booking.status || "Pending"}
        </span>
      </td>
      <td>
        <button class="action-btn confirm-btn" data-index="${index}" data-status="Confirmed">Confirm</button>
        <button class="action-btn pending-btn" data-index="${index}" data-status="Pending">Pending</button>
        <button class="action-btn delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    dashboardBody.appendChild(row);
});

// 🎯 Event delegation for buttons
dashboardBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("action-btn")) {
        const index = e.target.getAttribute("data-index");
        let bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];

        if (e.target.classList.contains("delete-btn")) {
            // Delete booking
            bookings.splice(index, 1);
        } else {
            // Update status
            const newStatus = e.target.getAttribute("data-status");
            bookings[index].status = newStatus;
        }

        // Save changes
        localStorage.setItem("travelBookings", JSON.stringify(bookings));

        // Reload table
        loadDashboardBookings();
    }
});
}

