export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      issues: {
        Row: {
          created_at: string
          id: number
          is_open: boolean
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_open?: boolean
          title?: string
        }
        Update: {
          created_at?: string
          id?: number
          is_open?: boolean
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
