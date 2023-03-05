import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


'use-strict'

const smoothLinks = document.querySelectorAll('.menu-link');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};



