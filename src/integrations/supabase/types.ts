export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      coupons_made: {
        Row: {
          created_at: string
          description: string | null
          discount_amount: number
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount_amount: number
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          discount_amount?: number
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          body: string
          created_at: string
          description: string | null
          from_email: string
          from_name: string
          id: string
          is_active: boolean | null
          name: string
          subject: string
          to_email: string | null
          to_name: string | null
          type: Database["public"]["Enums"]["email_template_type"]
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          description?: string | null
          from_email: string
          from_name: string
          id?: string
          is_active?: boolean | null
          name: string
          subject: string
          to_email?: string | null
          to_name?: string | null
          type: Database["public"]["Enums"]["email_template_type"]
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          description?: string | null
          from_email?: string
          from_name?: string
          id?: string
          is_active?: boolean | null
          name?: string
          subject?: string
          to_email?: string | null
          to_name?: string | null
          type?: Database["public"]["Enums"]["email_template_type"]
          updated_at?: string
        }
        Relationships: []
      }
      idea_results: {
        Row: {
          created_at: string
          feasibility_score: number | null
          generated_ads: Json | null
          generated_domain: string | null
          hero_call_to_action_button_text: string | null
          hero_subtitle: string | null
          hero_title: string | null
          id: string
          idea: string
          improve_score: string | null
          innovation_score: number | null
          market_potential_score: number | null
          problem: string
          processing_status: Database["public"]["Enums"]["processing_status"]
          professional_description: string | null
          reasoning: string | null
          session_id: string | null
          solution: string
          target_audience: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          feasibility_score?: number | null
          generated_ads?: Json | null
          generated_domain?: string | null
          hero_call_to_action_button_text?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          id: string
          idea: string
          improve_score?: string | null
          innovation_score?: number | null
          market_potential_score?: number | null
          problem: string
          processing_status?: Database["public"]["Enums"]["processing_status"]
          professional_description?: string | null
          reasoning?: string | null
          session_id?: string | null
          solution: string
          target_audience: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          feasibility_score?: number | null
          generated_ads?: Json | null
          generated_domain?: string | null
          hero_call_to_action_button_text?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          id?: string
          idea?: string
          improve_score?: string | null
          innovation_score?: number | null
          market_potential_score?: number | null
          problem?: string
          processing_status?: Database["public"]["Enums"]["processing_status"]
          professional_description?: string | null
          reasoning?: string | null
          session_id?: string | null
          solution?: string
          target_audience?: string
          user_id?: string | null
        }
        Relationships: []
      }
      prompts: {
        Row: {
          content: string
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_purchases: {
        Row: {
          amount: number
          coupon_id: string | null
          created_at: string | null
          id: string
          idea_id: string | null
          original_price: number
          status: string
          stripe_customer_id: string | null
          stripe_payment_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          coupon_id?: string | null
          created_at?: string | null
          id?: string
          idea_id?: string | null
          original_price: number
          status: string
          stripe_customer_id?: string | null
          stripe_payment_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          coupon_id?: string | null
          created_at?: string | null
          id?: string
          idea_id?: string | null
          original_price?: number
          status?: string
          stripe_customer_id?: string | null
          stripe_payment_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_purchases_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons_made"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_purchases_idea_id_fkey"
            columns: ["idea_id"]
            isOneToOne: false
            referencedRelation: "idea_results"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_login_count: {
        Args: {
          user_id: string
        }
        Returns: number
      }
    }
    Enums: {
      email_template_type: "admin_notification" | "user_confirmation"
      processing_status: "unprocessed" | "active" | "done"
      prompt_type: "description" | "scoring" | "ads" | "domain"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
