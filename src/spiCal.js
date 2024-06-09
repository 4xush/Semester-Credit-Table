const gradeMapping = {
    'AA': 10,
    'AB': 9,
    'BB': 8,
    'BC': 7,
    'CC': 6,
    'CD': 5,
    'DD': 4
};

let currentSemester = 1; // Track the current semester

function selectSemester(semester) {
    currentSemester = semester; // Update the current semester
    const branch = document.getElementById('branch-selector').value;
    const tableBody = document.getElementById('semester-table').querySelector('tbody');
    const title = document.getElementById('semester-title');
    title.textContent = `SEMESTER ${semester} (${branch})`;

    tableBody.innerHTML = '';

    if (data[branch] && data[branch][semester]) {
        data[branch][semester].forEach(item => {
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
    }

    // Clear total and SPI fields
    document.getElementById('credit-total').textContent = '';
    document.getElementById('best-credit-total').textContent = '';
    document.getElementById('least-credit-total').textContent = '';
    document.getElementById('best-spi').textContent = '';
    document.getElementById('least-spi').textContent = '';
}

function updateTable() {
    selectSemester(currentSemester); // Use the current semester when updating the table
}

function calculateSPI() {
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
}

document.addEventListener('DOMContentLoaded', function() {
    updateTable();

    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const dark_overlay = document.getElementById('dark_overlay');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        dark_overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
        toggleBtn.style.display = sidebar.classList.contains('active') ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && !dark_overlay.contains(event.target)) {
            sidebar.classList.remove('active');
            dark_overlay.style.display = 'none';
            toggleBtn.style.display = 'block';
        }
    });
    dark_overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        dark_overlay.style.display = 'none';
        toggleBtn.style.display = 'block';
    });

    // Event listener for branch change
    document.getElementById('branch-selector').addEventListener('change', function() {
        updateTable();
    });

    // Event listener for semester change
    document.querySelectorAll('.semester-button').forEach(button => {
        button.addEventListener('click', function() {
            const semester = parseInt(this.textContent);
            selectSemester(semester);
        });
    });
});
