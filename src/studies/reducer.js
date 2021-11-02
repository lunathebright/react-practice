export const initialState = { count: 0 };

export default function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}
