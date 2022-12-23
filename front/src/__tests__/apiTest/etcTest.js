import axios from 'axios';
import getList from '../../api/etc/getList';
import getUserIp from '../../api/etc/getUserIp';

jest.mock('axios');
describe('getList test', () => {
  test('when success, return postInfoList', async () => {
    // given
    const res = {
      data: [
        {
          postId: 1,
          tite: 'title-test1',
          singer: 'singer-test1',
          content: 'content-test1',
          userIp: null,
          registerDate: '2022-12-11T05:00:24.000Z',
        },
        {
          postId: 2,
          tite: 'title-test2',
          singer: 'singer-test2',
          content: 'content-test2',
          userIp: null,
          registerDate: '2022-12-11T11:31:44.000Z',
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = getList();

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.get).toHaveBeenCalledWith('/list');
  });
  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = getList();

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.get).toHaveBeenCalledWith('/list');
  });
});

describe('getUserIp test', () => {
  const UserIpUrl = 'https://geolocation-db.com/json/';

  test('when success, return postInfo', async () => {
    // given
    const res = {
      data: [
        {
          IPv4: '59.23.34.180',
          city: 'Donggu',
          country_code: 'KR',
          country_name: 'South Korea',
          latitude: 35.7309,
          longitude: 128.6267,
          postal: null,
          state: 'Daegu',
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = getUserIp();

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.get).toHaveBeenCalledWith(UserIpUrl);
  });

  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = getUserIp();

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.get).toHaveBeenCalledWith(UserIpUrl);
  });
});
