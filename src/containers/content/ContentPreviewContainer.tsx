'use client'

import { useState } from 'react';
import { Card, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { ContentItem } from "@/interfaces/content.interface";

interface ContentPreviewContainerProps {
    contentItems: ContentItem[];
    onDelete: (index: number) => void;
    onUpdate: (index: number, updatedItem: ContentItem) => void;
}

export function ContentPreviewContainer({ 
    contentItems,
    onDelete,
    onUpdate
}: ContentPreviewContainerProps) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedItem, setEditedItem] = useState<ContentItem | null>(null);

    const handleEditClick = (index: number) => {
        setEditingIndex(index);
        setEditedItem({...contentItems[index]});
    };

    const handleUpdate = () => {
        if (editingIndex !== null && editedItem) {
            onUpdate(editingIndex, editedItem);
            setEditingIndex(null);
        }
    };

    const getFieldType = (key: string) => {
        if (key === 'width' || key === 'height') return 'number';
        return 'text';
    };

    return (
        <Card sx={{ height: '100vh', overflowY: 'auto', p: 2 }}>
            {contentItems.map((item, index) => (
                <Card key={index} sx={{ mb: 2, p: 2, position: 'relative' }}>
                    {editingIndex === index ? (
                        <div>
                            {Object.entries(editedItem || {}).map(([key, value]) => (
                                key !== 'id' && (
                                    <TextField
                                        key={key}
                                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                                        value={value || ''}
                                        onChange={(e) => setEditedItem({
                                            ...editedItem!,
                                            [key]: getFieldType(key) === 'number' 
                                                ? parseInt(e.target.value) || 0 
                                                : e.target.value
                                        })}
                                        type={getFieldType(key)}
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )
                            ))}

                            <Button 
                                variant="contained" 
                                onClick={handleUpdate}
                                sx={{ mt: 2 }}
                            >
                                Update
                            </Button>
                        </div>
                    ) : (
                        <div onClick={() => handleEditClick(index)}>
                            {item.value}
                        </div>
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
