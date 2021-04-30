let initialState = { seconds: 0 };

function reducer(state, action) {
	switch (action.type) {
		case "startCount":
			return { seconds: action.payload };
		case "stopCount":
			return { seconds: state.seconds };
		case "resetCount":
			return { seconds: 0 };
		default:
			return state;
	}
};

export {initialState, reducer};
