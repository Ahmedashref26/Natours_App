/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

// const stripe = Stripe(
//   'pk_test_51Kmp9iIhcdN95CBz3W8ML1K9fa5L4vnAqO3uTKsfUHiJbxZcY9KdGKTfGD98DUuoszr9zdpnbKapIasRtBVVSRBA008YGcdZ9p'
// );

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);

    window.location.replace(session.data.session.url);

    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
  } catch (err) {
    showAlert('error', err);
  }
};
