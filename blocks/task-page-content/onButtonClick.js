var button = document.getElementById('progress-button');
var text = document.querySelectorAll('.task-page-content__answer-button-text')[0];
var progress = document.querySelectorAll('.task-page-content__answer-button-progress')[0];

button.addEventListener('click', function () {
    var ctr = 0;
    var oldInnerText = text.innerText;
    button.classList.add('task-page-content__answer-button--left');
    var f = function () {
        if (ctr < 100) {
            text.innerText = ctr++ + '%';
            progress.style = 'display: inline-block; width:' + (ctr - 10) + '%';
            setTimeout(f, 10);
        } else {
            text.innerText = oldInnerText;
            button.classList.remove('task-page-content__answer-button--left');
            progress.style = '';
        }
    };
    f();
});
