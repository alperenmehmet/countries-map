import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
