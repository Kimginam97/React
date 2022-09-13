import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enterNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnterEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enterNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvlid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnterEmail(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        setEnteredName('');
        setEnteredNameTouched(false);
        setEnterEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = enteredEmailIsInvlid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {enteredEmailIsInvlid && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
