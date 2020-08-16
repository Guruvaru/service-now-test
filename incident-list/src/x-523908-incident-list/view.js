import "@servicenow/now-template-card";
import "@servicenow/now-loader";

export const view = ({ loader, table } = state) => {
	return (
		<div className="x-523908-incident-list">
			{loader ? (
				<now-loader label="Loading..." size="lg"></now-loader>
			) : (
				table.map((a) => (
					<now-template-card-assist
						tagline={{
							icon: "tree-view-long-outline",
							label: "Incident",
						}}
						actions={[
							{ id: "share", label: "Copy URL" },
							{ id: "close", label: "Mark Complete" },
						]}
						heading={{
							label: a.short_description,
						}}
						content={[
							{ label: "Number", value: { type: "string", value: a.number } },

							{ label: "State", value: { type: "string", value: a.state } },
							{
								label: "Assignment Group",
								value: {
									type: "string",
									value: a.assignment_group.display_value,
								},
							},
							{
								label: "Assigned to",
								value: { type: "string", value: a.assigned_to.display_value },
							},
						]}
						footerContent={{ label: "Updated", value: a.sys_updated_on }}
						contentItemMinWidth="300"
					></now-template-card-assist>
				))
			)}
		</div>
	);
};
