import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface SupabaseConfigProps {
  onConfigured: (url: string, key: string) => void;
}

export const SupabaseConfig = ({ onConfigured }: SupabaseConfigProps) => {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Test the connection
      const supabase = createClient(url, key);
      const { data, error } = await supabase.from('idea_results').select('id').limit(1);
      
      if (error) throw error;
      
      onConfigured(url, key);
      toast({
        title: "Connected successfully",
        description: "Your Supabase connection has been configured.",
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Please check your Supabase URL and anon key.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Configure Supabase Connection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium mb-1">
            Supabase Project URL
          </label>
          <Input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-project.supabase.co"
            required
          />
        </div>
        <div>
          <label htmlFor="key" className="block text-sm font-medium mb-1">
            Supabase Anon Key
          </label>
          <Input
            id="key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="your-anon-key"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Connect to Supabase
        </Button>
      </form>
    </div>
  );
};