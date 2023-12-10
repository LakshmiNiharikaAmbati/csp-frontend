export interface Interface1 {
    Unitname: string,
    Unitlink: string,
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
