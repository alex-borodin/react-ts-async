import { ShowSeconds, SHOW_SECONDS_STARTED, SHOW_SECONDS_SUCCESS, SHOW_SECONDS_FAILURE } from "./AppActions";
import { AppState } from "./AppState";

export function apply_showseconds(state: AppState | undefined, action: ShowSeconds): AppState {
    switch(action.type){
        case SHOW_SECONDS_STARTED:
        return { ...state, seconds: state === undefined? 0 : state.seconds + action.extra }
        case SHOW_SECONDS_SUCCESS:
        return { ...state, seconds: state === undefined? 0 : state.seconds + action.extra }
        case SHOW_SECONDS_FAILURE:
        return { ...state, seconds: state === undefined? 0 : state.seconds + action.extra }
    }
    return { ...state, seconds: 0 };
}
