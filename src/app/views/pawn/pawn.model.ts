export interface Order {
  _id: string;
  customer_id: string;
  product_id: string;
  staff_id: string;
  status: number;
  created_date: Date;
  loan: number;
  interest_rate: number;
  month: number;
  interest: number;
  total_loan: number;
}
