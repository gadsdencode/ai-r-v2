import React, { useState } from 'react';

export default function Disclosure() {
function useDisclosure() {
    const [isOpen, setIsOpen] = useState(false);
    
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const onToggle = () => setIsOpen(prevState => !prevState);
    
    return { isOpen, onOpen, onClose, onToggle };
}

const { isOpen, onOpen, onClose } = useDisclosure();
}