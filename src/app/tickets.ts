export interface Ticket {
    id: number;
    ticket_number: string;
    server_sn:string;
    ip:string;
    start_date:string;
    close_date?:string;
    product_name:string;
    model:string;
    location:string;
    failure_type:string;
    if_change_part?:Boolean;
    foxconn_pn?:string;
    old_manufacture?:string;
    old_part_pn?:string;
    new_manufacture?:string;
    new_pn?:string;
    old_part_sn?:string;
    good_part_sn?:string;
    part_position?:string;
    error_description?:string;
    feedback?:string;
    tech?:string;
    repair_date?:string;
    period?:string;
    status:string;
    requester:string;
    notes?:string;
    initial_stock_status?:string;
    foxconn_china_or_us?:string;
    platform?:string;
    ot_reason?:string;
    hhpn?:string

}
