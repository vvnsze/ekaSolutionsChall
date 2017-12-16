import { POST_FORM_ONE } from './constants';

export function postFormOne(payload) {
  console.log('in actions')
  return {
    type: POST_FORM_ONE,
    payload,
  };
}
