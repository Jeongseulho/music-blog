import axios from 'axios';
import getList from '../api/getList';

jest.mock('axios');

describe('axios Test', () => {
  test('should return post list', async () => {
    // given
    const postInfoList = [
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
    ];
    axios.get.mockResolvedValueOnce(postInfoList);

    // when
    const result = await getList();

    // then
    expect(axios.get).toHaveBeenCalledWith('/list');
    expect(result).toEqual(postInfoList);
  });
});
