export class Formateur {

  private _id_Formateur: number;
  private _FirstName: string;
  private _LastName: string;
  private _Phone: string;
  private _Email: string;
  private _Adress: string;
  private _StudyLevel:string;
  private _Photo:string;


  constructor(id_Formateur: number, FirstName: string, LastName: string, Phone: string, Email: string, Adress: string, StudyLevel: string, Photo: string) {
    this._id_Formateur = id_Formateur;
    this._FirstName = FirstName;
    this._LastName = LastName;
    this._Phone = Phone;
    this._Email = Email;
    this._Adress = Adress;
    this._StudyLevel = StudyLevel;
    this._Photo = Photo;
  }


  get id_Formateur(): number {
    return this._id_Formateur;
  }

  set id_Formateur(value: number) {
    this._id_Formateur = value;
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

  get StudyLevel(): string {
    return this._StudyLevel;
  }

  set StudyLevel(value: string) {
    this._StudyLevel = value;
  }

  get Photo(): string {
    return this._Photo;
  }

  set Photo(value: string) {
    this._Photo = value;
  }

  public toString(): string {
    let resultat = "{ _id_Formateur: "+this._id_Formateur
      +"_FirstName: "+this._FirstName
      +" LastName:  "+this._LastName
      +"_Phone:   "+this._Phone
      +"_Email:  "+this._Email
      +"_Adress:  "+this._Adress
      +"_StudyLevel:  "+this._StudyLevel
      +"_Photo:  "+this._Phone +"}";
    return resultat;
  }
}
