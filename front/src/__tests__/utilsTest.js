import formatDateTime from '../utils/formatDateTime';
import countPerDay, { getLast7days } from '../utils/countPerDay';

describe('utils test', () => {
  describe('formatDateTime test', () => {
    test('return formatted dateTime', () => {
      // given
      const registerDate = '2022-12-11T05:00:24.000Z';

      // when
      const result = formatDateTime(registerDate);

      // then
      expect(result).toEqual('2022-12-11 12:00:24');
    });
  });

  describe('getLast7days test', () => {
    test('return last7days', () => {
      // given
      const today = new Date('2022-12-23 12:00:24');

      // when
      const result = getLast7days(today);

      // then
      expect(result).toEqual([
        '2022-12-23',
        '2022-12-22',
        '2022-12-21',
        '2022-12-20',
        '2022-12-19',
        '2022-12-18',
        '2022-12-17',
      ]);
    });
  });

  describe('countPerDay test', () => {
    test('return post x,y data for nivo chart', () => {
      // given
      const today = new Date('2022-12-23 12:00:24');
      const postInfoList = [
        {
          postId: 1,
          tite: 'title-test1',
          singer: 'singer-test1',
          content: 'content-test1',
          userIp: '0.0.0.0',
          registerDate: '2022-12-17T05:00:24.000Z',
        },
        {
          postId: 2,
          tite: 'title-test2',
          singer: 'singer-test2',
          content: 'content-test2',
          userIp: '0.0.0.0',
          registerDate: '2022-12-22T11:31:44.000Z',
        },
      ];

      // when
      const result = countPerDay(postInfoList, today);

      // then
      expect(result).toEqual([
        {
          x: '2022-12-17',
          y: 1,
        },
        {
          x: '2022-12-18',
          y: 0,
        },
        {
          x: '2022-12-19',
          y: 0,
        },
        {
          x: '2022-12-20',
          y: 0,
        },
        {
          x: '2022-12-21',
          y: 0,
        },
        {
          x: '2022-12-22',
          y: 1,
        },
        {
          x: '2022-12-23',
          y: 0,
        },
      ]);
    });

    test('return reply x,y data for nivo chart', () => {
      // given
      const today = new Date('2022-12-23 12:00:24');
      const replyInfoList = [
        {
          replyId: 1,
          postId: 1,
          content: 'content-test1',
          userIp: '0.0.0.0',
          registerDate: '2022-12-17T05:00:24.000Z',
        },
        {
          replyId: 2,
          postId: 2,
          content: 'content-test2',
          userIp: '0.0.0.0',
          registerDate: '2022-12-22T11:31:44.000Z',
        },
      ];

      // when
      const result = countPerDay(replyInfoList, today);

      // then
      // then
      expect(result).toEqual([
        {
          x: '2022-12-17',
          y: 1,
        },
        {
          x: '2022-12-18',
          y: 0,
        },
        {
          x: '2022-12-19',
          y: 0,
        },
        {
          x: '2022-12-20',
          y: 0,
        },
        {
          x: '2022-12-21',
          y: 0,
        },
        {
          x: '2022-12-22',
          y: 1,
        },
        {
          x: '2022-12-23',
          y: 0,
        },
      ]);
    });
  });
});
