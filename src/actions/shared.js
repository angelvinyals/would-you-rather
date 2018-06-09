import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer } from  '../utils/_DATA'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTON_ANSWER'

export function handleInitialData () {
	return (dispatch)=>{
		dispatch(showLoading())
		return getInitialData()
			.then(({users, questions})=>{
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())				
			})
	}
}

function saveQAnswer ({ authedUser, qid, answer }) {
	return{
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer	
	}	
}

export function handleSaveAnswer(info){
	return (dispatch ) =>{
		dispatch(saveQAnswer(info))

		return _saveQuestionAnswer(info)
			.catch((e)=>{
				console.warm('Error in handleSaveAnswer:',e)
				dispatch(saveQAnswer(info))
				alert ('There was an error liking the answer. Try again ')	
			})
	}
}