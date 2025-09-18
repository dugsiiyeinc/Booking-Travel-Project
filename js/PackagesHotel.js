// Soo bandhig data localStorage
function loadPackages() {
  const tbody = document.getElementById("packagesTbody");
  tbody.innerHTML = "";

  let packages = JSON.parse(localStorage.getItem("packagesHotelSearch")) || [];

    if (packages.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="14" style="text-align:center;">No bookings found</td>
          </tr>
        `;
        return;
    }

  packages.forEach((pkg, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pkg.from}</td>
      <td>${pkg.to}</td>
      <td>${pkg.checkin}</td>
      <td>${pkg.checkout}</td>
      <td>${pkg.travelers}</td>
      <td>${pkg.cabinClass}</td>
      <td>${pkg.tripType}</td>
      <td><button class="status-btn pending">Pending</button></td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    // Confirm / Pending toggle
    const statusBtn = row.querySelector(".status-btn");
    statusBtn.addEventListener("click", () => {
      if (statusBtn.classList.contains("pending")) {
        statusBtn.classList.remove("pending");
        statusBtn.classList.add("confirmed");
        statusBtn.textContent = "Confirmed";
      } else {
        statusBtn.classList.remove("confirmed");
        statusBtn.classList.add("pending");
        statusBtn.textContent = "Pending";
      }
    });

    // Delete action
    row.querySelector(".delete-btn").addEventListener("click", () => {
      packages.splice(index, 1);
      localStorage.setItem("packagesHotelSearch", JSON.stringify(packages));
      loadPackages(); // refresh
    });

    tbody.appendChild(row);
  });
}

// Marka page-ka la furo
document.addEventListener("DOMContentLoaded", loadPackages);
