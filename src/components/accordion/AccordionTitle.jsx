import { useAccordionContext } from "./Accordion.jsx"
import { useAccordionIdContext } from "./AccordionItem.jsx";

export default function AccordionTitle({ className, children }) {
    const id = useAccordionIdContext();
    const { toggleItem } = useAccordionContext();
    return <h3 onClick={() => toggleItem(id)} className={className}>{children}</h3>
}