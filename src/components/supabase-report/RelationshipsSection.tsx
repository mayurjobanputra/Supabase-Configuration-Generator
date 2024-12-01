import { Textarea } from "@/components/ui/textarea";

export const RelationshipsSection = () => {
  const relationships = `
## Foreign Key Relationships

### user_purchases Table
- coupon_id -> public.coupons_made.id
- idea_id -> public.idea_results.id
- user_id -> auth.users.id

### idea_results Table
- user_id -> auth.users.id

## Enum Types

### email_template_type
- admin_notification
- user_confirmation

### processing_status
- unprocessed
- active
- done

### prompt_type
- description
- scoring
- ads
- domain
`;

  return <Textarea value={relationships} readOnly className="font-mono h-[300px] whitespace-pre" />;
};