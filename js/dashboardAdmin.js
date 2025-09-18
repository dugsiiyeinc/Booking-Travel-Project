const FlightPackages = document.querySelector(".Flight-Packages");
const dashboardContainer = document.querySelector(".dashboard-container");
const cardGrid = document.querySelector(".card-grid");
const chartContainer = document.querySelector(".chart-container");
const dashboard = document.querySelector(".dash");
const hotelPackages = document.querySelector(".hotel-Packages");
const dashboardContainerPack = document.querySelector(
  ".dashboard-containerPack"
);
const dashboardContainers = document.querySelector(".dashboard-containers");
const dashboardContainerSearch = document.querySelector(
  ".dashboard-containerSearch"
);
const dashboardContainerDataSearch = document.querySelector(
  ".dashboard-containerDataSearch"
);
const SearchFlights = document.querySelector(".SearchFlights");
const dashboardContainerHotel = document.querySelector(
  ".dashboard-container-Hotel"
);
const dashboardContainerHotelSearch = document.querySelector(
  ".dashboard-container-Hotel-Search"
);
const HotelSearchs = document.querySelector(".Hotel-Search");
const dashboardContainerPeyment = document.querySelector(
  ".dashboard-container-Peyment"
);
const PaymentBook = document.querySelector(".Payment-Book");
const contactDashboard = document.querySelector(".contact-dashboard");
const ContactInfo = document.querySelector(".Contact-Info");
const dashboardCustomers = document.querySelector(".dashboard-Customers");
const Customers = document.querySelector(".Customers");

Customers.addEventListener("click", () => {
  dashboardCustomers.style.display = "block";
  contactDashboard.style.display = "none";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
});

ContactInfo.addEventListener("click", () => {
  contactDashboard.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  dashboardCustomers.style.display = "none";
});

PaymentBook.addEventListener("click", () => {
  dashboardContainerPeyment.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});

HotelSearchs.addEventListener("click", () => {
  dashboardContainerHotel.style.display = "block";
  dashboardContainerHotelSearch.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});

SearchFlights.addEventListener("click", () => {
  dashboardContainerSearch.style.display = "block";
  dashboardContainerDataSearch.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainer.style.display = "none";
  dashboardContainerPack.style.display = "none";
  dashboardContainers.style.display = "none";
  dashboardContainer.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});
hotelPackages.addEventListener("click", () => {
  dashboardContainerPack.style.display = "block";
  dashboardContainers.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainer.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});

FlightPackages.addEventListener("click", () => {
  dashboardContainer.style.display = "block";
  cardGrid.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainerPack.style.display = "none";
  dashboardContainers.style.display = "none";
  chartContainer.style.display = "none";
  dashboardContainer.style.display = "block";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});
dashboard.addEventListener("click", () => {
  cardGrid.style.display = "block";
  cardGrid.style.display = "grid";
  cardGrid.style.gap = "30px";
  chartContainer.style.display = "block";
  dashboardContainer.style.display = "none";
  dashboardContainerPack.style.display = "none";
  dashboardContainerSearch.style.display = "none";
  dashboardContainerDataSearch.style.display = "none";
  dashboardContainerHotel.style.display = "none";
  dashboardContainerHotelSearch.style.display = "none";
  dashboardContainerPeyment.style.display = "none";
  contactDashboard.style.display = "none";
  dashboardCustomers.style.display = "none";
});

// Toggle sidebar on mobile
document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

// Display current date
const currentDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
document.getElementById("currentDate").textContent =
  currentDate.toLocaleDateString("en-US", options);

// Add active class to clicked menu items
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

// Revenue Chart
const ctx = document.getElementById("revenueChart").getContext("2d");
const revenueChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue (in $)",
        data: [
          12500, 19000, 18000, 22000, 19500, 24000, 26000, 31000, 28500, 29500,
          35200, 42890,
        ],
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "rgba(52, 152, 219, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(52, 152, 219, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(52, 152, 219, 1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

