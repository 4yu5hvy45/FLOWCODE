export interface NavItem {
    label: string;
    path: string;
}

export interface DeliverableItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    specs: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}
