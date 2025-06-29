'use client'

import { useState } from 'react';
import { Card, IconButton, Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { ContentItem } from "@/interfaces/content.interface";
import { ContentForm } from './ContentForm';

interface ContentPreviewContainerProps {
    contentItems: ContentItem[];
    editingIndex: number | null;
    setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
    onDelete: (index: number) => void;
    onUpdate: (index: number, updatedItem: ContentItem) => void;
}

export function ContentPreviewContainer({
    contentItems,
    setEditingIndex,
    editingIndex,
    onDelete,
    onUpdate
}: ContentPreviewContainerProps) {
    const [editedItem, setEditedItem] = useState<ContentItem | null>(null);
    const handleEditClick = (index: number) => {
        setEditingIndex(index);
        setEditedItem({ ...contentItems[index] });
    };

    const handleUpdate = () => {
        if (editingIndex !== null && editedItem) {
            onUpdate(editingIndex, editedItem);
            setEditingIndex(null);
        }
    };

    return (
        <Card sx={{ height: '100vh', overflowY: 'auto', p: 2 }}>
            {contentItems.map((item, index) => (
                <Card key={index} sx={{ mb: 2, p: 2, position: 'relative', display: 'flex', gap: 2 }}>
                    {editingIndex === index ? (
                        <Box sx={{ flex: 1, pt: 4 }}>
                            <ContentForm item={editedItem} onUpdate={setEditedItem} />

                            <Button
                                variant="contained"
                                onClick={handleUpdate}
                                sx={{ mt: 2, mr: 2 }}
                            >
                                Update
                            </Button><Button
                                variant="outlined"

                                onClick={() => setEditingIndex(null)}
                                sx={{ mt: 2 }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ flex: 1, pt: 4 }} onClick={() => handleEditClick(index)}>
                            {item.value}
                        </Box>
                    )}

                    <IconButton
                        aria-label="delete"
                        onClick={() => onDelete(index)}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'error.main'
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Card>
            ))}
        </Card>
    );
}
