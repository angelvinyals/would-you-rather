export const RECEIVE_USERS = 'RECEIVE_USERS'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function receiveUsers (users) {
	return {
		type: RECEIVE_USERS,
		users,
	}
}

export function AddvoteQuestionToUser ({ authedUser, qid, answer }) {
	return {
		type: VOTE_QUESTION,
		authedUser,
		qid,
		answer
	}
}