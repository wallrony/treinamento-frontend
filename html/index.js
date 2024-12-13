const form = document.querySelector("#register-form form");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const inputs = [...this];
	const data = {};

	for (let idx = 0; idx < inputs.length; idx++) {
		const element = inputs[idx];

		if (element.tagName !== "INPUT") {
			continue;
		}

		if (element.type === "checkbox") {
			data[element.name] = element.checked;
		} else {
			data[element.name] = element.value;
		}
	}

	console.log(data);
});
