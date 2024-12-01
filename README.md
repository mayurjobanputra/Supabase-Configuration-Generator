# Supabase Documentation Generator

A comprehensive documentation generator tool that helps developers document their Supabase project configuration. This tool generates detailed documentation reports covering various aspects of a Supabase project.

## Features

The tool documents:
- Database Schema - Tables, columns, and their properties
- Edge Functions - Serverless functions and their configurations
- Database Functions - SQL functions defined in the database
- Row Level Security (RLS) Policies - Access control rules
- Database Triggers - Automated actions based on database events
- Storage Configuration - File storage bucket settings
- Table Relationships - Foreign key relationships between tables
- Environment Variables - Required environment variables for the project

## Use Cases

This tool is particularly useful for:
- Documentation purposes
- Team onboarding
- Project handovers
- Configuration audits
- Keeping track of project structure

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Visit the local development URL shown in your terminal

## Usage

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click on "Project Settings" (the gear icon)
4. Under "API Settings", find your project URL and copy it
5. Under "API Settings", find and copy your **anon** public key
6. Paste these credentials in the application form

## Security Note

Your credentials are stored securely in your browser's memory only and are never transmitted to any server. They are automatically cleared when you:
- Close or refresh the page
- Close your browser tab
- Navigate away from this tool

This tool runs entirely in your browser and does not have a backend server.

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase Client Library

## License

[MIT License](LICENSE)