(function() {
  'use strict';
  const searchWrap = document.querySelector('.header__search-wrap');
  const searchInput = document.querySelector('.header__search');
  const searchPlaceholder = document.querySelector('.header__search-placeholder');
  const searchIcon = document.querySelector('.header__search-icon');

  searchWrap.addEventListener('mouseover', () => {
    searchIcon.classList.add('header__search-icon--hover')
    searchInput.classList.add('header__search--hover');
  })
  searchWrap.addEventListener('mouseout', () => {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBjb25zdCBzZWFyY2hXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLXdyYXAnKTtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpO1xyXG4gIGNvbnN0IHNlYXJjaFBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLXBsYWNlaG9sZGVyJyk7XHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1pY29uJyk7XHJcblxyXG4gIHNlYXJjaFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3NlYXJjaC1pY29uLS1ob3ZlcicpXHJcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3NlYXJjaC0taG92ZXInKTtcclxuICB9KVxyXG4gIHNlYXJjaFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWhvdmVyJylcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLS1ob3ZlcicpO1xyXG4gIH0pXHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWZvY3VzJylcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLXBsYWNlaG9sZGVyLS1mb2N1cycpO1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19zZWFyY2gtLWZvY3VzJyk7XHJcbiAgfSlcclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XHJcbiAgICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWljb24tLWZvY3VzJylcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLXBsYWNlaG9sZGVyLS1mb2N1cycpO1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19zZWFyY2gtLWZvY3VzJyk7XHJcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0pXHJcbiAgXHJcbn0pKCk7Il19
