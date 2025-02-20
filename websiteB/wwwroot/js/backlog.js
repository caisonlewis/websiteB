document.addEventListener("DOMContentLoaded", function () {
    const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_8GjusRyriiaDDvWaf3PChVBadOyi5C-q5iP-gCV0vjXZqcHbZDsKi6DT3P_s1JbiA74XvB9VO2d4/pub?output=csv";

    fetch(sheetURL)
        .then(response => response.text())
        .then(data => {
            const tableBody = document.querySelector("#backlog-table tbody");
            if (!tableBody) {
                console.error("Error: Table body not found.");
                return;
            }

            const rows = data.split("\n").map(row => row.split(",").map(cell => cell.trim()));

            if (rows.length < 2) {
                console.error("Error: No valid data found in the spreadsheet.");
                return;
            }

            rows.slice(1).forEach(row => {
                if (row.length >= 6) { // Ensure at least 6 columns exist
                    const newRow = document.createElement("tr");

                    row.forEach((column, index) => {
                        let cell = document.createElement("td");
                        cell.textContent = column;

                        // Apply styling for the Platform column
                        if (index === 1) {
                            let platformClass = column.toLowerCase().replace(/\s+/g, "-");
                            // Rename "3DS" to "threeDS" to avoid CSS class issues
                            if (platformClass === "nintendo-3ds") {
                                platformClass = "threeDS";
                            }

                            cell.classList.add("platform", platformClass);
                        }

                        // Apply styling for the Priority column
                        if (index === 2) {
                            let priorityClass = column.toLowerCase().replace(/\s+/g, "-");
                            cell.classList.add(priorityClass);
                        }

                        // Apply styling for the Started? column
                        if (index === 5) {
                            cell.classList.add(column.toLowerCase() === "yes" ? "yes-completed" : "no-completed");
                        }

                        newRow.appendChild(cell);
                    });

                    tableBody.appendChild(newRow);
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
