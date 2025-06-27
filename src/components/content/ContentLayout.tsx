'use client'

import { ContentGenerator } from "./ContentGenerator";
import { ContentItem } from "@/interfaces/content.interface";

interface ContentLayoutProps {
    contentItems: ContentItem[];
}

export function ContentLayout({ contentItems }: ContentLayoutProps) {
    return (
        <>
            {contentItems.map((item, index) => (
                <ContentGenerator key={index} content={item} />
            ))}
        </>
    );
}
