function Reducer(state, action) {
    let result = 0;
  
    switch (action.type) {
      case "topla":
        result = state.res + state.firstNum + state.secondNum;
        return { ...state, res: result };
      case "cixma":
        result = state.res + state.firstNum - state.secondNum;
        return { ...state, res: result };
      case "vurma":
        result = state.res + state.firstNum * state.secondNum;
        return { ...state, res: result };
      case "bolme":
        result = state.res + state.firstNum / state.secondNum;
        return { ...state, res: result };
      default:
        return state;
    }
  }
  
  export default Reducer;
  