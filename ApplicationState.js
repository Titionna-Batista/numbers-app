let initialState = { numberOne: 0 };

function reducer(state, action) {
	switch (action.type) {
		case "add":
			return { ...state, numberOne: state.numberOne + action.value };
		case "subtract":
			return { ...state, numberOne: state.numberOne - action.value };
		case "multiply":
			return { ...state, numberOne: state.numberOne * action.value };
		case "divide":
			return { ...state, numberOne: state.numberOne / action.value };
		case "reset":
			return initialState;
		default:
			return state;
	}
}
console.log(initialState);

export { initialState, reducer };
