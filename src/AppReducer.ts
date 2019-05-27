import { SHOW_SECONDS, ShowSeconds } from "./AppActions";
import { AppState } from "./AppState";

export function apply_showseconds(state: AppState | undefined, action: ShowSeconds): AppState {
    switch(action.type){
        case SHOW_SECONDS:
        return { ...state, seconds: state === undefined? 0 : state.seconds + action.extra }
    }
    return { ...state, seconds: 0 };
}
