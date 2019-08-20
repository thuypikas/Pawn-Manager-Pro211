export interface Order {
  _id: string;
  customer_id: string;
  customerName: string;
  product_id: string;
  productName: string;
  staff_id: string;
  staffName: string;
  status: number;
  created_date: Date;
  loan: number;
  interest_rate: number;
  month: number;
  interest: number;
  total_loan: number;
  interest_format: string;
  interest_vi: string;
  total_loan_format: string;
  total_loan_vi: string;
}
