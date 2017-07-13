export class Customer {

  private _id_Custumer: number;
  private _FirstName: string;
  private _LastName: string;
  private _Phone: string;
  private _Email: string;
  private _Adress: string;
  private  _id_Training:number;


  constructor(id_Custumer: number, FirstName: string, LastName: string, Phone: string, Email: string, Adress: string, id_Training: number) {
    this._id_Custumer = id_Custumer;
    this._FirstName = FirstName;
    this._LastName = LastName;
    this._Phone = Phone;
    this._Email = Email;
    this._Adress = Adress;
    this._id_Training = id_Training;
  }


  get id_Custumer(): number {
    return this._id_Custumer;
  }

  set id_Custumer(value: number) {
    this._id_Custumer = value;
  }

  get FirstName(): string {
    return this._FirstName;
  }

  set FirstName(value: string) {
    this._FirstName = value;
  }

  get LastName(): string {
    return this._LastName;
  }

  set LastName(value: string) {
    this._LastName = value;
  }

  get Phone(): string {
    return this._Phone;
  }

  set Phone(value: string) {
    this._Phone = value;
  }

  get Email(): string {
    return this._Email;
  }

  set Email(value: string) {
    this._Email = value;
  }

  get Adress(): string {
    return this._Adress;
  }

  set Adress(value: string) {
    this._Adress = value;
  }

  get id_Training(): number {
    return this._id_Training;
  }

  set id_Training(value: number) {
    this._id_Training = value;
  }

  public toString(): string {
    let resultat = "{ _id_Custumer: "+this._id_Custumer
      +"_FirstName: "+this._FirstName
      +" LastName:  "+this._LastName
      +"_Phone:   "+this._Phone
      +"_Email:  "+this._Email
      +"_Adress:  "+this._Adress
      +"_id_Training:  "+this.id_Training+"}";
    return resultat;
  }
}
