var SocialProfile = /** @class */ (function () {
    function SocialProfile(id, dob, email, friends, photos, videos, about, phoneNo, work, education, hometown, family, checkins, music, movies, sports, likes) {
        var _this = this;
        //getters
        this.getId = function () {
            return _this.id;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getAbout = function () {
            if (_this.about) {
                return _this.about;
            }
            else {
                return null;
            }
        };
        this.getPhoneNo = function () {
            if (_this.phoneNo) {
                return _this.phoneNo;
            }
            else {
                return null;
            }
        };
        this.getEmail = function () {
            if (_this.email) {
                return _this.email;
            }
            else {
                return null;
            }
        };
        this.getWork = function () {
            if (_this.work) {
                return _this.work;
            }
            else {
                return null;
            }
        };
        this.getEducation = function () {
            if (_this.education) {
                return _this.education;
            }
            else {
                return null;
            }
        };
        this.getHometown = function () {
            if (_this.hometown) {
                return _this.hometown;
            }
            else {
                return null;
            }
        };
        this.getFamily = function () {
            if (_this.family) {
                return _this.family;
            }
            else {
                return null;
            }
        };
        this.getFriends = function () {
            if (_this.friends) {
                return _this.friends;
            }
            else {
                return null;
            }
        };
        this.getPhotos = function () {
            if (_this.photos) {
                return _this.photos;
            }
            else {
                return null;
            }
        };
        this.getVideos = function () {
            if (_this.videos) {
                return _this.videos;
            }
            else {
                return null;
            }
        };
        this.getCheckins = function () {
            if (_this.checkins) {
                return _this.checkins;
            }
            else {
                return null;
            }
        };
        this.getMusic = function () {
            if (_this.music) {
                return _this.music;
            }
            else {
                return null;
            }
        };
        this.getMovies = function () {
            if (_this.movies) {
                return _this.music;
            }
            else {
                return null;
            }
        };
        this.getSports = function () {
            if (_this.sports) {
                return _this.sports;
            }
            else {
                return null;
            }
        };
        this.getLikes = function () {
            if (_this.likes) {
                return _this.likes;
            }
            else {
                return null;
            }
        };
        // Method
        this.getAge = function () {
            console.log("Calculates the age");
        };
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
    return SocialProfile;
}());
// Input
var myProfile = new SocialProfile(12345, // ID
"04/10/1994", // DOB
"tsusmita@ymail.com", // Email
["Pratyusha", "Varsha", "Surya", "Divya", "Gopika"], // Friends
["http://www.facebook.com/photo/1234", "http://www.facebook.com/photo/1235", "http://www.facebook.com/photo/1236"], // Photos url
["http://www.facebook.com/videos/1234", "http://www.facebook.com/videos/1235", "http://www.facebook.com/videos/1236"], //Videos url
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
);
// Output
console.log("Id : ", myProfile.getId());
console.log("About :", myProfile.getAbout());
console.log("Dob :", myProfile.getDob());
console.log("Phone No :", myProfile.getPhoneNo());
console.log("Email :", myProfile.getEmail());
console.log("Education :", myProfile.getEducation());
console.log("Work :", myProfile.getWork());
console.log("Home Town :", myProfile.getHometown());
console.log("Friends :", myProfile.getFriends());
console.log("Family :", myProfile.getFamily());
console.log("Photos :", myProfile.getPhotos());
console.log("Videos :", myProfile.getVideos());
console.log("Check-ins :", myProfile.getCheckins());
console.log("Sports :", myProfile.getSports());
console.log("Music :", myProfile.getMusic());
console.log("Recently Liked :", myProfile.getLikes());
