import numeral from 'numeral';

function numeralDecimalAbbr(num) {
	return numeral(num).format('0.0a');
}

export default numeralDecimalAbbr;
