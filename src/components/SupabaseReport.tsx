import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { SchemaSection } from './supabase-report/SchemaSection';
import { EdgeFunctionsSection } from './supabase-report/EdgeFunctionsSection';
import { DatabaseFunctionsSection } from './supabase-report/DatabaseFunctionsSection';
import { EnvVarsSection } from './supabase-report/EnvVarsSection';
import { RLSPoliciesSection } from './supabase-report/RLSPoliciesSection';
import { TriggersSection } from './supabase-report/TriggersSection';
import { StorageSection } from './supabase-report/StorageSection';
import { RelationshipsSection } from './supabase-report/RelationshipsSection';

const SupabaseReport = () => {
  const { toast } = useToast();
  const [report, setReport] = useState('');

  const generateReport = () => {
    const schemaContent = (document.querySelector('#schema-section textarea') as HTMLTextAreaElement)?.value || '';
    const edgeFunctionsContent = (document.querySelector('#edge-functions-section textarea') as HTMLTextAreaElement)?.value || '';
    const dbFunctionsContent = (document.querySelector('#db-functions-section textarea') as HTMLTextAreaElement)?.value || '';
    const rlsPoliciesContent = (document.querySelector('#rls-policies-section textarea') as HTMLTextAreaElement)?.value || '';
    const triggersContent = (document.querySelector('#triggers-section textarea') as HTMLTextAreaElement)?.value || '';
    const storageContent = (document.querySelector('#storage-section textarea') as HTMLTextAreaElement)?.value || '';
    const relationshipsContent = (document.querySelector('#relationships-section textarea') as HTMLTextAreaElement)?.value || '';
    const envVarsContent = (document.querySelector('#env-vars-section textarea') as HTMLTextAreaElement)?.value || '';

    const fullReport = `
# Supabase Configuration Report

${schemaContent}

${edgeFunctionsContent}

${dbFunctionsContent}

${rlsPoliciesContent}

${triggersContent}

${storageContent}

${relationshipsContent}

${envVarsContent}
    `.trim();

    setReport(fullReport);
  };

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "The report has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8 p-4">
      <div className="flex justify-end space-x-4">
        <Button onClick={generateReport}>Generate Report</Button>
        <Button onClick={() => handleCopyToClipboard(report)}>Copy to Clipboard</Button>
      </div>

      <div className="hidden">
        <div id="schema-section">
          <SchemaSection />
        </div>

        <div id="edge-functions-section">
          <EdgeFunctionsSection />
        </div>

        <div id="db-functions-section">
          <DatabaseFunctionsSection />
        </div>

        <div id="rls-policies-section">
          <RLSPoliciesSection />
        </div>

        <div id="triggers-section">
          <TriggersSection />
        </div>

        <div id="storage-section">
          <StorageSection />
        </div>

        <div id="relationships-section">
          <RelationshipsSection />
        </div>

        <div id="env-vars-section">
          <EnvVarsSection />
        </div>
      </div>

      <Textarea 
        value={report || `Click "Generate Report" to create a comprehensive documentation of your Supabase project configuration.`} 
        readOnly 
        className="font-mono h-[800px] whitespace-pre" 
      />
    </div>
  );
};

export default SupabaseReport;