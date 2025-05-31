"use client"

export type MyNote = {
    code: string;
    title: string;
    content: string;
    tags?: string[];
    type?: string;
    visibility?: string;
    path_code?: string;
    created_at?: String;
}