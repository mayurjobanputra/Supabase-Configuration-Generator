import { Textarea } from "@/components/ui/textarea";

export const TriggersSection = () => {
  const triggers = `
## Database Triggers

### process_unprocessed_idea_v2
- Table: idea_results
- Event: INSERT
- Timing: AFTER
- For Each: ROW
- Function: process_unprocessed_idea_v2()

### update_coupons_made_updated_at
- Table: coupons_made
- Event: UPDATE
- Timing: BEFORE
- For Each: ROW
- Function: update_updated_at_column()

### update_email_templates_updated_at
- Table: email_templates
- Event: UPDATE
- Timing: BEFORE
- For Each: ROW
- Function: update_updated_at_column()

### update_prompts_updated_at
- Table: prompts
- Event: UPDATE
- Timing: BEFORE
- For Each: ROW
- Function: update_updated_at_column()

### update_user_purchases_updated_at
- Table: user_purchases
- Event: UPDATE
- Timing: BEFORE
- For Each: ROW
- Function: update_updated_at_column()
`;

  return <Textarea value={triggers} readOnly className="font-mono h-[400px] whitespace-pre" />;
};