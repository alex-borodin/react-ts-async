export const SHOW_SECONDS = "SHOW_SECONDS";

export type SHOW_SECONDS_TYPE = typeof SHOW_SECONDS;

export interface ShowSeconds {
    type: SHOW_SECONDS_TYPE;
    extra: number;
}

export function showSeconds(): ShowSeconds {
    return {
        type: SHOW_SECONDS,
        extra: 1
    }
}
