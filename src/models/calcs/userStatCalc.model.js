class UserStatCalc {
    constructor (users){
        this.users = users;
    }
    
    specificAllUserMilesPerDay(act,timestamp){
        return this.users.map(u => u.specificMilesPerDay(act,timestamp)).reduce((a,b) => a+b,0).toFixed(2);
    }
}

export default UserStatCalc;