// Filter buttons functionality
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // Here you would typically update the chart data based on the selected filter
    // For demonstration, we'll just show an alert
    alert("Filter changed to: " + this.textContent);
  });
});

// packages data All
document.addEventListener("DOMContentLoaded", () => {
  // ===== Dashboard Packages =====
  const dashboardBody = document.getElementById("dashboardBody");
  const selectedPackages =
    JSON.parse(localStorage.getItem("selectedPackages")) || [];
  const bookingFormData =
    JSON.parse(localStorage.getItem("bookingFormData")) || [];

  const allData = bookingFormData.map((form, i) => ({
    hotelName: form.package || "",
    price: (selectedPackages[i] && selectedPackages[i].price) || "",
    location: (selectedPackages[i] && selectedPackages[i].location) || "",
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    status: "Pending",
  }));

  function renderDashboardTable() {
    dashboardBody.innerHTML = "";
    allData.forEach((data, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.hotelName}</td>
        <td>${data.price}</td>
        <td>${data.location}</td>
        <td>${data.firstName}</td>
        <td>${data.lastName}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td><span class="status ${data.status.toLowerCase()}">${
        data.status
      }</span></td>
        <td>
          <button class="action-btn confirm-btn">Confirm</button>
          <button class="action-btn pending-btn">Pending</button>
          <button class="action-btn delete-btn">Delete</button>
        </td>
      `;

      const [confirmBtn, pendingBtn, deleteBtn] =
        row.querySelectorAll("button");
      confirmBtn.addEventListener("click", () => {
        allData[index].status = "Confirmed";
        renderDashboardTable();
      });
      pendingBtn.addEventListener("click", () => {
        allData[index].status = "Pending";
        renderDashboardTable();
      });
      deleteBtn.addEventListener("click", () => {
        allData.splice(index, 1);
        renderDashboardTable();
      });

      dashboardBody.appendChild(row);
    });
  }

  renderDashboardTable();

  // ===== Flight Packages =====
  const flightBody = document.getElementById("flightBody");
  let storedPackages = JSON.parse(localStorage.getItem("packages")) || [];
  storedPackages = storedPackages.map((pkg) => ({
    ...pkg,
    status: pkg.status || "Pending",
  }));

  function renderFlightTable() {
    flightBody.innerHTML = "";
    storedPackages.forEach((pkg, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${pkg.origin}</td>
        <td>${pkg.destination}</td>
        <td>${pkg.departDate}</td>
        <td>${pkg.returnDate}</td>
        <td>${pkg.passengers}</td>
        <td>${pkg.tripType}</td>
        <td>${pkg.travelClass}</td>
        <td><span class="status ${pkg.status.toLowerCase()}">${
        pkg.status
      }</span></td>
        <td>
          <button class="action-btn confirm-btn">Confirm</button>
          <button class="action-btn pending-btn">Pending</button>
          <button class="action-btn delete-btn">Delete</button>
        </td>
      `;

      const [confirmBtn, pendingBtn, deleteBtn] =
        row.querySelectorAll("button");
      confirmBtn.addEventListener("click", () => {
        storedPackages[index].status = "Confirmed";
        renderFlightTable();
      });
      pendingBtn.addEventListener("click", () => {
        storedPackages[index].status = "Pending";
        renderFlightTable();
      });
      deleteBtn.addEventListener("click", () => {
        storedPackages.splice(index, 1);
        renderFlightTable();
      });

      flightBody.appendChild(row);
    });

    localStorage.setItem("packages", JSON.stringify(storedPackages));
  }

  renderFlightTable();
});
// end Flight packages

// packages hotel and flight

