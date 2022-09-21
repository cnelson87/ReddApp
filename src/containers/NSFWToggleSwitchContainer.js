import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNsfwEnabled } from 'store/reducers/appVars';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';

function NSFWToggleSwitchContainer() {
	const dispatch = useDispatch();
	const { nsfwEnabled } = useSelector((state) => state.appVars);

	const handleToggleChange = () => {
		dispatch(setNsfwEnabled(!nsfwEnabled));
	};

	return (
		<ToggleSwitch identifier={'toggle-nsfw'} label={'Show NSFW'} isChecked={nsfwEnabled} handleChange={handleToggleChange} />
	);
}

export default NSFWToggleSwitchContainer;
