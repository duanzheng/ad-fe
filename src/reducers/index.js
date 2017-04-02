/**
 * Created by Tony on 2017/3/15.
 */
import { ADD_TODO } from '../actions/todos';

var defaultState = {
	items: [{
		state: 'ready',
		desc: '准备做的事情'
	}, {
		state: 'doing',
		desc: '正在做的事情'
	}]
}

function reducer(state = defaultState, action) {
	switch (action.type) {
        case ADD_TODO:
            return Object.assign(state, {
                items: [{
                    state: 'ready',
                    desc: action.desc
                }, ...state.items]
            });
		default:
		    return state;
	}
}

export default reducer;