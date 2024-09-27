// elementleri seçelim

const amountInput = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const result = document.querySelector("#result");

const currency = new Currency();

function runEventsListeners() {
    amountInput.addEventListener("input", exchange);
}

function exchange() {
    const amount = Number(amountInput.value.trim());
    const firstOptionValıue =
        firstCurrencyOption.options[firstCurrencyOption.selectedIndex]
            .textContent;
    const secondOptionValıue =
        secondCurrencyOption.options[secondCurrencyOption.selectedIndex]
            .textContent;

    currency
        .exchange(amount, firstOptionValıue, secondOptionValıue)
        .then((res) => {
            result.value = res.toFixed(3);
        });
}

runEventsListeners();
