import axios from 'axios';

import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBirbsByUserId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getBirb = (birbId) => axios.get(`${baseUrl}/birbs/${birbId}.json`);

export default { getBirbsByUserId, getBirb };
