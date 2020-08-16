import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	return <div className="x-523908-hello-world">{state.text}</div>;
};

createCustomElement("x-523908-hello-world", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		text: "Hello world!",
	},
	styles,
});
