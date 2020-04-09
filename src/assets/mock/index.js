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

const registerResult = () => {
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
      goodsName: Mock.mock('@string(5)'),
      goodsType: Mock.mock('@string(5)'),
      price: Mock.mock('@integer(1, 100)'),
      quantity: Mock.mock('@integer(1, 100)'),
      acquisitionValue: Mock.mock('@integer(1, 100)'),
      paymentType: Mock.mock('@integer(0, 1)'),
      consumer: Mock.mock('@integer(0, 1)'),
      consumeDate: Mock.mock('@date("yyyy-MM-dd")'),
      updateTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    };
  }
  return result;
};

const initCommonSearchResult = () => {
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
  return result;
};

const salesSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      id: Mock.mock('@string(8)'),
      goodsName: Mock.mock('@string(5)'),
      goodsType: Mock.mock('@string(5)'),
      price: Mock.mock('@integer(1, 100)'),
      quantity: Mock.mock('@integer(1, 100)'),
      acquisitionValue: Mock.mock('@integer(1, 100)'),
      paymentType: Mock.mock('@integer(0, 1)'),
      saler: Mock.mock('@integer(0, 1)'),
      salesDate: Mock.mock('@date("yyyy-MM-dd")'),
      updateTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    };
  }
  return result;
};

const cardSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      cardNo: Mock.mock('@integer(1000000000000, 9000000000000)'),
      cardType: Mock.mock('@string(5)'),
      bankType: '三菱UFJ银行',
      creditSum: Mock.mock('@integer(1, 10000)'),
      cardBalance: Mock.mock('@integer(1, 10000)'),
      holder: '老公',
      createCardDate: Mock.mock('@date("yyyy-MM-dd")'),
    };
  }
  return result;
};

const salarySearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      ownerName: Mock.mock('@string(5)'),
      paymentType: Mock.mock('@string(5)'),
      cardNo: Mock.mock('@integer(1000000000000, 9000000000000)'),
      salarySum: Mock.mock('@integer(1000, 50000)'),
      yearMonth: Mock.mock('@date("yyyy-MM")'),
      detail: Mock.mock('@string(10)'),
    };
  }
  return result;
};

const accesscardSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      accessor: Mock.mock('@string(5)'),
      accessType: Mock.mock('@string(5)'),
      bankType: Mock.mock('@string(5)'),
      cardNo: Mock.mock('@integer(1000000000000, 9000000000000)'),
      moneySum: Mock.mock('@integer(1000, 50000)'),
      accessDate: Mock.mock('@date("yyyy-MM-dd")'),
    };
  }
  return result;
};

Mock.mock('/login', 'post', loginResult);
Mock.mock('/consume/register', registerResult);
Mock.mock('/consume/list', consumeSearchResult);
Mock.mock('/sales/register', registerResult);
Mock.mock('/sales/list', salesSearchResult);
Mock.mock('/bankcard/list', cardSearchResult);
Mock.mock('/salary/list', salarySearchResult);
Mock.mock('/accesscard/list', accesscardSearchResult);
