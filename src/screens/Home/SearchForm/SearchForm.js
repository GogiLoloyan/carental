import React from 'react';

import Validation from './Validation';
import { Tools, Button } from './components';

import { Wrapper } from './styles';


const SearchFreeCar = () => (
	<Validation
		render={(props, onSubmit) => (
			<Wrapper>
				<Tools {...props} />
				<Button onClick={onSubmit} />
			</Wrapper>
		)}
	/>
);

export default SearchFreeCar;
