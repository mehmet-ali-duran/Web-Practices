class Currency {
    constructor() {
        this.url =
            "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_EI031jkZmbW0BOYxXtODxBLYVwT5JPPSTSyCiYGH&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`);
        const data = await response.json();
        const exchangedResult = amount * data.data[secondCurrency];
        return exchangedResult;
    }
}
