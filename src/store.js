import { createStore, applyMiddleware } from 'redux'
import reducer from '@/reducer'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/sagas'

const errorMiddleware = () => next => action => {
  if (action.type === 'PUSH_ERROR') {
    action.id = Math.random().toFixed(5)
  }

  next(action)
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(
    errorMiddleware,
    sagaMiddleware,
  ),
)

sagaMiddleware.run(rootSaga)

export default store
