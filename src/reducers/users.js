import {
	RECEIVE_USERS,
	VOTE_QUESTION,
	} from '../actions/users'

import {SAVE_QUESTION_ANSWER} from '../actions/shared'

export default function users(state = {}, action){
	switch(action.type){
		case RECEIVE_USERS: 
			return {
				...state,
				...action.users
			}
		case SAVE_QUESTION_ANSWER: 
			return {
				...state,
				[action.authedUser]: {
			        ...state[action.authedUser],
			        answers: {
			        	...state[action.authedUser].answers,
			            [action.qid]: action.answer
			        }
			    }
			}
			
		default :
			return state
		
	}
}

