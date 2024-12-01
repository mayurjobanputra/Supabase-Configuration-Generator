import { Textarea } from "@/components/ui/textarea";

export const EnvVarsSection = () => {
  const envVars = `
## Environment Variables Required

The following secrets are configured:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- SUPABASE_DB_URL
- RECAPTCHA_SITE_KEY
- RECAPTCHA_SECRET_KEY
- BREVO_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SIGNING_SECRET
- STRIPE_TEST_SECRET_KEY
- STRIPE_TEST_WEBHOOK_SIGNING_SECRET
- RAPID_API_TEXT_KEY
- OPENAI_API_KEY
`;

  return <Textarea value={envVars} readOnly className="font-mono h-[300px] whitespace-pre" />;
};