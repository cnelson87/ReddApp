import moment from 'moment';

function momentLocalDate(millisecs) {
	return moment(millisecs * 1000).format('LL');
}

export default momentLocalDate;
