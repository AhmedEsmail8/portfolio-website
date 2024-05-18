$('body').stellar();

$('.counter').counterUp();

function displayMainNav(){
    var element = document.getElementsByTagName('main')[0];
    const distanceToTop = element.getBoundingClientRect().top;
    if (distanceToTop <= 0 ){
        document.getElementsByClassName('main-nav')[0].classList.add('is-pinned');
    }
    else{
        document.getElementsByClassName('main-nav')[0].classList.remove('is-pinned')
    }
}

window.addEventListener('scroll', displayMainNav);

function toggle_nav() {
    var collapseElementList = [].slice.call(document.querySelectorAll('.header-collapse'));
    var collapseList = collapseElementList.map(function (collapseEl) {
        var collapse = new bootstrap.Collapse(collapseEl);
        collapse.toggle();
        return collapse;
    });
}

