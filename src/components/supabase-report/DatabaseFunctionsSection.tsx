import { Textarea } from "@/components/ui/textarea";

export const DatabaseFunctionsSection = () => {
  const dbFunctions = `
## Database Functions

The following database functions exist:

### get_user_login_count
\`\`\`sql
CREATE OR REPLACE FUNCTION public.get_user_login_count(user_id uuid)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  return (
    select count(*)
    from auth.audit_log_entries
    where actor_id = user_id
    and action = 'login'
  );
end;
$function$
\`\`\`

### process_unprocessed_idea
\`\`\`sql
CREATE OR REPLACE FUNCTION public.process_unprocessed_idea()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Only process if status is unprocessed
  IF NEW.processing_status = 'unprocessed' THEN
    PERFORM
      net.http_post(
        url := 'https://your-project.supabase.co/functions/v1/process-idea',
        headers := jsonb_build_object(
          'Content-Type', 'application/json'
        ),
        body := jsonb_build_object('ideaId', NEW.id)
      );
  END IF;
  RETURN NEW;
END;
$function$
\`\`\`

### process_unprocessed_idea_v2
\`\`\`sql
CREATE OR REPLACE FUNCTION public.process_unprocessed_idea_v2()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Only process if status is unprocessed
  IF NEW.processing_status = 'unprocessed' THEN
    PERFORM
      net.http_post(
        url := 'https://your-project.supabase.co/functions/v1/process-idea',
        headers := jsonb_build_object(
          'Content-Type', 'application/json'
        ),
        body := jsonb_build_object('ideaId', NEW.id)
      );
  END IF;
  RETURN NEW;
END;
$function$
\`\`\`

### update_updated_at_column
\`\`\`sql
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$
\`\`\`
`;

  return <Textarea value={dbFunctions} readOnly className="font-mono h-[400px] whitespace-pre" />;
};