/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSetting = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      window.setTimeout(
        showAlert('success', `${type.toUpperCase()} updated successfully!`),
        1500
      );
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
