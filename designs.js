// onClick submit button
$('#submit').click(function(e) {
    e.preventDefault();
    $('#pixelCanvas').html('');
    var height = $("#inputHeight").val();
    var width = $("#inputWidth").val();
    const c = document.getElementById('pixelCanvas');
    var color = $("#colorPicker");
    
    //fill color
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
         }

    //Grid size plus event listener
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
    
});


