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


function computeCelsiustoFahrenheit() {
    const celsiusInput = document.getElementById("n1");
    const celsiusValue = parseFloat(celsiusInput.value);
    
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (isNaN(celsiusValue)) {
        fahrenheitInput.value = ""; 
        alert("Please enter a valid number for Celsius.");
        return; 
    }
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}


function clearvaluesCtF() {
    document.getElementById("n1").value = "";
    document.getElementById("fahrenheit").value = "";
}