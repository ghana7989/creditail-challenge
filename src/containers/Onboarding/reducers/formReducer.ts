type Action =
  | {
      type:
        | 'SET_OWNER_NAME'
        | 'SET_EMAIL_ADDRESS'
        | 'SET_AADHAR_NUMBER'
        | 'SET_PAN_NUMBER'
        | 'SET_DATE_OF_BIRTH';
      payload: string;
    }
  | {
      type: 'SET_IS_FORM_VALID';
      payload: boolean;
    };

export const INITIAL_STATE = {
  ownerName: '',
  emailAddress: '',
  aadharNumber: '',
  panNumber: '',
  dateOfBirth: '',
  isPanNumberValid: false,
  isAadharNumberValid: false,
  isDateOfBirthValid: false,
  isEmailAddressValid: false,
  isFormValid: false,
};
const AADHAR_NUMBER_REGEX = /^[0-9]{12}$/;
const PAN_NUMBER_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const DATE_OF_BIRTH_REGEX =
  /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const formReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SET_OWNER_NAME':
      return {...state, ownerName: action.payload};
    case 'SET_EMAIL_ADDRESS':
      return {
        ...state,
        emailAddress: action.payload,
        isEmailAddressValid: EMAIL_ADDRESS_REGEX.test(action.payload),
      };
    case 'SET_AADHAR_NUMBER':
      return {
        ...state,
        aadharNumber: action.payload,
        isAadharNumberValid: AADHAR_NUMBER_REGEX.test(action.payload),
        isFormValid:
          AADHAR_NUMBER_REGEX.test(action.payload) &&
          state.isPanNumberValid &&
          state.isDateOfBirthValid,
      };
    case 'SET_PAN_NUMBER':
      return {
        ...state,
        panNumber: action.payload,
        isPanNumberValid: PAN_NUMBER_REGEX.test(action.payload),
        isFormValid:
          state.isAadharNumberValid &&
          PAN_NUMBER_REGEX.test(action.payload) &&
          state.isDateOfBirthValid,
      };
    case 'SET_DATE_OF_BIRTH':
      return {
        ...state,
        dateOfBirth: action.payload,
        isDateOfBirthValid: DATE_OF_BIRTH_REGEX.test(action.payload),
        isFormValid:
          state.isAadharNumberValid &&
          state.isPanNumberValid &&
          DATE_OF_BIRTH_REGEX.test(action.payload),
      };

    default:
      return state;
  }
};
