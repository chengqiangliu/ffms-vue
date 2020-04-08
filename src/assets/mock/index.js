import Mock from 'mockjs';

const result = {
  status: 'OK',
  resultCode: 200,
  errorInfo: {},
  data: {},
};

const loginResult = () => {
  result.data = {
    token: Mock.mock('@string(10)'),
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

const consumeRegisterResult = () => {
  result.data = {
    message: 'sucess',
  };
  return result;
};

const consumeSearchResult = () => {
  const length = Mock.mock('@integer(20, 100)');
  const numPerPage = 20;
  const maxPage = (length % numPerPage === 0) ? length / numPerPage
    : (length / numPerPage + 1);

  result.data = {
    pageInfo: {
      totalCount: length,
      maxPageNum: maxPage,
      countPerPage: numPerPage,
      currentPage: 1,
    },
    details: [],
  };

  for (let i = 0; i < length; i += 1) {
    result.data.details[i] = {
      id: Mock.mock('@string(8)'),
      name: Mock.mock('@string(5)'),
      price: Mock.mock('@integer(1, 100)'),
      quantity: Mock.mock('@integer(1, 100)'),
      totalAmount: Mock.mock('@integer(1, 100)'),
      paymentType: Mock.mock('@integer(0, 1)'),
      consumer: Mock.mock('@integer(0, 1)'),
      consumeDate: Mock.mock('@date("yyyy-MM-dd")'),
      updateTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    };
  }
  return result;
};

Mock.mock('/login', 'post', loginResult);
Mock.mock('/consume/register', consumeRegisterResult);
Mock.mock('/consume/list', consumeSearchResult);
