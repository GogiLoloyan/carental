import { useLink } from 'valuelink';

const Validation = ({ render }) => {
	const $pickUp = useLink('');
	const $pickUpDate = useLink('');
	const $returnDate = useLink('');
	const $hasError = useLink(false);

	$pickUp.check(x => x, 'Pick up is required');
	$pickUpDate.check(x => x, 'Pick up date is required');
	$returnDate.check(x => x, 'Return date required');

	const isError = ({ error }) => !error;
	const onSubmit = () => {
		const isDone = [$pickUp, $pickUpDate, $returnDate].every(isError);
		if (isDone) {
			alert('done');
		} else {
			$hasError.set(true);
		}
	};

	const data = {
		$pickUp,
		$pickUpDate,
		$returnDate,
		displayError: $hasError.value
	};

	return render(data, onSubmit);
};

export default Validation;
