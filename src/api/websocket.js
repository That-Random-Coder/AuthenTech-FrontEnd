// src/api/websocket.js
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:1567';
const WS_PATH = import.meta.env.VITE_WS_PATH || '/ws';
const WS_URL = import.meta.env.VITE_WS_URL || (() => {
  const base = BASE.startsWith('https') ? BASE.replace(/^https/, 'wss') : BASE.replace(/^http/, 'ws');
  return `${base}${WS_PATH}`;
})();

let client = null;
const subscriptions = new Map();

export function connectStomp(onConnect) {
  if (client && client.active) return client;
  client = new Client({
    webSocketFactory: () => new SockJS(WS_URL),
    reconnectDelay: 5000,
    onConnect: (frame) => {
      if (onConnect) onConnect(frame);
    },
    onStompError: () => {}
  });
  client.activate();
  return client;
}

export function disconnectStomp() {
  if (client) {
    client.deactivate();
    client = null;
    subscriptions.clear();
  }
}

export function subscribe(topic, handler) {
  if (!client || !client.connected) return null;
  const sub = client.subscribe(topic, (msg) => {
    try {
      const body = JSON.parse(msg.body);
      handler(body);
    } catch (e) {
      handler(msg.body);
    }
  });
  subscriptions.set(topic, sub);
  return sub;
}

export function unsubscribe(topic) {
  const sub = subscriptions.get(topic);
  if (sub) {
    sub.unsubscribe();
    subscriptions.delete(topic);
  }
}

export function send(destination, payload) {
  if (!client || !client.connected) return;
  client.publish({ destination, body: JSON.stringify(payload) });
}

export default { connectStomp, disconnectStomp, subscribe, unsubscribe, send };
