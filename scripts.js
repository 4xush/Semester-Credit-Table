const data = {
    ECE: [
        { id: 1, subject: 'EC-243', credit: 6 },
        { id: 2, subject: 'EC-251', credit: 8 },
        { id: 3, subject: 'MA-204', credit: 6 },
        { id: 4, subject: 'SC-202', credit: 6 },
        { id: 5, subject: 'HS-XXX', credit: 6 },
        { id: 6, subject: 'CS-204', credit: 6 },
        { id: 7, subject: 'EC-252', credit: 3 },
        { id: 8, subject: 'EC-244', credit: 3 }
    ],
    CSE: [
        { id: 1, subject: 'CS-205', credit: 6 },
        { id: 2, subject: 'CS-231', credit: 6 },
        { id: 3, subject: 'CS-232', credit: 3 },
        { id: 4, subject: 'CS-235', credit: 6 },
        { id: 5, subject: 'CS-236', credit: 3 },
        { id: 6, subject: 'CS-240', credit: 6 },
        { id: 7, subject: 'CS-241', credit: 4 },
        { id: 8, subject: 'SC-202', credit: 6 },
        { id: 9, subject: 'HSS-XXX', credit: 6 }
    ]
};

const gradeMapping = {
    'AA': 10,
    'AB': 9,
    'BB': 8,
    'BC': 7,
    'CC': 6,
    'CD': 5,
    'DD': 4
};

function updateTable() {
    const branch = document.getElementById('branch-selector').value;
    const tableBody = document.getElementById('semester-table').querySelector('tbody');
    const title = document.getElementById('semester-title');
    title.textContent = `SEMESTER IV (${branch})`;

    tableBody.innerHTML = '';

    data[branch].forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.subject}</td>
            <td>${item.credit}</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
        `;
        tableBody.appendChild(row);
    });

    // Clear total and SPI fields
    document.getElementById('credit-total').textContent = '';
    document.getElementById('best-credit-total').textContent = '';
    document.getElementById('least-credit-total').textContent = '';
    document.getElementById('best-spi').textContent = '';
    document.getElementById('least-spi').textContent = '';
}

function calculateSPI() {
    console.log('calculateSPI() called'); // Add this line for debugging

    let bestcreditTotal = 0;
    let leastcreditTotal = 0;
    let totalCredit = 0;

    const rows = document.querySelectorAll('#semester-table tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const credits = parseFloat(cells[2].textContent);
        const bestGrade = gradeMapping[cells[3].textContent.trim().toUpperCase()] || 0;
        const leastGrade = gradeMapping[cells[4].textContent.trim().toUpperCase()] || 0;

        if (!isNaN(credits)) {
            totalCredit += credits;
        }

        if (!isNaN(bestGrade) && bestGrade !== 0) {
            bestcreditTotal += bestGrade * credits;
        }

        if (!isNaN(leastGrade) && leastGrade !== 0) {
            leastcreditTotal += leastGrade * credits;
        }
    });

    const bestSPI = bestcreditTotal / totalCredit;
    const leastSPI = leastcreditTotal / totalCredit;

    document.getElementById('credit-total').textContent = totalCredit.toFixed(1);
    document.getElementById('best-credit-total').textContent = bestcreditTotal.toFixed(1);
    document.getElementById('least-credit-total').textContent = leastcreditTotal.toFixed(1);
    document.getElementById('best-spi').textContent = bestSPI.toFixed(2);
    document.getElementById('least-spi').textContent = leastSPI.toFixed(2);

    console.log('Best SPI:', bestSPI); // Add this line for debugging
    console.log('Least SPI:', leastSPI); // Add this line for debugging
}

// Initialize the table with default branch (ECE)
updateTable();
