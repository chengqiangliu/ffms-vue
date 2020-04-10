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

const simpleResult = () => {
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

const userSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      username: Mock.mock('@string(8)'),
      role: Mock.mock('@string(5)'),
      email: Mock.mock('@email'),
      failLoginCount: Mock.mock('@integer(0, 5)'),
      lockStatus: Mock.mock('@integer(0, 1)'),
      lastLogonTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    };
  }

  return result;
};

const presentSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      sendorName: Mock.mock('@string(8)'),
      sendType: Mock.mock('@string(5)'),
      presentType: Mock.mock('@string(5)'),
      friend: Mock.mock('@string(5)'),
      moneySum: Mock.mock('@integer(1000, 50000)'),
      presentName: Mock.mock('@string(5)'),
      quantity: Mock.mock('@integer(0, 5)'),
      sendDate: Mock.mock('@date("yyyy-MM-dd")'),
    };
  }

  return result;
};

const debtSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      debterName: Mock.mock('@string(8)'),
      friend: Mock.mock('@string(5)'),
      debtType: Mock.mock('@string(5)'),
      paymentType: Mock.mock('@string(5)'),
      srcMoneySum: Mock.mock('@integer(1000, 50000)'),
      hasPaidSum: Mock.mock('@integer(1000, 40000)'),
      hasNotPaidSum: Mock.mock('@integer(1000, 10000)'),
      isPayoff: Mock.mock('@string(5)'),
      debtDate: Mock.mock('@date("yyyy-MM-dd")'),
    };
  }

  return result;
};

const transferSearchResult = () => {
  initCommonSearchResult();

  for (let i = 0; i < result.data.pageInfo.totalCount; i += 1) {
    result.data.details[i] = {
      transferPerson: Mock.mock('@string(8)'),
      srcBankType: Mock.mock('@string(5)'),
      srcCardNo: Mock.mock('@integer(1000000000000, 9000000000000)'),
      srcMoneySum: Mock.mock('@integer(1000, 50000)'),
      targetBankType: Mock.mock('@string(5)'),
      targetCardNo: Mock.mock('@integer(1000000000000, 9000000000000)'),
      rate: Mock.mock('@float(60, 100, 2, 2)'),
      targetMoneySum: Mock.mock('@integer(1000, 50000)'),
      transferDate: Mock.mock('@date("yyyy-MM-dd")'),
    };
  }

  return result;
};

Mock.mock('/login', 'post', loginResult);
Mock.mock('/consume/register', simpleResult);
Mock.mock('/consume/list', consumeSearchResult);
Mock.mock('/consume/update', simpleResult);
Mock.mock('/sales/register', simpleResult);
Mock.mock('/sales/list', salesSearchResult);
Mock.mock('/bankcard/list', cardSearchResult);
Mock.mock('/salary/list', salarySearchResult);
Mock.mock('/accesscard/list', accesscardSearchResult);
Mock.mock('/user/list', userSearchResult);
Mock.mock('/present/list', presentSearchResult);
Mock.mock('/debt/list', debtSearchResult);
Mock.mock('/transfer/list', transferSearchResult);
