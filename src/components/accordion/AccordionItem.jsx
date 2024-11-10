import { useContext, createContext } from "react";

const AccordionIdContext = createContext();

export const useAccordionIdContext = () => {
    const ctx = useContext(AccordionIdContext);

    if (!ctx) {
        throw new Error('You should only use this context inside <Accordion.Item>');
    }

    return ctx;
}

export default function AccordionItem({ id, className, children }) {
    return <AccordionIdContext.Provider value={id}>
        <li className={className}>
            {children}
        </li>
    </AccordionIdContext.Provider>
}
