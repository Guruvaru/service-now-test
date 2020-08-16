import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import "@servicenow/now-template-card";
import styles from "./styles.scss";
import cardItems from "./cardItems";

const view = ({ properties }) => {
	return (
		<div className="x-523908-card-list">
			{properties.items.map((a, i) => (
				<now-template-card-assist
					key={i}
					tagline={a.tagline}
					actions={a.actions}
					heading={a.heading}
					content={a.content}
					footer-content={a.footerContent}
				/>
			))}
		</div>
	);
};

createCustomElement("x-523908-card-list", {
	renderer: { type: snabbdom },
	properties: {
		items: {
			default: [...cardItems],
		},
	},
	view,
	styles,
});
