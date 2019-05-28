import { AppComp } from "./AppComp";
import * as actions from "./AppActions";
import { AppState } from "./AppState";

import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from 'redux-thunk';

export function mapAppStateToProps(state: AppState) { // untyped return
    return {
        message: "Hello",
        seconds: state.seconds
    }
}

export function mapAppDispatchToProps(dispatch: ThunkDispatch<{}, {}, AnyAction>){ // untyped return
    return {
        onShowSeconds: () => dispatch(actions.showSeconds())
    }
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(AppComp);
