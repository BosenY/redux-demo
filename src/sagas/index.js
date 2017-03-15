// import { takeEvery } from 'redux-saga'  //新的已经放到redux-saga/effects里面 而且yield也不用加*号了
import { put,call,takeEvery } from 'redux-saga/effects'
export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync() {
  yield call(delay,1000)

  yield put({ type: 'increase' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}