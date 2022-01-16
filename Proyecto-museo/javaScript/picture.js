class picture{
    constructor(nameobra, autor, year,descriptionObra) {
    this.nameobra = nameobra;
    this.autor = autor;
    this.year = year;
    this.descriptionObra = descriptionObra;
    }

bio(){
    return this.nameobra + " is " + this.autor + " years old. They like" + this.year;
};
}