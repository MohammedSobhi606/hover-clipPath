const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(function (box) {
    box.addEventListener('mousemove', function (e) {
        const cursorPosition = e.clientX - box.getBoundingClientRect().left
        const width = box.getBoundingClientRect().width

        if (cursorPosition > width / 2) {
            !box.classList.contains('leftEffect') && box.classList.add('rightEffect')
        } else {
            !box.classList.contains('rightEffect') && box.classList.add('leftEffect')
        }
    });
    box.addEventListener('mouseleave', function () {
        box.classList.remove('leftEffect', 'rightEffect');
    });
});
