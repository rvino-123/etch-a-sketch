window.addEventListener("load", (e) => {
    const container = document.querySelector('.container')
    const clearButton = document.createElement('button');

    // Creating the CLEAR BUTTON
    clearButton.innerText = 'CLEAR';
    clearButton.style.marginBottom = "5px";
    clearButton.style.background = "white";
    container.append(clearButton);
    clearButton.addEventListener('click', clearPad);

    // Adding rows to the grid. 
    for (let i=0; i < 16; i++) {
        
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.append(gridRow)
    }

    // Adding the boxes to the rows
    const gridRows = Array.from(document.querySelectorAll('.grid-row'));
    gridRows.forEach((row) => {
        for (let i=0; i < 16; i++) {
            gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.append(gridBox);
        }
    });

    // Doing the coloring
    const gridBoxes = Array.from(document.querySelectorAll('.grid-box'));
    gridBoxes.forEach(box => box.addEventListener('mouseenter', e => box.style.background = '#000'));

})


function clearPad() {
    const gridBoxes = Array.from(document.querySelectorAll('.grid-box'));
    gridBoxes.forEach(box => box.style.background = '#fff');
}


