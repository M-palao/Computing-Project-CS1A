const toggledDiv = document.getElementById('unveil');
toggledDiv.style.display = 'none';


const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
  toggle();
  // Check the current display state
  if (toggledDiv.style.display === 'none' || toggledDiv.style.display === '') {
    // If hidden, show it
    toggledDiv.style.display = 'block'; 
  } else {
    // If visible, hide it
    toggledDiv.style.display = 'none';
  }
  
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  });
}

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = toggled ? 0 : 1;
  
  tile.onclick = e => handleOnClick(index);
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 100 : 50;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();

let employeeData = [];

let nextEmpNo = 3;

function calculatePay(days, rate, deduction) {
    const grossPay = days * rate;
    const netPay = grossPay - deduction;
    return { grossPay: grossPay, netPay: netPay };
}

function renderTable() {
    const tbody = document.getElementById('payroll-body');
    tbody.innerHTML = ''; 

    employeeData.forEach(employee => {
        const tr = document.createElement('tr');
        
        tr.innerHTML += `<td class="ndata">${employee.empNo}</td>`;
        tr.innerHTML += `<td>${employee.name}</td>`;
        tr.innerHTML += `<td class="ndata">${employee.daysWorked}</td>`;
        tr.innerHTML += `<td class="ndata">${employee.dailyRate.toFixed(2)}</td>`;
        tr.innerHTML += `<td class="ndata">${employee.grossPay.toFixed(2)}</td>`;
        tr.innerHTML += `<td class="ndata">${employee.deduction.toFixed(2)}</td>`;
        tr.innerHTML += `<td class="ndata">${employee.netPay.toFixed(2)}</td>`;
        
        tbody.appendChild(tr);
    });

    updateTotals();
}

function updateTotals() {
    let totalGross = 0;
    let totalDeduct = 0;
    let totalNet = 0;

    employeeData.forEach(employee => {
        totalGross += employee.grossPay;
        totalDeduct += employee.deduction;
        totalNet += employee.netPay;
    });

    document.getElementById('gross-total').textContent = totalGross.toFixed(2);
    document.getElementById('deduct-total').textContent = totalDeduct.toFixed(2);
    document.getElementById('net-total').textContent = totalNet.toFixed(2);
}

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const daysWorked = parseFloat(document.getElementById('days_worked').value);
    const dailyRate = parseFloat(document.getElementById('daily_rate').value);
    const deduction = parseFloat(document.getElementById('deduct').value);
    
    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction) || daysWorked < 0 || dailyRate < 0 || deduction < 0) {
        alert("Please enter valid positive values for all fields.");
        return;
    }

    const calculated = calculatePay(daysWorked, dailyRate, deduction);

    const newEmployee = {
        empNo: nextEmpNo++,
        name: name,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        deduction: deduction,
        grossPay: calculated.grossPay,
        netPay: calculated.netPay
    };

    employeeData.push(newEmployee);
    renderTable();
}

function deleteEmployee() {
    const empNoToDelete = parseInt(prompt("Enter the Employee Number to delete:"));

    if (isNaN(empNoToDelete)) {
        alert("Invalid Employee Number entered.");
        return;
    }

    const initialLength = employeeData.length;
    
    employeeData = employeeData.filter(employee => employee.empNo !== empNoToDelete);

    if (employeeData.length < initialLength) {
        alert(`Employee No. ${empNoToDelete} deleted.`);
        renderTable();
    } else {
        alert(`Employee No. ${empNoToDelete} not found.`);
    }
}

document.addEventListener('DOMContentLoaded', renderTable);