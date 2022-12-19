import axios from 'axios';
import getList from '../api/etc/getList';
import getPost from '../api/post/getPost';
import postNewPost from '../api/post/postNewPost';
import putPost from '../api/post/putPost';
import deletePost from '../api/post/deletePost';
import getUserIp from '../api/etc/getUserIp';

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
      expect(axios.get).toHaveBeenCalledWith(`/post/${postId}`);
    });

    test('when fail, return null', async () => {
      // given
      const errorMsg = 'Network Error';

      axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

      // when
      const result = getPost(postId);

      // then
      await expect(result).resolves.toEqual(null);
      expect(axios.get).toHaveBeenCalledWith(`/post/${postId}`);
    });
  });

  describe('postNewPost test', () => {
    const postInfo = {
      title: 'titleTest',
      singer: 'singerTest',
      content: 'contentTest',
    };

    test('when success, return 200 code', async () => {
      // given
      const res = {
        response: { status: 200 },
      };

      axios.post.mockImplementationOnce(() => Promise.resolve(res));

      // when
      const result = postNewPost(postInfo);

      // then
      await expect(result).resolves.toEqual(res);
      expect(axios.post).toHaveBeenCalledWith(`/post`, postInfo);
    });

    test('when fail, return null', async () => {
      // given
      const errorMsg = 'Network Error';

      axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

      // when
      const result = postNewPost(postInfo);

      // then
      await expect(result).resolves.toEqual(null);
      expect(axios.post).toHaveBeenCalledWith(`/post`, postInfo);
    });
  });

  describe('putPost test', () => {
    const postId = 1;
    const postInfo = {
      title: 'updatedTitleTest',
      singer: 'updatedSingerTest',
      content: 'updatedContentTest',
    };

    test('when success, return 200 code', async () => {
      // given
      const res = {
        response: { status: 200 },
      };

      axios.put.mockImplementationOnce(() => Promise.resolve(res));

      // when
      const result = putPost(postId, postInfo);

      // then
      await expect(result).resolves.toEqual(res);
      expect(axios.put).toHaveBeenCalledWith(`/post/${postId}`, postInfo);
    });

    test('when fail, return null', async () => {
      // given
      const errorMsg = 'Network Error';

      axios.put.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

      // when
      const result = putPost(postId, postInfo);

      // then
      await expect(result).resolves.toEqual(null);
      expect(axios.put).toHaveBeenCalledWith(`/post/${postId}`, postInfo);
    });
  });

  describe('deletePost test', () => {
    const postId = 1;

    test('when success, return 200 code', async () => {
      // given
      const res = {
        response: { status: 200 },
      };

      axios.delete.mockImplementationOnce(() => Promise.resolve(res));

      // when
      const result = deletePost(postId);

      // then
      await expect(result).resolves.toEqual(res);
      expect(axios.delete).toHaveBeenCalledWith(`/post/${postId}`);
    });

    test('when fail, return null', async () => {
      // given
      const errorMsg = 'Network Error';

      axios.delete.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

      // when
      const result = deletePost(postId);

      // then
      await expect(result).resolves.toEqual(null);
      expect(axios.delete).toHaveBeenCalledWith(`/post/${postId}`);
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
});
