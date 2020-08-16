import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import { view } from "./view";
import actions from "./actions";

createCustomElement("x-523908-incident-list", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		table: [],
		loader: false,
	},
	styles,
	...actions,
});
