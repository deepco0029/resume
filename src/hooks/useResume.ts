import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'

import Resume from '@/store/modules/resume'

function useResume() {
  const dispatch = useDispatch()
  const resumeState = useSelector((store: RootState) => store.resume.data)

  const fetchResume = () => {
    dispatch(Resume.actions.fetch.request(''))
  }

  return {
    resumeState,
    fetchResume
  }
}

export default useResume
