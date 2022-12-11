import axios from 'axios';
import getList from '../api/getList';
import getPost from '../api/getPost';

jest.mock('axios');

describe('axios Test', () => {
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

  describe('getPost test', () => {
    const postId = 1;

    test('when success, return postInfo', async () => {
      // given

      const res = {
        data: [
          {
            postId,
            tite: 'title-test1',
            singer: 'singer-test1',
            content: 'content-test1',
            userIp: null,
            registerDate: '2022-12-11T05:00:24.000Z',
          },
        ],
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(res));

      // when
      const result = getPost(postId);

      // then
      await expect(result).resolves.toEqual(res);
      expect(axios.get).toHaveBeenCalledWith('/post/1');
    });

    test('when fail, return null', async () => {
      // given
      const errorMsg = 'Network Error';

      axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

      // when
      const result = getPost(postId);

      // then
      await expect(result).resolves.toEqual(null);
      expect(axios.get).toHaveBeenCalledWith('/post/1');
    });
  });
});
