import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const SHOW_SECONDS_STARTED = "SHOW_SECONDS_STARTED";
type SHOW_SECONDS_STARTED_TYPE = typeof SHOW_SECONDS_STARTED;
export const SHOW_SECONDS_SUCCESS = "SHOW_SECONDS_SUCCESS";
type SHOW_SECONDS_SUCCESS_TYPE = typeof SHOW_SECONDS_SUCCESS;
export const SHOW_SECONDS_FAILURE = "SHOW_SECONDS_FAILURE";
type SHOW_SECONDS_FAILURE_TYPE = typeof SHOW_SECONDS_FAILURE;

export type SHOW_SECONDS_TYPE = SHOW_SECONDS_STARTED_TYPE | SHOW_SECONDS_SUCCESS_TYPE | SHOW_SECONDS_FAILURE_TYPE;

export interface ShowSeconds {
    type: SHOW_SECONDS_TYPE;
    extra: number;
}

export function showSeconds(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        return new Promise<void>((resolve) => {
                dispatch(showSecondsStarted());
                setTimeout(() => {
                        dispatch(showSecondsSucess());
                    },
                    3000
                );
            }
        );
    }
}

function showSecondsStarted(): ShowSeconds {
    return {
        type: SHOW_SECONDS_STARTED,
        extra: 0
    }
}

function showSecondsSucess(): ShowSeconds {
    return {
        type: SHOW_SECONDS_SUCCESS,
        extra: 1
    }
}

function showSecondsFailure(): ShowSeconds {
    return {
        type: SHOW_SECONDS_FAILURE,
        extra: -1
    }
}
