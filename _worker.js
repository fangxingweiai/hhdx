export default {
  async fetch(request, env) {
	const SingleDay = 'prox001.herokuapp.com';
	const DoubleDay = 'prox002.herokuapp.com';
    const url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      if (new Date().getDate()%2) {
        url.hostname = SingleDay
      } else {
        url.hostname = DoubleDay
      }
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};