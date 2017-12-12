//= require_tree .

document.addEventListener( 'DOMContentLoaded', function () {

inView('[data-animate-in]').on('enter', function(el){
        el.classList.add('in-view')});
inView('[data-animate-in]').on('exit', function(el){
        el.classList.remove('in-view')});

}, false );

window.addEventListener('scroll', function(e) {


});
