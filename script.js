// simulação primeira lei 

function updateOhmLaw() {
    let voltage = parseFloat(document.getElementById("voltage").value);
    let resistencia = parseFloat(document.getElementById("resistencia").value);
    let current = voltage / resistencia;
    
    document.getElementById("voltageValue").textContent = voltage;
    document.getElementById("resistenciaValue").textContent = resistencia;
    document.getElementById("currentValue").textContent = current.toFixed(2);
}

document.getElementById("voltage").addEventListener("input", updateOhmLaw);
document.getElementById("resistencia").addEventListener("input", updateOhmLaw);

//simulação segundal lei

function updateResistance() {
    let resistivity = parseFloat(document.getElementById("material").value);
    let length = parseFloat(document.getElementById("length").value);
    let area = parseFloat(document.getElementById("area").value) / 1000000; // Convertendo mm² para m²
    let resistance = (resistivity * length) / area;
    
    document.getElementById("lengthValue").textContent = length;
    document.getElementById("areaValue").textContent = (area * 1000000).toFixed(1);
    document.getElementById("resistanceValue").textContent = resistance.toFixed(6);
}

document.getElementById("material").addEventListener("change", updateResistance);
document.getElementById("length").addEventListener("input", updateResistance);
document.getElementById("area").addEventListener("input", updateResistance);

updateResistance(); // Calcular resistência inicial