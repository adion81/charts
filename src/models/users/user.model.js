class Activity {
    
    constructor(createdAt){
        var acts = ["walk","run","bike"];
        this.Title = "My Activity";
        this.Type = acts[Math.floor(Math.random() * acts.length)];
        this.DistanceMiles = this.Type === "walk" ? ((Math.random() * 4) + 1):
                                this.Type === "run" ?( (Math.random() * 18) + 2)  :
                                    this.Type === "bike" ? ((Math.random() * 45) + 5) + 5 :
                                        0;
        this.CreateAt = createdAt;
    }
}


class Pledge {
    constructor () {
        var names = ["Bradley Butler", "Lynn Patten","Fred Porter","Vida Kilgore","Patricia Harris","Robert Gore","Virgina Powell","Mark Correa","Margaret Brown","Greg Hensley","Goldie Dean","Robert Taylor","Tina Lara","Audrey Fowler","Caleb Dyal","Daisy Jackson","Demetrius Hagar","Peter Martin","Robert Lindsay","Martin Hooper","Mark Price","Tracy Hale","Harvey Folse","Leaonna Cruz"];
        var rand = Math.floor((Math.random() * 100) + 1);
        
        this.PledgerName = names[Math.floor(Math.random() * names.length)];
        this.AmountPerMile = rand > 50 ? (Math.random() * 10) : 0;
        this.StaticAmount = rand <= 50 ? (Math.random() * 200) : 0;
 
    }
}

class User {
    constructor(){
        const dates = [
            "2021-03-10T00:00:00","2021-03-11T00:00:00","2021-03-12T00:00:00","2021-03-13T00:00:00","2021-03-14T00:00:00","2021-03-15T00:00:00","2021-03-16T00:00:00","2021-03-17T00:00:00","2021-03-18T00:00:00","2021-03-19T00:00:00","2021-03-20T00:00:00","2021-03-21T00:00:00","2021-03-22T00:00:00","2021-03-23T00:00:00"
        ];
        const fNames = ["George","Randy","April","Wanda","Michael","Florence","Alvaro","Denise","Jerry","David","Juan","Patrick","Carlos","Cornelia"]
        const lNames = ["Cruz","Robertson","Dawkins","Fisk","Logan","Meyer","Davis","Talbert","Jackson","Owens","Williams","Broome","Ivey","Bryant"]
        var pledges = Math.floor((Math.random() * 10) + 1)
        this.FirstName = fNames[Math.floor(Math.random() * fNames.length)];
        this.LastName = lNames[Math.floor(Math.random() * lNames.length)];
        this.Activities = dates.map(d => new Activity(d));
        this.UserPledges = [];
        for( let i = 0; i < pledges; i++){
            this.UserPledges.push(new Pledge());
        }
    }

    totalMiles(){
        return Math.round((this.Activities.map(a => a.DistanceMiles).reduce((a,b) => {return a+b},0)) * 100) / 100;
    }
    specificMiles(act){
        return Math.round((this.Activities.map(a => a.Type ===act ? a.DistanceMiles : 0).reduce((a,b) => {return a+b},0)) * 100) / 100;
    }
    specificMilesPerDay(act,timestamp) {
        // Outputs in miles .00  per activity per day
        return Math.round((this.Activities.filter( a => a.CreateAt === timestamp && a.Type === act ).map( a => a.DistanceMiles ).reduce((a,b) => {return a+b},0)) *100) / 100;
    }


    staticPledgeAmount(){
        return Math.round((this.UserPledges.map(hp => hp.StaticAmount).reduce((a,b) => { return a+b},0)) * 100) / 100;
    }

    perMilePledgeAmount(){
        return Math.round((this.totalMiles() * (this.UserPledges.map(hp => hp.AmountPerMile).reduce((a,b) => { return a+b},0))) * 100) / 100;
    }
}



export default User;