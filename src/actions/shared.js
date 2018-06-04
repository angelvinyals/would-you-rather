import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'sarahedo' //TODO: This has to be changet by clicking on a user in login page

export funtion handleInitialData () {
	return (dispatch)=>{
		return getInitialData()
			.then(({users, questions})=>{
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_ID))
			})
	}
}
