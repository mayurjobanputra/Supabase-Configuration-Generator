import { useState } from "react";
import SupabaseReport from "@/components/SupabaseReport";
import { SupabaseConfig } from "@/components/SupabaseConfig";
import { createClient } from '@supabase/supabase-js';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, Shield } from "lucide-react";

export default function Index() {
  const [supabaseConfig, setSupabaseConfig] = useState<{url: string, key: string} | null>(null);

  const handleConfigured = (url: string, key: string) => {
    setSupabaseConfig({ url, key });
    // Create a new Supabase client with the provided credentials
    window._supabase = createClient(url, key);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Supabase Documentation Generator</h1>
        
        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="about">
            <AccordionTrigger>What does this app do?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  This is a Supabase Documentation Generator tool that helps developers document their Supabase project configuration. 
                  It generates comprehensive documentation reports covering various aspects of a Supabase project.
                </p>
                
                <p className="font-semibold">The tool documents:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Database Schema - Tables, columns, and their properties</li>
                  <li>Edge Functions - Serverless functions and their configurations</li>
                  <li>Database Functions - SQL functions defined in the database</li>
                  <li>Row Level Security (RLS) Policies - Access control rules</li>
                  <li>Database Triggers - Automated actions based on database events</li>
                  <li>Storage Configuration - File storage bucket settings</li>
                  <li>Table Relationships - Foreign key relationships between tables</li>
                  <li>Environment Variables - Required environment variables for the project</li>
                </ul>

                <p className="font-semibold">This tool is particularly useful for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Documentation purposes</li>
                  <li>Team onboarding</li>
                  <li>Project handovers</li>
                  <li>Configuration audits</li>
                  <li>Keeping track of project structure</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
          <p className="text-yellow-700">
            <strong>Security Note:</strong> Your credentials are stored securely in your browser's memory only and are never transmitted to any server. They are automatically cleared when you:
          </p>
          <ul className="list-disc pl-6 mt-2 text-yellow-700">
            <li>Close or refresh the page</li>
            <li>Close your browser tab</li>
            <li>Navigate away from this tool</li>
          </ul>
          <p className="mt-2 text-yellow-700">
            This tool runs entirely in your browser and does not have a backend server.
          </p>
          <p className="mt-2 text-yellow-700">
            <strong>About the anon key:</strong> The anon (public) key used by this tool is designed to be safe for client-side usage. It only provides access to public data and operations explicitly allowed by your Row Level Security (RLS) policies. Your database remains protected by these policies even if someone obtains this key.
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-800 mb-1">
                  Want to verify and run the code yourself?
                </p>
                <p className="text-blue-700 flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  Clone our <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer" className="underline">public GitHub repository</a> to inspect the source code and run this tool locally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose mb-8">
          <h2 className="text-xl font-semibold mb-4">How to use this tool:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to your <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Supabase Dashboard</a></li>
            <li>Select your project</li>
            <li>Click on "Project Settings" (the gear icon)</li>
            <li>Under "API Settings", find your project URL and copy it</li>
            <li>Under "API Settings", find and copy your <strong>anon</strong> public key</li>
            <li>Paste these credentials in the form below</li>
            <li>Once connected, click the "Generate Report" button to create your documentation</li>
            <li>Use the "Copy to Clipboard" button to save your generated documentation</li>
          </ol>
        </div>

        {!supabaseConfig ? (
          <SupabaseConfig onConfigured={handleConfigured} />
        ) : (
          <SupabaseReport />
        )}
      </div>
    </div>
  );
}