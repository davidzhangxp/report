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

export const report_titles: string[] = [
   
        "Ticket_Number",
        "SN",
        "IP",
        "Ticket_Time",
        "Close_Time",
        "Product_Name",
        "Model",
        "Location",
        "Unit",
        "Failure_Type"
        
]

export const tickets_list:Ticket[] = [
    {    id: 1,
        ticket_number: '123',
        server_sn:'Ex321',
        ip:'1234556',
        start_date:'10-21-2024',
        close_date:'10-31-2024',
        product_name:'ss',
        model:'r240',
        location:'us-alt-j30',
        failure_type:'disk',
        if_change_part:true,
        foxconn_pn:'',
        old_manufacture:'',
        old_part_pn:'',
        new_manufacture:'',
        new_pn:'',
        old_part_sn:'',
        good_part_sn:'',
        part_position:'',
        error_description:'',
        feedback:'',
        tech:'zihao',
        repair_date:'',
        period:'',
        status:"Confirm Closed",
        requester:"asia",
        notes:'foxconn',
        initial_stock_status:'out of stock',
        foxconn_china_or_us:'',
        platform:'',
        ot_reason:'',
        hhpn:''
    },
    {    id: 2,
        ticket_number: '234123',
        server_sn:'Ex321',
        ip:'1234556',
        start_date:'10-21-2024',
        close_date:'10-31-2024',
        product_name:'ss',
        model:'r240',
        location:'us-alt-j30',
        failure_type:'disk',
        if_change_part:true,
        foxconn_pn:'',
        old_manufacture:'',
        old_part_pn:'',
        new_manufacture:'',
        new_pn:'',
        old_part_sn:'',
        good_part_sn:'',
        part_position:'',
        error_description:'',
        feedback:'',
        tech:'zihao',
        repair_date:'',
        period:'',
        status:"Confirm Closed",
        requester:"asia",
        notes:'foxconn',
        initial_stock_status:'out of stock',
        foxconn_china_or_us:'',
        platform:'',
        ot_reason:'',
        hhpn:''
    }
]
