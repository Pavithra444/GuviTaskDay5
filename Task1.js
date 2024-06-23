class Movie{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }

    static getPG(films){
           let Arr=[];
           for(var i=0;i<films.length;i++)
            {
                if(films[i].rating=="PG")
                    {
                        Arr.push(films[i].title);
                    }
            }
           return Arr;
    }

    getDetails()
    {
        console.log(this.rating);
    }

}

let CasinoRoyale=new Movie("Casino Royale","Eon Productions","PG­13");
let Ko=new Movie("Ko","RS Infotainment","PG");  //PG
let Ayan=new Movie("Ayan","AVM","PG");          //PG        
let SooriyaVamsam=new Movie("SooriyaVamsam","AVM","PG13");
let PanchaThanthiram=new Movie("PanchaThanthiram","AVM","PG13");
let Singam=new Movie("Singam","SunPictures","A+");
let Saamy=new Movie("Saamy","StudioGreen","A+");
let SeethaRamam=new Movie("SeethaRamam","AVM");  //Default PG

let films=[CasinoRoyale,Ko,Ayan,SooriyaVamsam,PanchaThanthiram,Singam,Saamy,SeethaRamam];

let PGmovies=Movie.getPG(films);
console.log("Movies With Rating PG");
console.log("*********************")
for(i=0;i<PGmovies.length;i++)
    {
        console.log((i+1)+"."+PGmovies[i]);
    }

