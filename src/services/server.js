import Config from 'react-native-config';
import axios from 'axios';
import io from 'socket.io-client';

export const api = axios.create({
  baseURL: `${Config.SERVER_URL}/api`,
});

export const socket = io(`${Config.SERVER_URL}?client=app`);

export default {
  api,
  socket,
};
