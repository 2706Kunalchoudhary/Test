import * as types from "./actionTypes";
import defaultState from "./states";

/**
 * Reducer
 */
export default function parentFlowReducer(
    state = defaultState.localStates,
    action
) 

{
    switch (action.type) {
        case types.INTRO_STATUS:
            return {
                ...state,
                introStatus: action.payload.introStatus
            }

            case types.GROUP_NAME:
            return {
                ...state,
                groupName: action.payload.groupName
            }        
        
        default:
            return state;
    }

}

/**
 * Actions
 */
export const actions = {
    setIntroStatus: introStatus => {
        return {
            type: types.INTRO_STATUS,
            payload: { introStatus: introStatus }
        };
    },

    setGroupName: groupName => {
        return {
            type: types.GROUP_NAME,
            payload: { groupName: groupName }
        };
    },

} 