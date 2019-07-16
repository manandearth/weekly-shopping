export const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
		integer(input) {
				return parseInt(input);
  },
		float(input) {
				return parseFloat(input);
		}
};



