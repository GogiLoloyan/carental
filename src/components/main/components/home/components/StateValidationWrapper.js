import { useLink } from "valuelink";

const StateValidationWrapper = ({ children }) => {
  const $pickUp = useLink("");
  const $pickUpDate = useLink("");
  const $returnDate = useLink("");
  const $error = useLink(false);

  $pickUp.check(x => x, "Pick up is required");
  $pickUpDate.check(x => x, "Pick up date is required");
  $returnDate.check(x => x, "Return date required");

  const isError = ({ error }) => !error;
  const _OnSubmit = () => {
    const validate = [$pickUp, $pickUpDate, $returnDate].every(isError);
    if (validate) {
      alert("done");
    } else {
      $error.set(true);
    }
  };

  return children({
    state: { $pickUp, $pickUpDate, $returnDate, displayError: $error.value },
    onSubmit: _OnSubmit
  });
};

export default StateValidationWrapper;
