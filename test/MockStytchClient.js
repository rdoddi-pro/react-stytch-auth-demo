export default {
  user: {
    getSync: jest.fn(),
    onChange: () => () => {
    },
  },
  oauth: {
    authenticate: jest.fn(),
  },
  magicLinks: {
    authenticate: jest.fn(),
  },
  session: {
    getSync: jest.fn(),
    onChange: () => () => {
    },
    revoke: jest.fn(),
  },
  mount: jest.fn(),
}