function compare( a, b ) {
	if ( a.data.display_name.toLowerCase() < b.data.display_name.toLowerCase() ) {
		return -1;
	}
	if ( a.data.display_name.toLowerCase() > b.data.display_name.toLowerCase() ) {
		return 1;
	}
	return 0;
}

export default compare;
