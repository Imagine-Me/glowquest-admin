'use client'

import { Dialog, DialogTitle, DialogContent, DialogActions, Card, Button, Box } from "@mui/material";
import { ContentGenerator } from "@/components/content/ContentGenerator";
import { CONTENT_TYPES, CONTENT_SAMPLES } from "@/constants/contentTypes";
import { useState } from "react";

interface ContentSelectorDialogProps {
    open: boolean;
    onClose: () => void;
    onSelect: (type: string) => void;
}

export function ContentSelectorDialog({ open, onClose, onSelect }: ContentSelectorDialogProps) {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>Select Type</DialogTitle>
            <DialogContent dividers sx={{ overflowY: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
                    {CONTENT_TYPES.map((type) => (
                        <Card 
                            key={type}
                            sx={{ 
                                p: 2, 
                                cursor: 'pointer',
                                border: selectedType === type ? '2px solid' : '2px solid transparent',
                                borderColor: selectedType === type ? 'primary.main' : 'transparent',
                                '&:hover': { bgcolor: 'action.hover' }
                            }}
                            onClick={() => setSelectedType(type)}
                        >
                                <ContentGenerator content={
                                    CONTENT_SAMPLES.find(item => item.type === type) || 
                                    { type, value: '' }
                                } />
                        </Card>
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained"
                    disabled={!selectedType}
                    onClick={() => {
                        if (selectedType) {
                            onSelect(selectedType);
                            onClose();
                        }
                    }}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}
