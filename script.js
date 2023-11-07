
function removeHtmlExtension(url) {
  return url.replace(/\.html$/, '');
}


window.addEventListener('load', function() {
  var url = window.location.pathname;
  url = removeHtmlExtension(url);
  window.history.replaceState(null, null, url);
});



// Grab elements
const selectElement = (selector) => {
	@@ -45,17 +33,14 @@ const toggleMenu = () =>{

menuToggleIcon.addEventListener('click', toggleMenu);


// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});


// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
	@@ -105,3 +90,6 @@ const swiper = new Swiper(".swiper", {
        }
    }   
});
