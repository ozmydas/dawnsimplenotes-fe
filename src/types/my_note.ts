"use client"

export type MyNote = {
    title: string;
    content: string;
    tags?: string[];
    type?: string;
    visibility?: string;
}