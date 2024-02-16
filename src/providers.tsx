import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers;