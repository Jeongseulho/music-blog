import axios from 'axios';

async function getUserIp() {
  const UserIpUrl = 'https://geolocation-db.com/json/';
  try {
    const res = await axios.get(UserIpUrl);
    return res;
  } catch (error) {
    return null;
  }
}

export default getUserIp;
