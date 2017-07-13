export class Training {

  private _id_Training: number;
  private _Label: string;
  private _DateBeginning: string;
  private _Description: string;
  private _Type: string; // CoursSoutien or formation
  private _Place: string;
  private _id_Formateur: number;

  constructor(id_Training: number, Label: string, DateBeginning: string, Description: string, Type: string, Place: string, id_Formateur: number) {
    this._id_Training = id_Training;
    this._Label = Label;
    this._DateBeginning = DateBeginning;
    this._Description = Description;
    this._Type = Type;
    this._Place = Place;
    this._id_Formateur = id_Formateur;
  }


  get id_Training(): number {
    return this._id_Training;
  }

  set id_Training(value: number) {
    this._id_Training = value;
  }

  get Label(): string {
    return this._Label;
  }

  set Label(value: string) {
    this._Label = value;
  }

  get DateBeginning(): string {
    return this._DateBeginning;
  }

  set DateBeginning(value: string) {
    this._DateBeginning = value;
  }

  get Description(): string {
    return this._Description;
  }

  set Description(value: string) {
    this._Description = value;
  }

  get Type(): string {
    return this._Type;
  }

  set Type(value: string) {
    this._Type = value;
  }

  get Place(): string {
    return this._Place;
  }

  set Place(value: string) {
    this._Place = value;
  }

  get id_Formateur(): number {
    return this._id_Formateur;
  }

  set id_Formateur(value: number) {
    this._id_Formateur = value;
  }

  public toString(): string {
    const resultat = '{ _id_Training: ' + this._id_Training
      + '_Label: ' + this._Label
      + ' _DateBeginning:  ' + this._DateBeginning
      + '_Description:   ' + this._Description
      + '_Type:  ' + this._Type
      + '_Place:  ' + this._Place
      + '_id_Formateur:  ' + this._id_Formateur + '}';
    return resultat;
  }

}
