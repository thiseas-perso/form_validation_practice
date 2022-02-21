const countryList = [
   "Afghanistan",
   "Albania",
   "Algeria",
   "American Samoa",
   "Andorra",
   "Angola",
   "Anguilla",
   "Antarctica",
   "Antigua and Barbuda",
   "Argentina",
   "Armenia",
   "Aruba",
   "Australia",
   "Austria",
   "Azerbaijan",
   "Bahamas (the)",
   "Bahrain",
   "Bangladesh",
   "Barbados",
   "Belarus",
   "Belgium",
   "Belize",
   "Benin",
   "Bermuda",
   "Bhutan",
   "Bolivia (Plurinational State of)",
   "Bonaire, Sint Eustatius and Saba",
   "Bosnia and Herzegovina",
   "Botswana",
   "Bouvet Island",
   "Brazil",
   "British Indian Ocean Territory (the)",
   "Brunei Darussalam",
   "Bulgaria",
   "Burkina Faso",
   "Burundi",
   "Cabo Verde",
   "Cambodia",
   "Cameroon",
   "Canada",
   "Cayman Islands (the)",
   "Central African Republic (the)",
   "Chad",
   "Chile",
   "China",
   "Christmas Island",
   "Cocos (Keeling) Islands (the)",
   "Colombia",
   "Comoros (the)",
   "Congo (the Democratic Republic of the)",
   "Congo (the)",
   "Cook Islands (the)",
   "Costa Rica",
   "Croatia",
   "Cuba",
   "Curaçao",
   "Cyprus",
   "Czechia",
   "Côte d'Ivoire",
   "Denmark",
   "Djibouti",
   "Dominica",
   "Dominican Republic (the)",
   "Ecuador",
   "Egypt",
   "El Salvador",
   "Equatorial Guinea",
   "Eritrea",
   "Estonia",
   "Eswatini",
   "Ethiopia",
   "Falkland Islands (the) [Malvinas]",
   "Faroe Islands (the)",
   "Fiji",
   "Finland",
   "France",
   "French Guiana",
   "French Polynesia",
   "French Southern Territories (the)",
   "Gabon",
   "Gambia (the)",
   "Georgia",
   "Germany",
   "Ghana",
   "Gibraltar",
   "Greece",
   "Greenland",
   "Grenada",
   "Guadeloupe",
   "Guam",
   "Guatemala",
   "Guernsey",
   "Guinea",
   "Guinea-Bissau",
   "Guyana",
   "Haiti",
   "Heard Island and McDonald Islands",
   "Holy See (the)",
   "Honduras",
   "Hong Kong",
   "Hungary",
   "Iceland",
   "India",
   "Indonesia",
   "Iran (Islamic Republic of)",
   "Iraq",
   "Ireland",
   "Isle of Man",
   "Israel",
   "Italy",
   "Jamaica",
   "Japan",
   "Jersey",
   "Jordan",
   "Kazakhstan",
   "Kenya",
   "Kiribati",
   "Korea (the Democratic People's Republic of)",
   "Korea (the Republic of)",
   "Kuwait",
   "Kyrgyzstan",
   "Lao People's Democratic Republic (the)",
   "Latvia",
   "Lebanon",
   "Lesotho",
   "Liberia",
   "Libya",
   "Liechtenstein",
   "Lithuania",
   "Luxembourg",
   "Macao",
   "Madagascar",
   "Malawi",
   "Malaysia",
   "Maldives",
   "Mali",
   "Malta",
   "Marshall Islands (the)",
   "Martinique",
   "Mauritania",
   "Mauritius",
   "Mayotte",
   "Mexico",
   "Micronesia (Federated States of)",
   "Moldova (the Republic of)",
   "Monaco",
   "Mongolia",
   "Montenegro",
   "Montserrat",
   "Morocco",
   "Mozambique",
   "Myanmar",
   "Namibia",
   "Nauru",
   "Nepal",
   "Netherlands (the)",
   "New Caledonia",
   "New Zealand",
   "Nicaragua",
   "Niger (the)",
   "Nigeria",
   "Niue",
   "Norfolk Island",
   "Northern Mariana Islands (the)",
   "Norway",
   "Oman",
   "Pakistan",
   "Palau",
   "Palestine, State of",
   "Panama",
   "Papua New Guinea",
   "Paraguay",
   "Peru",
   "Philippines (the)",
   "Pitcairn",
   "Poland",
   "Portugal",
   "Puerto Rico",
   "Qatar",
   "Republic of North Macedonia",
   "Romania",
   "Russian Federation (the)",
   "Rwanda",
   "Réunion",
   "Saint Barthélemy",
   "Saint Helena, Ascension and Tristan da Cunha",
   "Saint Kitts and Nevis",
   "Saint Lucia",
   "Saint Martin (French part)",
   "Saint Pierre and Miquelon",
   "Saint Vincent and the Grenadines",
   "Samoa",
   "San Marino",
   "Sao Tome and Principe",
   "Saudi Arabia",
   "Senegal",
   "Serbia",
   "Seychelles",
   "Sierra Leone",
   "Singapore",
   "Sint Maarten (Dutch part)",
   "Slovakia",
   "Slovenia",
   "Solomon Islands",
   "Somalia",
   "South Africa",
   "South Georgia and the South Sandwich Islands",
   "South Sudan",
   "Spain",
   "Sri Lanka",
   "Sudan (the)",
   "Suriname",
   "Svalbard and Jan Mayen",
   "Sweden",
   "Switzerland",
   "Syrian Arab Republic",
   "Taiwan",
   "Tajikistan",
   "Tanzania, United Republic of",
   "Thailand",
   "Timor-Leste",
   "Togo",
   "Tokelau",
   "Tonga",
   "Trinidad and Tobago",
   "Tunisia",
   "Turkey",
   "Turkmenistan",
   "Turks and Caicos Islands (the)",
   "Tuvalu",
   "Uganda",
   "Ukraine",
   "United Arab Emirates (the)",
   "United Kingdom of Great Britain and Northern Ireland (the)",
   "United States Minor Outlying Islands (the)",
   "United States of America (the)",
   "Uruguay",
   "Uzbekistan",
   "Vanuatu",
   "Venezuela (Bolivarian Republic of)",
   "Viet Nam",
   "Virgin Islands (British)",
   "Virgin Islands (U.S.)",
   "Wallis and Futuna",
   "Western Sahara",
   "Yemen",
   "Zambia",
   "Zimbabwe",
   "Åland Islands"
];


