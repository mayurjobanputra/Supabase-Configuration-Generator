import { Textarea } from "@/components/ui/textarea";

export const RLSPoliciesSection = () => {
  const rlsPolicies = `
## Row Level Security Policies

### Table: coupons_made
- Policy: Enable full access for admin only
  - Command: ALL
  - Using Expression: (auth.uid() = 'fa9d0f60-85ed-4ea6-8bf1-d953ac43b96d'::uuid)
- Policy: Enable service role to insert coupons
  - Command: INSERT
- Policy: Enable service role to select coupons
  - Command: SELECT
  - Using Expression: true

### Table: email_templates
- Policy: admin_all
  - Command: ALL
  - Using Expression: (auth.uid() = 'fa9d0f60-85ed-4ea6-8bf1-d953ac43b96d'::uuid)

### Table: idea_results
- Policy: Enable delete for authenticated users
  - Command: DELETE
  - Using Expression: (auth.uid() = user_id)
- Policy: Enable insert for authenticated users
  - Command: INSERT
- Policy: Enable read access for authenticated users
  - Command: SELECT
  - Using Expression: (auth.uid() = user_id)
- Policy: Enable update for authenticated users
  - Command: UPDATE
  - Using Expression: (auth.uid() = user_id)

### Table: prompts
- Policy: Enable full access for admin only
  - Command: ALL
  - Using Expression: (auth.uid() = 'fa9d0f60-85ed-4ea6-8bf1-d953ac43b96d'::uuid)

### Table: user_purchases
- Policy: Edge functions can insert purchase data
  - Command: INSERT
- Policy: Edge functions can update purchase data
  - Command: UPDATE
  - Using Expression: true
- Policy: Users can view own purchase data
  - Command: SELECT
  - Using Expression: (auth.uid() = user_id)
`;

  return <Textarea value={rlsPolicies} readOnly className="font-mono h-[600px] whitespace-pre" />;
};