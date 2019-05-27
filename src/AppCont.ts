import { AppComp } from "./AppComp";
import * as actions from "./AppActions";
import { AppState } from "./AppState";

import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapAppStateToProps(state: AppState) { // untyped return
    return {
        message: "Hello",
        seconds: state.seconds
    }
}

export function mapAppDispatchToProps(dispatch: Dispatch<actions.ShowSeconds>){ // untyped return
    return {
        onShowSeconds: () => dispatch(actions.showSeconds())
    }
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(AppComp);
