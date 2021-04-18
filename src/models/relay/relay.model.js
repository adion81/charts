class Activity {
    
    constructor(createdAt){
        var acts = ["walk","run"];
        this.Title = "My Activity";
        this.Type = acts[Math.floor(Math.random() * acts.length)];
        if((Math.floor(Math.random() * 100) + 1) < 5 ){
            this.Type = "bike";
        }
        this.DistanceMiles = this.Type === "walk" ? ((Math.random() * 2) + 1):
                                this.Type === "run" ?( (Math.random() * 3) + 1)  :
                                    this.Type === "bike" ? ((Math.random() * 10) + 5) + 5 :
                                        0;
        this.CreatedAt = createdAt;
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
        return Math.round((this.Activities.filter( a => a.CreatedAt === timestamp && a.Type === act ).map( a => a.DistanceMiles ).reduce((a,b) => {return a+b},0)) *100) / 100;
    }


    staticPledgeAmount(){
        return Math.round((this.UserPledges.map(hp => hp.StaticAmount).reduce((a,b) => { return a+b},0)) * 100) / 100;
    }

    perMilePledgeAmount(){
        return Math.round((this.totalMiles() * (this.UserPledges.map(hp => hp.AmountPerMile).reduce((a,b) => { return a+b},0))) * 100) / 100;
    }

    specificActivity(act){
        return this.Activities.filter(a => a.Type === act );
    }
}

class Team {
    constructor(name){
        this.TeamName = name;
        this.TeamMembers = [];
        var rand = Math.floor((Math.random() * 10) + 1);
        for(let i = 0; i < rand; i++){
            this.TeamMembers.push(new User());
        }
        this.TeamActivities = [];
        this.TeamMembers.forEach( u => u.Activities.forEach( a => this.TeamActivities.push(a)));
    }
    totalTeamMiles(){
        return Math.round((this.TeamActivities.map( a => a.DistanceMiles ).reduce( (a,b) => a+b,0 ))* 100) / 100;
    }
    specificMiles(act) {
        return Math.round((this.TeamActivities.map(a => a.Type ===act ? a.DistanceMiles : 0).reduce((a,b) => {return a+b},0)) * 100) / 100;
    }

    specificMilesPerDay(act,timestamp){
        return Math.round((this.TeamActivities.filter( a => a.CreatedAt === timestamp && a.Type === act ).map( a => a.DistanceMiles ).reduce((a,b) => {return a+b},0)) *100) / 100;
    }
}



// class UserStatCalc {
//     constructor (users){
//         this.users = users;
        
//     }
    
//     specificAllUserMilesPerDay(act,timestamp){
//         return this.users.map(u => u.specificMilesPerDay(act,timestamp)).reduce((a,b) => a+b,0).toFixed(2);
//     }

//     topUsers(num){

//     }
// }

class Relay {
    constructor () {
        var tNames = ["Rough Riders","Pecan Sandies","Street Ruffians","Katten","Hamlin, Hamlin & McGill","Lerner & Rowe","Fueled By Hops","Cereal Killers","e-Lemon-ators","Run Like the Winded","Not Fast, Just Furious","Snap, Crackle, Pop-Tarts"]
        this.Teams = [];
        for(var t in tNames){
            this.Teams.push(new Team(tNames[t]));
        }

        this.AllRelayUsers = [];
        this.Teams.forEach( t => t.TeamMembers.forEach( u => this.AllRelayUsers.push(u) ) );

        this.AllRelayActivities = [];
        this.Teams.forEach( t => t.TeamActivities.forEach( a => this.AllRelayActivities.push(a)) );

    }

    relayActivities(act,timestamp) {
        return this.AllRelayActivities.filter( a => a.Type === act && a.CreatedAt === timestamp ).map( a => a.DistanceMiles ).reduce((a,b) => a+b,0).ToFixed(2);
    }
    topTeams(num){
        return this.Teams.sort((a,b) => {
            var teamA = a.totalTeamMiles();
            var teamB = b.totalTeamMiles();
            return teamA < teamB ?  1 :
                        teamA > teamB ? -1 : 0
        }).slice(0,num);
    }
    topUsers(num){
        return this.AllRelayUsers.sort((a,b) => {
            var userA = a.totalMiles();
            var userB = b.totalMiles();
            return userA < userB ? 1 :
                        userA > userB ? -1 : 0
        }).slice(0,num);
    }
    completionPercent(totalMiles){
        return Math.floor((this.AllRelayActivities.map( a => a.DistanceMiles).reduce((a,b) => a+ b,0) / totalMiles) *100)
    }

    topSpecificUsers(act,num){
        return this.AllRelayUsers.sort((a,b) => {
            var userA = a.specificMiles(act);
            var userB = b.specificMiles(act);
            return userA < userB ? 1 :
                        userA > userB ? -1 : 0
        }).slice(0,num)
    }

    topSpecificTeams(act,num){
        return this.Teams.sort((a,b) => {
            var teamA = a.specificMiles(act);
            var teamB = b.specificMiles(act);
            return teamA < teamB ?  1 :
                        teamA > teamB ? -1 : 0
        }).slice(0,num);
    }
    

}

export default Relay;