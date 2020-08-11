export interface IProduct {
  id: number;
  name: string;
}

export interface ITestState {
  list: Array<IProduct>;
}

const testInitialState: ITestState = {
  list: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],
};

const constants = {
  test: 'TEST',
};

export interface ITestAction {
  type: string;
  data: any;
}

export const test = (
  state = testInitialState,
  action: ITestAction,
): ITestState => {
  switch (action.type) {
    case constants.test:
      return Object.assign({}, state, {
        list: action.data,
      });
    default:
      return state;
  }
};

// export const user = (
//   state = userInitialState,
//   action: IUserAction,
// ): IUserState => {
//   switch (action.type) {
//     case constants.UserInfo:
//       return Object.assign({}, state, {
//         username: action.data,
//       });
//     default:
//       return state;
//   }
// };

// import { IUserInfo } from '@/service_interface/user.d';

// const constants = {
//   UserInfo: 'USER_INFO',
// };

// export interface IUserState {
//   user_info: IUserInfo | undefined;
//   // expire_date: Date;
// }

// const userInitialState: IUserState = {
//   user_info: undefined,
//   // expire_date: new Date(),
// };

// declare interface IUserAction {
//   type: string;
//   data: any;
// }

// export const UserInfo = (data: IUserInfo | undefined): IUserAction => ({
//   type: constants.UserInfo,
//   data,
// });
