import { POST_FORM_THREE } from './constants';

export function postFormThree(payload) {
  return {
    type: POST_FORM_THREE,
    payload,
  };
}
