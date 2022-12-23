import axios from 'axios';
import deleteReply from '../../api/reply/deleteReply';
import getAllReply from '../../api/reply/getAllReply';
import getReplyList from '../../api/reply/getReplyList';
import postReply from '../../api/reply/postReply';

jest.mock('axios');

describe('getReplyList test', () => {
  const postId = 1;
  test('when success, return replyList ', async () => {
    // given
    const res = {
      data: [
        {
          replyId: 1,
          postId,
          content: 'content-test1',
          userIp: '0.0.0.0',
          registerDate: '2022-12-11T05:00:24.000Z',
        },
        {
          replyId: 2,
          postId,
          content: 'content-test2',
          userIp: '12.34.56.78',
          registerDate: '2022-12-11T11:31:44.000Z',
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = getReplyList(postId);

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.get).toHaveBeenCalledWith(`/reply/${postId}`);
  });

  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = getReplyList(postId);

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.get).toHaveBeenCalledWith(`/reply/${postId}`);
  });
});

describe('postReply test', () => {
  const replyInfo = {
    replyId: 1,
    postId: 1,
    content: 'content-test1',
    userIp: '',
  };

  test('when success, return 200 code', async () => {
    // given
    const res = {
      response: { status: 200 },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = postReply(replyInfo);

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.post).toHaveBeenCalledWith(`/reply`, replyInfo);
  });

  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = postReply(replyInfo);

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.post).toHaveBeenCalledWith(`/reply`, replyInfo);
  });
});

describe('getAllReply test', () => {
  test('when success, return all reply', async () => {
    // given
    const res = {
      data: [
        {
          replyId: 1,
          postId: 1,
          content: 'content-test1',
          userIp: '0.0.0.0',
          registerDate: '2022-12-11T05:00:24.000Z',
        },
        {
          replyId: 2,
          postId: 2,
          content: 'content-test2',
          userIp: '12.34.56.78',
          registerDate: '2022-12-11T11:31:44.000Z',
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = getAllReply();

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.get).toHaveBeenCalledWith(`/reply/all`);
  });

  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = getAllReply();

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.get).toHaveBeenCalledWith(`/reply/all`);
  });
});

describe('deleteReply test', () => {
  const replyId = 1;
  test('when success, return 200 code', async () => {
    // given
    const res = {
      response: { status: 200 },
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve(res));

    // when
    const result = deleteReply(replyId);

    // then
    await expect(result).resolves.toEqual(res);
    expect(axios.delete).toHaveBeenCalledWith(`/reply/${replyId}`);
  });

  test('when fail, return null', async () => {
    // given
    const errorMsg = 'Network Error';

    axios.delete.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));

    // when
    const result = deleteReply(replyId);

    // then
    await expect(result).resolves.toEqual(null);
    expect(axios.delete).toHaveBeenCalledWith(`/reply/${replyId}`);
  });
});
