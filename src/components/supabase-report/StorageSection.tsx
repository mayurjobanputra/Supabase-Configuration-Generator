import { Textarea } from "@/components/ui/textarea";

export const StorageSection = () => {
  const storage = `
## Storage Configuration

No storage buckets are currently configured in the project.

To create a new storage bucket:
1. Go to Storage in the Supabase Dashboard
2. Click "Create new bucket"
3. Configure bucket settings (public/private)
4. Set up relevant RLS policies
`;

  return <Textarea value={storage} readOnly className="font-mono h-[200px] whitespace-pre" />;
};