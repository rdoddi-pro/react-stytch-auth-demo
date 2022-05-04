# stytch-demo

Simple reactjs webapp primarily demonstrating stytch as login-as-service.

This demo app serves as an example for following tooling

1. [Stytch](https://stytch.com/) auth for login-as-service
2. [Recoil](https://recoiljs.org/) for state management
3. [React Router Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview) for client side routing
4. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing
5. Recoil component mocking for tests
6. React in-built CI tooling for code coverage

## About Author

Author: Ramesh Doddi <rdoddi.pro@gmail.com> [LinkedIn](https://www.linkedin.com/in/rdoddi/)

Technology executive and entrepreneur continuously looking out for creative products to streamline and accelerate
product roadmaps.

## LICENSE

Distributed under terms listed in [LICENSE](./LICENSE)

## Configuration

```shell
cp .env-template .env
```

1. Set up your [Stytch](https://stytch.com/) account
2. Create demo project
3. Get your public key from Stytch project dashboard
4. Copy to env

## Build & Run

```shell
npm install
npm run start
```

## Test coverage

```shell
npm run test:ci
open coverage/lcov-report/index.html
```
