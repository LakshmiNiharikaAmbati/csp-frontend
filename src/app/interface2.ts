export interface Interface2 {
    firstname: String;
    lastname: String;
    email: String;
    mobile: String;
    gender:String;
    pwd: String;
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
      Result: [];   
}
export interface Interface3{
  email:string,
  pwd:string
}