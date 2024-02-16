import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import counter from '@Redux/Counter'

import { CustomButton } from '@Components/custombutton'
// import CustomButton from '@Components/custombutton/custombutton'

import './App.css'

function App() {
  const count = useAppSelector(counter.selectors.getCounter)
  const dispatch = useAppDispatch()

  const increment = () => {
    dispatch(counter.actions.increment(1))
    dispatch(counter.async_thunks.fetchPosts({ counter: 1 }))
  }

  return (
    <>
      <CustomButton onClick={increment}>
        count is: {count}
      </CustomButton>
    </>
  )
}

export default App
