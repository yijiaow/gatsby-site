import fetch from 'isomorphic-unfetch'

export const handler = async event => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
  } catch (err) {}
}
