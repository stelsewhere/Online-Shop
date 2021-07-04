import vars from '../_vars';

vars.$catalogFilters.forEach(el => {
    el.addEventListener('click', () => {
        el.currentTarget.classList.toggle('catalog-filter--open');
    })
})

