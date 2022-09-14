import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, acion) => {
    if (acion.type === 'INPUT') {
        return { value: acion.value, isTouched: state.isTouched };
    }
    if (acion.type === 'BLUR') {
        return { isTouched: true, value: state.value };
    }
    if (acion.type === 'RESET') {
        return { isTouched: false, value: '' };
    }
    return inputStateReducer;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const InputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        InputBlurHandler,
        reset,
    };
};

export default useInput;
