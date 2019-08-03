export interface Me {
  job: string;
  salary: number;
  company: string;
  contact_people: string;
  contact_phone: string;
}

export interface Other {
  father_name: string;
  father_phone: string;
  mother_name: string;
  mother_phone: string;
}

export interface Description {
  me: Me;
  other: Other;
}

export interface Customer {
  description: Description;
  _id: string;
  username: string;
  fullname: string;
  email: string;
  password: string;
  birthday: Date;
  phone: string;
  identification: string;
  address: string;
  created_date: Date;
  created_address: string;
  avatar: string;
  gender: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
