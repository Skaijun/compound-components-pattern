import { useAccordionContext } from "./Accordion.jsx";
import { useAccordionIdContext } from "./AccordionItem.jsx";

export default function AccordionContent({ className, children }) {
    const id = useAccordionIdContext();
    const { selectedItemId } = useAccordionContext();
    const isOpen = selectedItemId === id;
    return <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>;
}