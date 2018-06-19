class SocialProfile {
    private id : number;
    private about? : string;
    private phoneNo? : number;
    private email : string;
    private work? : string;
    private education? : string;
    private dob : string;
    private hometown? : string;
    private family? : string[];
    private friends? : string[];
    private photos? : string[];
    private videos? : string[];
    private checkins? : string[];
    private music? : string[];
    private movies? : string[];
    private sports? : string[];
    private likes? : string[];

    constructor(id : number,dob : string,email : string,friends? : string[],photos? : string[],videos? : string[],about? : string,phoneNo? : number,work? : string,education? : string,hometown? : string,family? : string[],checkins? : string[],music? : string[],movies? : string[],sports? : string[],likes? : string[]){
        this.id = id;
        this.about = about;
        this.phoneNo = phoneNo;
        this.email = email;
        this.work = work;
        this.education = education;
        this.dob = dob;
        this.hometown = hometown;
        this.family = family;
        this.friends = friends;
        this.photos = photos;
        this.videos = videos;
        this.checkins = checkins;
        this.music = music;
        this.movies = movies;
        this.sports = sports;
        this.likes = likes;
    
    }

    //getters
    getId = () => {
        return this.id
    }
    getDob = () => {
        return this.dob
    }
    
    getAbout = () => {
        if(this.about){
            return this.about
        } else {
            return null
        }
    }
    getPhoneNo = () => {
        if(this.phoneNo){
            return this.phoneNo
        } else {
            return null
        }
    }
    getEmail = () => {
        if(this.email){
            return this.email
        } else {
            return null
        }
    }
    getWork = () => {
        if(this.work){
            return this.work
        } else {
            return null
        }
    }
    getEducation = () => {
        if(this.education){
            return this.education
        } else {
            return null
        }
    }
    getHometown = () => {
        if(this.hometown){
            return this.hometown
        } else {
            return null
        }
    }
    getFamily = () => {
        if(this.family){
            return this.family
        } else {
            return null
        }
    }
    getFriends = () => {
        if(this.friends){
            return this.friends
        } else {
            return null
        }
    }
    getPhotos = () => {
        if(this.photos){
            return this.photos
        } else {
            return null
        }
    }
    getVideos = () => {
        if(this.videos){
            return this.videos
        } else {
            return null
        }
    }
    getCheckins = () => {
        if(this.checkins){
            return this.checkins
        } else {
            return null
        }
    }
    getMusic = () => {
        if(this.music){
            return this.music
        } else {
            return null
        }
    }
    getMovies = () => {
        if(this.movies){
            return this.music
        } else {
            return null
        }
    }
    getSports = () => {
        if(this.sports){
            return this.sports
        } else {
            return null
        
        }
    }
    getLikes = () => {
        if(this.likes){
            return this.likes
        } else {
            return null
        }
    }

    // Method
    getAge = () => {
        console.log("Calculates the age")
    }
}

// Input
let myProfile = new SocialProfile(
    12345, // ID
    "04/10/1994", // DOB
    "tsusmita@ymail.com", // Email
    ["Pratyusha", "Varsha", "Surya", "Divya", "Gopika"], // Friends
    ["http://www.facebook.com/photo/1234","http://www.facebook.com/photo/1235","http://www.facebook.com/photo/1236"], // Photos url
    ["http://www.facebook.com/videos/1234","http://www.facebook.com/videos/1235","http://www.facebook.com/videos/1236"], //Videos url
    "Welcome to my facebook profile", // About
    9494777777, // Phone Number
    "Frontend Developer", // Work
    "B.Tech in Information Technology", // Education
    "Hyderabad, Telengana", // Hometown
    ["Ramesh Babu, Sridevi, Surya Teja"], // Family
    ["Wonderla", "Taj Mahal", "Charminar"], // Checkins
    ["Taylor Swift", "Charlie Puth", "A.R.Rehman"], // Music
    ["Athadu", "First Love", "Zootopia", "Jab We Met"], // Movies
    ["Table-Tennis", "Badminton", "Swimming"], // Sports
    ["Red", "Reputation", "1989", "Nine Track Mind", "Some Type of Love"] // Recent Likes
)

// Output
console.log("Id : ", myProfile.getId())
console.log("About :", myProfile.getAbout())
console.log("Dob :", myProfile.getDob())
console.log("Phone No :", myProfile.getPhoneNo())
console.log("Email :", myProfile.getEmail())
console.log("Education :", myProfile.getEducation())
console.log("Work :", myProfile.getWork())
console.log("Home Town :", myProfile.getHometown())
console.log("Friends :", myProfile.getFriends())
console.log("Family :", myProfile.getFamily())
console.log("Photos :", myProfile.getPhotos())
console.log("Videos :", myProfile.getVideos())
console.log("Check-ins :", myProfile.getCheckins())
console.log("Sports :", myProfile.getSports())
console.log("Music :", myProfile.getMusic())
console.log("Recently Liked :", myProfile.getLikes())