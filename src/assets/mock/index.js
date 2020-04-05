import Mock from 'mockjs';

const Random = Mock.Random;

const result = {
  status: 'OK',
  resultCode: 200,
  errorInfo: {},
  data: {},
};

const loginResult = () => {
  result.data = {
    token: Random.string(10),
    userInfo: {
      name: 'admin',
      role: {
        id: 1,
        name: 'super_admin',
      },
      permissions: [
        {
          id: 1,
          name: '消费信息录入',
          route: '/consume/register',
        },
        {
          id: 2,
          name: '消费信息列表',
          route: '/consume/list',
        },
        {
          id: 3,
          name: '工资信息录入',
          route: '/salary/register',
        },
        {
          id: 4,
          name: '工资信息列表',
          route: '/salary/list',
        },
      ],
    },
  };
  return result;
};

const consumeSearchResult = () => {
  const length = Random.integer(1, 20);
  const countPerPage = 20;
  const maxPageNum = (length % countPerPage === 0) ? length / countPerPage
    : (length / countPerPage + 1);

  result.data = {
    pageInfo: {
      totalCount: length,
      maxPageNum: maxPageNum,
      countPerPage: countPerPage,
      currentPage: 1,
    },
    details: [
      {
        id: 1,
        goodsName: '苹果',
        goodsType: '水果',
        price: 5,
        quantity: 5,
        totalAmount: 25,
        paymentType: 1,
        consumer: 1,
        consumeDate: '2020-04-03',
        updateTime: '2020-04-03 20:15:16',
      },
    ],
  };

  for (let i = 0; i < length; i++) {
    result.data.details[i] = {
      id: Random.id(),
      name: Random.cname(),
      price: Random.integer(1, 100),
      quantity: Random.integer(1, 100),
      totalAmount: Random.integer(1, 100), 
      paymentType: Random.integer(0, 1),
      consumer: Random.integer(0, 1),
      consumeDate: Random.date(),
      updateTime: Random.datetime(),
    }
  }
  return result;
};
