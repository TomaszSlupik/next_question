const bill = document.querySelector(".bill");
const billAnimation = document.querySelector(".billAnimation");
const input = document.querySelector(".form-control");
const answer = document.querySelector(".answer");
const questionTwo = document.querySelector(".questionTwo");

const Animation = () => {
	bill.classList.add("billAnimation");
	setTimeout(question, 1000);
};

const tab = [
	"nie wiem",
	"faktycznie",
	"upsss",
	"Tak",
	"Możliwe",
	"Raczej nie",
	"Stanowczo nie!",
];

const question = () => {
	if (input.value == "") {
		answer.textContent = "Wprowadź swoje pytanie";
		answer.style.color = "red";
		answer.style.fontWeight = "bold";
		questionTwo.textContent = "";
		bill.classList.remove("billAnimation");
	} else if (input.value.slice(-1) !== "?") {
		answer.textContent = 'Twoje pytanie musi kończyć się znakiem "?"';
		answer.style.color = "red";
		answer.style.fontWeight = "bold";
		questionTwo.textContent = "";
		bill.classList.remove("billAnimation");
	} else {
		answer.textContent = "";
		const a = Math.floor(Math.random() * 7);
		questionTwo.innerHTML = `<span>Twoja odpowiedź:</span> ${tab[a]}`;
		bill.classList.remove("billAnimation");
	}
};

bill.addEventListener("click", Animation);
