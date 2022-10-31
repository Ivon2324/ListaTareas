const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const matchInput = document.querySelector('#match-input')


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


const validation = (regex, e, element) => {
	const isValid = regex.test(e.target.value);
	// const information = e.target.parentElement.children[1];
	if (isValid) {
		element.classList.add('border-2', 'border-green-500');
		element.classList.remove('border-2', 'border-rose-500');

	}
	else {
		element.classList.remove('border-2', 'border-green-500');
		element.classList.add('border-2', 'border-rose-500');

	}
};
[...countrySelect.children].forEach(option => {
	option.innerHTML = option.innerHTML.split('(')[0];
});

//Evento username

// usernameInput.addEventListener('input', e => {
// 	validation(USERNAME_REGEX, e, usernameInput);

// });

emailInput.addEventListener('input', e => {
	validation(EMAIL_REGEX, e, emailInput);

});

passwordInput.addEventListener('input', e => {
	validation(PASSWORD_REGEX, e, passwordInput);

});

matchInput.addEventListener('input', e => {
	const isValid = e.target.value === passwordInput.value;
	// const information = e.target.parentElement.children[1];
	if (isValid) {
		matchInput.classList.add('border-2', 'border-green-500');
		matchInput.classList.remove('border-2', 'border-rose-500');
		// information.classList.remove('show-information');
	}
	else {
		matchInput.classList.remove('border-2', 'border-green-500');
		matchInput.classList.add('border-2', 'border-rose-500');
		// information.classList.add('show-information');
	}

});


// countrySelect.addEventListener('input', e => {
// 	const selectedCountry = [...e.target.children].find(option => option.selected === true);
// 	phoneCode.innerHTML = `+${selectedCountry.value}`;

// });







// const ip = fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=07d9232cf7e4414385bc93ef1a521ee1', {method:'GET'})

const getCountry = async () => {
	const { country } = await (await fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=07d9232cf7e4414385bc93ef1a521ee1', { method: 'GET' })).json();
	[...countrySelect.children].forEach(option => {
		if (option.getAttribute('data-countryCode') === country.iso_code) {
			option.selected = true;
			phoneCode.innerHTML = `+${option.value}`
			countrySelect.classList.add('correct');
			phoneCode.classList.add('correct');



		}
	});
}

getCountry();
