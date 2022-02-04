import $ from 'jquery';
import _ from 'lodash';

import '../css/main.css';
import mainImage from '../assets/holberton-logo.jpg';

const img = document.createElement("div");
img.style.background = mainImage;
img.id = 'logo';

$('body').append(img);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 100));
