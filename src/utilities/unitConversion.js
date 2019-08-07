//MEASUREMENT HELPER FUNCTIONS:
//WEIGHT:
const convertKgGr = (qty) => qty * 1000;
const convertKgLb = (qty) => qty * 0.4535924;
const convertKgOz = (qty) => qty * 0.02834952;

const convertGrKg = (qty) => qty / 1000;
const convertGrLb = (qty) => qty * 0.002204623;
const convertGrOz = (qty) => qty * 28.34952;

const convertTsbpGr = (qty) => qty * 12.78;
const convertTspGr = (qty) => qty * 4.92;

const convertLbKg = (qty) => qty * 2.204623;
const convertLbGr = (qty) => qty * 2204.623;
const convertLbOz = (qty) => qty * 0.0625;

const convertOzKg = (qty) => qty * 35.27396;
const convertOzLb = (qty) => qty * 16;
const convertOzGr = (qty) => qty * 0.03527396;
const convertCupGr = (qty) => qty * 138; //TODO needs an extra stage to convert volume to weight depending on density
//VOLUME:
const convertLitreMl = (qty) => qty * 1000;
const convertMlLitre = (qty) => qty / 1000;
const convertCupMl = (qty) => qty * 284.131;
const convertTbspMl = (qty) => qty * 15;
const convertTspMl = (qty) => qty * 5;




export const weightToGramms = (qty, unit) => {
	switch(unit) {
		case 'gr' : {
			return(qty);
		}
		case 'kg': {
			return(convertKgGr(qty));
		}
		case 'lb': {
			return(convertLbGr(qty));
		}
		case 'oz': {
			return(convertOzGr(qty));
		}
		case 'tbsp - dry': {
			return(convertTsbpGr(qty));
		}
		case 'tsp - dry': {
			return(convertTspGr(qty));
		}
		case 'cup-dry': {
			return(convertCupGr(qty));
		}
		default: return null ;
	}
};

export const volumeToMl = (qty, unit) => {
	switch(unit) {
		case 'ml': {
			return(qty);
		}
		case 'litre': {
			return(convertLitreMl(qty));
		}
		case 'cup': {
			return(convertCupMl(qty));
		}
		case 'tbsp - liquid': {
			return(convertTbspMl(qty));
		}
		case 'tsp - liquid': {
			return(convertTspMl(qty));
		}
	default: return null;
	}
};
