let jokerRowCount = 0;  
function addJokerRow() {
    const table = document.getElementById('table');
    const newRow = document.createElement('tr');
    for (let i = 0; i <= 6; i++) {
        const boxCell = document.createElement('td');
        const box = document.createElement('td');
        box.classList.add('box');
        box.textContent = (Math.floor(Math.random() * 10))
        boxCell.appendChild(box);
        newRow.appendChild(boxCell); 
}
table.appendChild(newRow);
jokerRowCount++;
document.getElementById('countDisplay').textContent = `Jokeririvejä: ${jokerRowCount}`;
}