function showAllPackages() {
  const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
  const packages =
    JSON.parse(localStorage.getItem("packagesHotelSearch")) || [];
  const tbody = document.getElementById("packagesTableBody");
  tbody.innerHTML = "";

  // Ku dar bookings (travelBookings)
  bookings.forEach((b, index) => {
    const row = `
        <tr>
          <td>${b.hotelName || "-"}</td>
          <td>${b.totalPrice || b.price || "-"}</td>
          <td>${b.location || "-"}</td>
          <td>${b.client?.split(" ")[0] || "-"}</td>
          <td>${b.client?.split(" ")[1] || "-"}</td>
          <td>${b.email}</td>
          <td>${b.phone}</td>
          <td>${b.departureDate}</td>
          <td>${b.travelers}</td>
          <td>${b.destination}</td>
          <td>${b.bookingDate}</td>
          <td>${b.specialRequests}</td>
          <td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>
          <td class="${
            b.status === "confirmed"
              ? "status-confirmed"
              : b.status === "pending"
              ? "status-pending"
              : "status-none"
          }">
            ${b.status || "Not set"}
          </td>
          <td>
            <button class="action-btn btn-confirmed" onclick="updateStatus(${index}, 'confirmed')">Confirmed</button>
            <button class="action-btn btn-pending" onclick="updateStatus(${index}, 'pending')">Pending</button>
            <button class="action-btn btn-delete" onclick="deleteBooking(${index})">Delete</button>
          </td>
        </tr>`;
    tbody.innerHTML += row;
  });

  // Ku dar packagesHotelSearch
  packages.forEach((p, index) => {
    const row = `
        <tr>
          <td>-</td><td>-</td><td>-</td>
          <td>-</td><td>-</td><td>-</td><td>-</td>
          <td>-</td><td>${p.travelers}</td>
          <td>-</td><td>-</td><td>-</td>
          <td>${p.from}</td>
          <td>${p.to}</td>
          <td>${p.checkin}</td>
          <td>${p.checkout}</td>
          <td>${p.cabinClass}</td>
          <td>${p.tripType}</td>
          <td class="${
            p.status === "confirmed"
              ? "status-confirmed"
              : p.status === "pending"
              ? "status-pending"
              : "status-none"
          }">
            ${p.status || "Not set"}
          </td>
          <td>
            <button class="action-btn btn-confirmed" onclick="updatePackageStatus(${index}, 'confirmed')">Confirmed</button>
            <button class="action-btn btn-pending" onclick="updatePackageStatus(${index}, 'pending')">Pending</button>
            <button class="action-btn btn-delete" onclick="deletePackage(${index})">Delete</button>
          </td>
        </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById("packagesContainer").style.display = "block";
}

// Update status bookings
function updateStatus(index, status) {
  let bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
  if (bookings[index]) {
    bookings[index].status = status;
    localStorage.setItem("travelBookings", JSON.stringify(bookings));
    showAllPackages();
  }
}

// Delete booking
function deleteBooking(index) {
  let bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
  bookings.splice(index, 1);
  localStorage.setItem("travelBookings", JSON.stringify(bookings));
  showAllPackages();
}

// Update status packagesHotelSearch
function updatePackageStatus(index, status) {
  let packages = JSON.parse(localStorage.getItem("packagesHotelSearch")) || [];
  if (packages[index]) {
    packages[index].status = status;
    localStorage.setItem("packagesHotelSearch", JSON.stringify(packages));
    showAllPackages();
  }
}

// Delete package
function deletePackage(index) {
  let packages = JSON.parse(localStorage.getItem("packagesHotelSearch")) || [];
  packages.splice(index, 1);
  localStorage.setItem("packagesHotelSearch", JSON.stringify(packages));
  showAllPackages();
}

// Event menu button (haddii aad leedahay button sidebar ka)
document
  .getElementById("packagesMenuBtn")
  ?.addEventListener("click", showAllPackages);
// end packages hotel and flight

// flight search
function loadFlightBookings() {
  const tbody = document.getElementById("flightDashboardBody");
  tbody.innerHTML = "";

  let bookings = JSON.parse(localStorage.getItem("flightBookings")) || [];

  bookings.forEach((booking, index) => {
    if (!booking.status) booking.status = "Pending";

    const row = document.createElement("tr");
    row.innerHTML = `
            <td data-label="Name">${booking.name}</td>
            <td data-label="Email">${booking.email}</td>
            <td data-label="Phone">${booking.Phone}</td>
            <td data-label="Airline">${booking.airline}</td>
            <td data-label="Route">${booking.route}</td>
            <td data-label="Price">${booking.price}</td>
            <td data-label="Departure Time">${booking.departureTime}</td>
            <td data-label="Booking Date">${new Date(
              booking.bookingDate
            ).toLocaleString()}</td>
            <td data-label="Status">
                <button class="status-btn ${booking.status.toLowerCase()}">${
      booking.status
    }</button>
            </td>
            <td data-label="Action">
                <button class="delete-btn">Delete</button>
            </td>
        `;

    // Toggle Status
    row.querySelector(".status-btn").addEventListener("click", () => {
      booking.status = booking.status === "Pending" ? "Confirmed" : "Pending";
      bookings[index] = booking;
      localStorage.setItem("flightBookings", JSON.stringify(bookings));
      loadFlightBookings();
    });

    // Delete Booking
    row.querySelector(".delete-btn").addEventListener("click", () => {
      bookings.splice(index, 1);
      localStorage.setItem("flightBookings", JSON.stringify(bookings));
      loadFlightBookings();
    });

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadFlightBookings);

// flight search End

// flight data Search
function loadFlightSearchDashboard() {
  const tbody = document.getElementById("flightSearchDashboardBody");
  tbody.innerHTML = "";

  let searches = JSON.parse(localStorage.getItem("flightSearchArray")) || [];

  searches.forEach((search, index) => {
    if (!search.status) search.status = "Pending";

    const row = document.createElement("tr");
    row.innerHTML = `
            <td data-label="Trip Type">${search.tripType}</td>
            <td data-label="Origin">${search.origin}</td>
            <td data-label="Destination">${search.destination}</td>
            <td data-label="Depart Date">${search.departDate}</td>
            <td data-label="Return Date">${search.returnDate}</td>
            <td data-label="Passengers">${search.passengers}</td>
            <td data-label="Cabin Class">${search.cabinClass}</td>
            <td data-label="Status">
                <button class="status-btn ${search.status.toLowerCase()}">${
      search.status
    }</button>
            </td>
            <td data-label="Action">
                <button class="delete-btn">Delete</button>
            </td>
        `;

    // Toggle Status
    row.querySelector(".status-btn").addEventListener("click", () => {
      search.status = search.status === "Pending" ? "Confirmed" : "Pending";
      searches[index] = search;
      localStorage.setItem("flightSearchArray", JSON.stringify(searches));
      loadFlightSearchDashboard();
    });

    // Delete Search
    row.querySelector(".delete-btn").addEventListener("click", () => {
      searches.splice(index, 1);
      localStorage.setItem("flightSearchArray", JSON.stringify(searches));
      loadFlightSearchDashboard();
    });

    tbody.appendChild(row);
  });
}

// Load dashboard on DOMContentLoaded
document.addEventListener("DOMContentLoaded", loadFlightSearchDashboard);

// flight data Search End

// Hotel Search
function loadHotelDashboard() {
  const tbody = document.getElementById("hotelDashboardBody");
  tbody.innerHTML = "";

  // Get hotel form data and selected packages
  const hotelForms = JSON.parse(localStorage.getItem("HotelFormData")) || [];
  const selectedPackages =
    JSON.parse(localStorage.getItem("selectedPackages")) || [];

  // Merge data based on package selection (optional: last selected)
  hotelForms.forEach((form, index) => {
    const selected = selectedPackages[index] || {};

    if (!form.status) form.status = "Pending";

    const row = document.createElement("tr");
    row.innerHTML = `
            <td data-label="First Name">${form.firstName}</td>
            <td data-label="Last Name">${form.lastName}</td>
            <td data-label="Email">${form.email}</td>
            <td data-label="Phone">${form.phone}</td>
              <td data-label="Hotel Name">${selected.hotelName || ""}</td>
                <td data-label="Booked At">${form.bookedAt}</td>
            <td data-label="Price">${selected.price || ""}</td>
            <td data-label="Location">${selected.location || ""}</td>
            <td data-label="CheckIn">${form.CheckIn}</td>
            <td data-label="Checkout">${form.checkout}</td>
            <td data-label="Adults">${form.adults}</td>
            <td data-label="Children">${form.children}</td>
            <td data-label="Status">
                <button class="status-btn ${form.status.toLowerCase()}">${
      form.status
    }</button>
            </td>
            <td data-label="Action">
                <button class="delete-btn">Delete</button>
            </td>
        `;

    // Toggle status
    row.querySelector(".status-btn").addEventListener("click", () => {
      form.status = form.status === "Pending" ? "Confirmed" : "Pending";
      hotelForms[index] = form;
      localStorage.setItem("HotelFormData", JSON.stringify(hotelForms));
      loadHotelDashboard();
    });

    // Delete booking
    row.querySelector(".delete-btn").addEventListener("click", () => {
      hotelForms.splice(index, 1);
      selectedPackages.splice(index, 1);
      localStorage.setItem("HotelFormData", JSON.stringify(hotelForms));
      localStorage.setItem(
        "selectedPackages",
        JSON.stringify(selectedPackages)
      );
      loadHotelDashboard();
    });

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadHotelDashboard);

// Hotel Search End

// Hotel Search Data
document.addEventListener("DOMContentLoaded", () => {
  const hotelSearchBody = document.getElementById("hotelSearchBody");

  function renderHotelSearches() {
    hotelSearchBody.innerHTML = "";
    let hotelSearches = JSON.parse(localStorage.getItem("hotelSearches")) || [];

    hotelSearches.forEach((search, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${search.destination}</td>
        <td>${search.checkin}</td>
        <td>${search.checkout}</td>
        <td>${search.roomTravelers}</td>
        <td>${search.dateSaved}</td>
        <td><span class="status ${search.status || "pending"}">${
        search.status || "Pending"
      }</span></td>
        <td>
          <button class="action-btn confirm-btn" data-index="${index}">Confirm</button>
          <button class="action-btn pending-btn" data-index="${index}">Pending</button>
          <button class="action-btn delete-btn" data-index="${index}">Delete</button>
        </td>
      `;
      hotelSearchBody.appendChild(row);
    });
  }

  // Auto-load when page loads
  renderHotelSearches();

  // Handle actions
  hotelSearchBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("confirm-btn")) {
      updateStatus(e.target.dataset.index, "confirmed");
    }
    if (e.target.classList.contains("pending-btn")) {
      updateStatus(e.target.dataset.index, "pending");
    }
    if (e.target.classList.contains("delete-btn")) {
      deleteRow(e.target.dataset.index);
    }
  });

  function updateStatus(index, status) {
    let hotelSearches = JSON.parse(localStorage.getItem("hotelSearches")) || [];
    hotelSearches[index].status = status;
    localStorage.setItem("hotelSearches", JSON.stringify(hotelSearches));
    renderHotelSearches();
  }

  function deleteRow(index) {
    let hotelSearches = JSON.parse(localStorage.getItem("hotelSearches")) || [];
    hotelSearches.splice(index, 1);
    localStorage.setItem("hotelSearches", JSON.stringify(hotelSearches));
    renderHotelSearches();
  }
});