// 

const form = document.querySelector('form')
const email = document.querySelector('#email')
const emailError = document.querySelector('#email + span.error');
const country = document.querySelector('#country')
const countryError = document.querySelector('#country + span.error');
const zipcode = document.querySelector('#zipcode')
const zipcodeError = document.querySelector('#zipcode + span.error');
const pwd = document.querySelector('#pwd')
const pwdError = document.querySelector('#pwd + span.error');
const pwdConfirm = document.querySelector('#pwd-confirm')
const pwdConfirmError = document.querySelector('#pwd-confirm + span.error');

form.addEventListener('submit', (e) => {
   // e.preventDefault()
   console.log(email)
})

email.addEventListener('change', function (e) {
   if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
   } else {
      if (email.validity.valueMissing) {
         emailError.textContent = '*You need to enter an e-mail address*';
      } else if (email.validity.patternMismatch) {
         emailError.textContent = 'Entered value needs to be an e-mail address.';
      }
      emailError.className = 'error active'
   }
})

country.addEventListener('change', function (e) {
   if (!countryExists(country.value.trim()) || country.validity.tooShort) {
      countryError.textContent = 'Enter a valid country name please'
      countryError.className = 'error active'
   } else {
      countryError.textContent = ''
      countryError.className = 'error';
   }
})


function countryExists(country) {
   return countryList.some((element) =>
      element.toLowerCase().includes(country.toLowerCase())
   )
}

pwd.addEventListener('change', function (e) {
   if (pwd.validity.valid) {
      pwdError.textContent = '';
      pwdError.className = 'error';
   } else {
      if (pwd.validity.valueMissing) {
         pwdError.textContent = '*You need to enter a password*';
      } else if (pwd.validity.patternMismatch) {
         pwdError.innerText = 'Minimum 6 characters \n At least 1 uppercase English letter \n At least 1 lowercase English letter \n At least 1 letter \n At least 1 special character';

      }
      pwdError.className = 'error active'
   }
})

pwdConfirm.addEventListener('change', (e) => {
   if (pwd.value !== pwdConfirm.value) {
      pwdConfirmError.textContent = 'password does NOT match'
   } else {
      pwdConfirmError.textContent = ''
   }
})

