import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import counter from '@Redux/Counter'

import { CustomButton } from '@Components/custombutton'
// import CustomButton from '@Components/custombutton/custombutton'

import styles from './Homepage.module.scss'

function Homepage() {
  const count = useAppSelector(counter.selectors.getCounter)
  const dispatch = useAppDispatch()

  const increment = () => {
    dispatch(counter.actions.increment(1))
    dispatch(counter.async_thunks.fetchPosts({ counter: 1 }))
  }

  return (
    <div className={styles.container}>
      <CustomButton onClick={increment}>
        count is: {count}
      </CustomButton>
    </div>
  )
}

export default Homepage
