import { POST_FORM_ONE } from './constants';

export function postFormOne(payload) {
  return {
    type: POST_FORM_ONE,
    payload,
  };
}
