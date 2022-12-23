export interface Bill {
    items: BillItem[];
    total: number;
}

export interface BillItem {
    subject: string;
    amount: number;
}