// Hotel Search Data End

// peyment
document.addEventListener("DOMContentLoaded", () => {
  displayDashboardBookings();

  function displayDashboardBookings() {
    const bookingsBody = document.getElementById("bookingsBody");
    const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
    bookingsBody.innerHTML = "";

    if (bookings.length === 0) {
      bookingsBody.innerHTML = `<tr><td colspan="12">No bookings found</td></tr>`;
      return;
    }

    bookings.forEach((booking, index) => {
      const row = document.createElement("tr");

      // haddii booking aanu lahayn status, default = Pending
      if (!booking.status) booking.status = "Pending";

      row.innerHTML = `
        <td>${booking.firstName}</td>
        <td>${booking.lastName}</td>
        <td>${booking.email}</td>
        <td>${booking.phone}</td>
        <td>${booking.destination}</td>
        <td>${booking.departure}</td>
        <td>${booking.return}</td>
        <td>${booking.travelers}</td>
        <td>${booking.paymentMethod}</td>
        <td>${booking.timestamp}</td>
        <td>
          <span class="status ${booking.status.toLowerCase()}">${
        booking.status
      }</span>
        </td>
        <td>
          <button class="confirm-btn" data-index="${index}">Confirm</button>
          <button class="pending-btn" data-index="${index}">Pending</button>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </td>
      `;

      bookingsBody.appendChild(row);
    });

    // Action buttons
    document.querySelectorAll(".confirm-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        updateStatus(this.dataset.index, "Confirmed");
      });
    });

    document.querySelectorAll(".pending-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        updateStatus(this.dataset.index, "Pending");
      });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        deleteBooking(this.dataset.index);
      });
    });
  }

  function updateStatus(index, status) {
    const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
    bookings[index].status = status;
    localStorage.setItem("travelBookings", JSON.stringify(bookings));
    displayDashboardBookings();
  }

  function deleteBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
    bookings.splice(index, 1);
    localStorage.setItem("travelBookings", JSON.stringify(bookings));
    displayDashboardBookings();
  }
});

