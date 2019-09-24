import moment from 'moment';

function momentFromNow(millisecs) {
	return moment(millisecs * 1000).fromNow();
}

export default momentFromNow;
