import React from 'react';
import { SearchButton, Text } from './ButtonStyles';

export const Button = props => (
	<SearchButton {...props}>
		<Text>search</Text>
	</SearchButton>
);
