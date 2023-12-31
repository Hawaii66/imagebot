export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      extra: {
        Row: {
          created_at: string | null;
          extra: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          extra: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string | null;
          extra?: string;
          id?: number;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "extra_name_fkey";
            columns: ["name"];
            referencedRelation: "category";
            referencedColumns: ["name"];
          }
        ];
      };
      images: {
        Row: {
          category: string;
          created_at: string | null;
          description: string;
          id: number;
          image: string;
          uploaded: boolean;
        };
        Insert: {
          category: string;
          created_at?: string | null;
          description: string;
          id?: number;
          image: string;
          uploaded: boolean;
        };
        Update: {
          category?: string;
          created_at?: string | null;
          description?: string;
          id?: number;
          image?: string;
          uploaded?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "images_category_fkey";
            columns: ["category"];
            referencedRelation: "category";
            referencedColumns: ["name"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
