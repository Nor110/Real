document.addEventListener("DOMContentLoaded", () => {
	const fakta = document.querySelector("div#fakta");

	if (!fakta) return;

	const toggleButton = document.createElement("button");
	toggleButton.type = "button";
	toggleButton.textContent = "Visa fakta";
	toggleButton.setAttribute("aria-controls", "fakta");
	toggleButton.setAttribute("aria-expanded", "false");

	fakta.parentNode.insertBefore(toggleButton, fakta);

	toggleButton.addEventListener("click", () => {
		const isHidden = fakta.hidden;
		fakta.hidden = !isHidden;
		toggleButton.textContent = isHidden ? "Dölj fakta" : "Visa fakta";
		toggleButton.setAttribute("aria-expanded", String(isHidden));
	});
});
