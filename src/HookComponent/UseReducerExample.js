import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
  },
};


function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }, // Clear error for the updated field
      };
    case 'VALIDATE_FIELD':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case 'SUBMIT_FORM':
      // Add form submission logic here
      return state;
    default:
      return state;
  }
}

function ComplexForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
    if (name === 'firstName' && value.trim() === '') {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: name,
        error: 'First name is required',
      });
    } else if (name === 'lastName' && value.trim() === '') {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: name,
        error: 'Last name is required',
      });
    } else if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: name,
        error: 'Invalid email address',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.firstName.trim()) {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: 'firstName',
        error: 'First name is required',
      });
    }
    if (!state.lastName.trim()) {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: 'lastName',
        error: 'Last name is required',
      });
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)) {
      dispatch({
        type: 'VALIDATE_FIELD',
        field: 'email',
        error: 'Invalid email address',
      });
    }

    // If there are no errors, submit the form
    if (
      !state.errors.firstName &&
      !state.errors.lastName &&
      !state.errors.email
    ) {
      dispatch({ type: 'SUBMIT_FORM' });

      // Add your form submission logic here
      console.log('Form submitted:', state);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        {state.errors.firstName && (
          <p className="error">{state.errors.firstName}</p>
        )}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        {state.errors.lastName && (
          <p className="error">{state.errors.lastName}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && (
          <p className="error">{state.errors.email}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplexForm;
