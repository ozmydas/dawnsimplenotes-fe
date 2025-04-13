"use client"

export type MyNote = {
    title: string;
    content: string;
    tags?: string[];
    type?: string;
    visibility?: string;
    path_code?: string;
    created_at?: String;
}