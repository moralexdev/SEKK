const API_ACCESS_KEY = '51f021c2d38f535f101dc141f1d68a8c'

export const createConvertAmountUrl = (amount, to) => (
    `http://data.fixer.io/api/convert?access_key=${API_ACCESS_KEY}&from=SEK&to=${to}&amount=${amount}`
)