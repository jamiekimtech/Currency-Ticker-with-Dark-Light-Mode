import { getCurrency } from './JS Modules/currencyDisplay.js';
import { getFluctuation } from './JS Modules/flucArrow.js';
import { themeBtn, toggleClass } from './JS Modules/theme.js';

window.addEventListener('load', getCurrency);
window.addEventListener('load', getFluctuation);
themeBtn.addEventListener('click', toggleClass);
