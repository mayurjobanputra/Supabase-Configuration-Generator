import { Textarea } from "@/components/ui/textarea";

export const EdgeFunctionsSection = () => {
  const edgeFunctions = `
## Edge Functions

### process-idea-v2
- Name: process-idea-v2
- Path: /process-idea-v2
- Method: POST
- Description: Processes new ideas and generates additional content
- Environment Variables Required:
  - OPENAI_API_KEY
  - RAPID_API_TEXT_KEY
- CORS: Enabled
- Rate Limits: Default
- Auth: JWT verification required

Implementation:
\`\`\`typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from '@supabase/supabase-js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ideaId } = await req.json();
    
    // Process idea logic here
    // Uses OpenAI and RapidAPI for content generation
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
\`\`\`

### process-idea-v4
- Name: process-idea-v4
- Path: /process-idea-v4
- Method: POST
- Description: Enhanced idea processing with additional scoring and content generation
- Environment Variables Required:
  - OPENAI_API_KEY
  - RAPID_API_TEXT_KEY
- CORS: Enabled
- Rate Limits: Default
- Auth: JWT verification required

Implementation:
\`\`\`typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from '@supabase/supabase-js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ideaId } = await req.json();
    
    // Enhanced idea processing logic
    // Includes scoring and additional content generation
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
\`\`\`

### process-payment
- Name: process-payment
- Path: /process-payment
- Method: POST
- Description: Handles Stripe payment processing and purchase records
- Environment Variables Required:
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SIGNING_SECRET
- CORS: Enabled
- Rate Limits: Default
- Auth: JWT verification required

Implementation:
\`\`\`typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@11.1.0?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, currency = 'usd' } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency,
          product_data: {
            name: 'Purchase',
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
\`\`\`

### send-email
- Name: send-email
- Path: /send-email
- Method: POST
- Description: Handles email sending via Brevo API
- Environment Variables Required:
  - BREVO_API_KEY
- CORS: Enabled
- Rate Limits: Default
- Auth: JWT verification required

Implementation:
\`\`\`typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html } = await req.json();

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': Deno.env.get('BREVO_API_KEY') || '',
      },
      body: JSON.stringify({
        sender: { email: 'noreply@example.com', name: 'System' },
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
\`\`\`
`;

  return <Textarea value={edgeFunctions} readOnly className="font-mono h-[800px] whitespace-pre" />;
};