// End Peyment

/* contact Info */
document.addEventListener("DOMContentLoaded", function () {
  displayContactData();
});

function displayContactData() {
  const tableBody = document.getElementById("contactTableBody");
  const allContacts = JSON.parse(localStorage.getItem("ContactUs")) || [];

  tableBody.innerHTML = ""; // Clear table

  allContacts.forEach((contact, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td data-label="First Name">${contact.contactName}</td>
            <td data-label="Last Name">${contact.contactLastName}</td>
            <td data-label="Email">${contact.contactEmail}</td>
            <td data-label="Phone">${contact.contactPhone}</td>
            <td data-label="Message">${contact.contactTextMass}</td>
            <td data-label="Actions">
                <button class="delete-btn">Delete</button>
            </td>
        `;
    tableBody.appendChild(tr);

    // Action buttons

    const deleteBtn = tr.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      allContacts.splice(index, 1);
      saveAndRefresh();
    });

    function saveAndRefresh() {
      localStorage.setItem("ContactUs", JSON.stringify(allContacts));
      displayContactData();
    }
  });
}

/* contact Info End */

// logout

const LogOuts = document.querySelector(".Logout");

LogOuts.addEventListener("click", () => {
  const allDataUser = JSON.parse(localStorage.getItem("userData")) || [];
  console.log("online data", allDataUser);
  localStorage.removeItem("userData");
  window.location.href = "/index.html";
});

// all Customers

window.addEventListener("DOMContentLoaded", () => {
  const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
  const tbody = document.getElementById("dashboard-Customer-Tbody");

  // Haddii wax booking ah la waayo
  if (bookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No bookings found</td></tr>`;
    return;
  }

  // Soo saar booking kasta
  bookings.forEach((booking, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${booking.firstName || "N/A"}</td>
        <td>${booking.lastName || "N/A"}</td>
        <td>${booking.email || "N/A"}</td>
        <td>${booking.phone || "N/A"}</td>

        <td>
          <button class="btn-delete" data-id="${index}">🗑️ Delete</button>
        </td>
      `;
    tbody.appendChild(row);
  });

  // Delete action
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      bookings.splice(id, 1);
      localStorage.setItem("travelBookings", JSON.stringify(bookings));
      location.reload(); // Refresh table
    });
  });
});

// End All Customers

  // Data ka soo qaado localStorage
  const bookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
  const packages = JSON.parse(localStorage.getItem("packages")) || [];
  const contacts = JSON.parse(localStorage.getItem("ContactUs")) || [];
  const customers = JSON.parse(localStorage.getItem("HotelFormData")) || [];
  const revenue = JSON.parse(localStorage.getItem("flightBookings")) || [];



  // Update Stats UI
  document.getElementById("totalBookings").textContent = bookings.length;
  document.getElementById("totalRevenue").textContent = "$" + revenue.length
  document.getElementById("totalPackages").textContent = packages.length;
  document.getElementById("totalCustomers").textContent = customers.length;
  document.getElementById("totalContacts").textContent = contacts.length;