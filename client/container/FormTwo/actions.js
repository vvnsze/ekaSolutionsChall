import { POST_FORM_TWO } from './constants';

export function postFormTwo(payload) {
  console.log('in form two: ', payload);
  return {
    type: POST_FORM_TWO,
    payload,
  };
}
