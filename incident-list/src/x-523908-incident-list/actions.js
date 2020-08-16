import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import { createHttpEffect } from "@servicenow/ui-effect-http";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: ({ dispatch }) => {
			dispatch("UPDATE_LOADER", true);
			dispatch("FETCH_TABLE");
		},
		'UPDATE_LOADER': ({ action, updateState }) => {
			const { payload } = action;
			updateState({ loader: payload });
		},
		'UPDATE_TABLE': ({ action, updateState }) => {
			const { payload } = action;
			updateState({ table: payload });
		},
		'FETCH_TABLE': createHttpEffect(
			"api/now/table/incident?sysparm_display_value=true",
			{
				method: "GET",
				successActionType: "FETCH_TABLE_SUCCESS",
			}
		),
		'FETCH_TABLE_SUCCESS': ({ dispatch, action }) => {
			const { result } = action.payload;
			dispatch("UPDATE_TABLE", result);
			dispatch("UPDATE_LOADER", false);
		},
	},
};
