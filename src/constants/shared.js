import _ from 'lodash';

export const unitsMap = {
	weight: [
		'kg',
		'gr',
		'oz',
		'lb',
		'tbsp - dry',
		'tsp - dry',
		'cup - dry'
	],
	volume: [
		'litre',
		'ml',
		'pint',
		'oz - liquid',
		'tbsp-liquid',
		'tsp - liquid',
		'cup - liquid',
	],
	units: [
		'unit'
	]
};

export const units =
	(_.keys(unitsMap).map(category =>
	unitsMap[category].map(unit =>
		unit))).flat(); 


export const unitSet = ['kg', 'gr', 'ml', 'litre', 'tsp', 'tbsp', 'cup', 'lbs', 'oz', 'units' ];
