import axios from 'axios'
const BASE_URL = 'https://resume-8f7e9-default-rtdb.firebaseio.com'

export async function getAPI_Resume() {
  const response = await axios.get(`${BASE_URL}/resume.json`)
  return response.data
}
