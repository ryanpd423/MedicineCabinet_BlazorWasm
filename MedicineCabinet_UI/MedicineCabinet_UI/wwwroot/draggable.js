window.exampleJsFunctions = {

    onDragStart: function() {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.style.color = 'green';
    },

    onDragOver: function() {
        event.preventDefault();
    },

    onDrop: function () {
        var data = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(data);
        event.target.appendChild(draggableElement);
        event.dataTransfer.clearData();
    }
};
