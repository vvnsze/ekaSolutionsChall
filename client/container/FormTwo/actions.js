import { POST_FORM_TWO } from './constants';

export function postFormTwo(payload) {
  return {
    type: POST_FORM_TWO,
    payload,
  };
}
