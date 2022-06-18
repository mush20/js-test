const { httpGet } = require('./mock-http-interface');

const fetchArnieQuotes = async (url) => {
  const failureKey = 'FAILURE';
  const successKey = 'Arnie Quote';
  const successCode = 200;

  try {
    const { status, body } = await httpGet(url);
    const { message } = JSON.parse(body);
    const key = status === successCode ? successKey : failureKey;

    return {[key]: message};
  } catch ({message}) {
    return {[failureKey]: message};
  }
}

const getArnieQuotes = async (urls) => Promise.all(urls.map(fetchArnieQuotes));

module.exports = {
  getArnieQuotes,
};
