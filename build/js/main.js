(function() {
  'use strict';
  const searchInput = document.querySelector('.header__search');
  const searchPlaceholder = document.querySelector('.header__search-placeholder');
  const searchIcon = document.querySelector('.header__search-icon');

  searchInput.addEventListener('mouseover', () => {
    searchIcon.classList.add('header__search-icon--hover')
    searchInput.classList.add('header__search--hover');
  })
  searchInput.addEventListener('mouseout', () => {
    searchIcon.classList.remove('header__search-icon--hover')
    searchInput.classList.remove('header__search--hover');
  })

  searchInput.addEventListener('focus', (event) => {
    searchIcon.classList.add('header__search-icon--focus')
    searchPlaceholder.classList.add('header__search-placeholder--focus');
    searchInput.classList.add('header__search--focus');
  })
  searchInput.addEventListener('blur', (event) => {
    searchIcon.classList.remove('header__search-icon--focus')
    searchPlaceholder.classList.remove('header__search-placeholder--focus');
    searchInput.classList.remove('header__search--focus');
    searchInput.value = '';
  })
  
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKTtcclxuICBjb25zdCBzZWFyY2hQbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1wbGFjZWhvbGRlcicpO1xyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtaWNvbicpO1xyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWhvdmVyJylcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLS1ob3ZlcicpO1xyXG4gIH0pXHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWhvdmVyJylcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLS1ob3ZlcicpO1xyXG4gIH0pXHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWZvY3VzJylcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLXBsYWNlaG9sZGVyLS1mb2N1cycpO1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19zZWFyY2gtLWZvY3VzJyk7XHJcbiAgfSlcclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWZvY3VzJylcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLXBsYWNlaG9sZGVyLS1mb2N1cycpO1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19zZWFyY2gtLWZvY3VzJyk7XHJcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0pXHJcbiAgXHJcbn0pKCk7Il19
