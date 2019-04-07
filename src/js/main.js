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