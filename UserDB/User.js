export class User{
    constructor(email_, fullName_,  password_, age_, location_, phoneNumber_, 
        sex_, height_, currentWeight_, goalWeight_, tde_){
            this.email = email_;
            this.fullName = fullName_;
            this.password = password_;
            this.age = age_;
            this.location = location_;
            this.phoneNumber = phoneNumber_;
            this.sex = sex_;
            this.height = height_;
            this.currentWeight = currentWeight_;
            this.goalWeight = goalWeight_;
            this.tde = tde_;
    }

    getUserInfo(){
        return [this.email, this.fullName , this.password, this.age, this.location, this.phoneNumber, this.sex, this.height, 
            this.currentWeight, this.goalWeight, this.tde];
    }
}

