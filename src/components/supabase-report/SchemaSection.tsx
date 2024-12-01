import { Textarea } from "@/components/ui/textarea";

export const SchemaSection = () => {
  const schema = `
# Supabase Configuration Report

## Database Schema

### Table: coupons_made
- id (text, not null)
- discount_amount (numeric, not null)
- description (text, null)
- created_at (timestamp with time zone, not null)
- updated_at (timestamp with time zone, not null)

### Table: email_templates
- id (uuid, not null)
- type (enum, not null)
- name (text, not null)
- description (text, null)
- from_name (text, not null)
- from_email (text, not null)
- to_name (text, null)
- to_email (text, null)
- subject (text, not null)
- body (text, not null)
- is_active (boolean, default: true)
- created_at (timestamp with time zone, not null)
- updated_at (timestamp with time zone, not null)

### Table: idea_results
- id (text, not null)
- idea (text, not null)
- problem (text, not null)
- target_audience (text, not null)
- solution (text, not null)
- professional_description (text, null)
- innovation_score (integer, null)
- market_potential_score (integer, null)
- feasibility_score (integer, null)
- reasoning (text, null)
- created_at (timestamp with time zone, not null)
- user_id (uuid, null)
- session_id (text, null)
- processing_status (enum, not null, default: 'unprocessed')
- generated_ads (jsonb, null)
- generated_domain (text, null)
- hero_title (text, null)
- hero_subtitle (text, null)
- hero_call_to_action_button_text (text, null)
- improve_score (text, null)

### Table: prompts
- id (uuid, not null)
- name (text, not null)
- content (text, not null)
- created_at (timestamp with time zone, not null)
- updated_at (timestamp with time zone, not null)

### Table: user_purchases
- id (uuid, not null)
- user_id (uuid, not null)
- stripe_customer_id (text, null)
- stripe_payment_id (text, null)
- amount (numeric, not null)
- status (text, not null)
- created_at (timestamp with time zone, null)
- updated_at (timestamp with time zone, null)
- original_price (numeric, not null)
- idea_id (text, null)
- coupon_id (text, null)

## Foreign Key Relationships

- user_purchases.coupon_id -> public.coupons_made.id
- user_purchases.idea_id -> public.idea_results.id
- user_purchases.user_id -> auth.users.id
- idea_results.user_id -> auth.users.id
`;

  return <Textarea value={schema} readOnly className="font-mono h-[600px] whitespace-pre" />;
};