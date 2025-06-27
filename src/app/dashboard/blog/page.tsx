'use client'

import { Button, Box, Grid } from "@mui/material";
import { useState } from "react";
import { ContentPreviewContainer } from "@/containers/content/ContentPreviewContainer";
import { ContentSelectorDialog } from "@/containers/content/ContentSelectorDialog";
import { CONTENT_SAMPLES } from "@/constants/contentTypes";
import { ContentItem } from "@/interfaces/content.interface";
import { ContentLayout } from "@/components/content/ContentLayout";

export default function BlogPage() {
    const [showModal, setShowModal] = useState(false);
    const [contentItems, setContentItems] = useState<ContentItem[]>([]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={8} sx={{ maxHeight: '100vh', overflowY: 'auto', position: 'relative' }}>
                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                        <Button
                            variant="contained"
                            onClick={() => setShowModal(true)}
                        >
                            Add Content
                        </Button>
                    </Box>
                    <Box sx={{mt:6}}>
                        <ContentLayout contentItems={contentItems} />
                    </Box>
                </Grid>
                <Grid size={4}>
                    <ContentPreviewContainer 
                        contentItems={contentItems}
                        onDelete={(index: number) => {
                            setContentItems(contentItems.filter((_, i) => i !== index));
                        }}
                        onUpdate={(index: number, updatedItem: ContentItem) => {
                            const updatedItems = [...contentItems];
                            updatedItems[index] = updatedItem;
                            setContentItems(updatedItems);
                        }}
                    />
                </Grid>
            </Grid>

            <ContentSelectorDialog
                open={showModal}
                onClose={() => setShowModal(false)}
                onSelect={(type: string) => {
                    const sample = CONTENT_SAMPLES.find(item => item.type === type);
                    if (!sample) return;

                    const newItem: ContentItem = {
                        ...sample,
                        type: type as ContentItem['type']
                    };
                    setContentItems([...contentItems, newItem]);
                }}
            />
        </>
    );
}
