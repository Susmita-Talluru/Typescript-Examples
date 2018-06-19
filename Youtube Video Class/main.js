// defining a class
var Video = /** @class */ (function () {
    //constructor
    function Video(videoId, videoTitle, url, captions, isPublic, views, likes, dislikes, channelId, channelName, playListIds, description, tags, category, license, comments, recommended) {
        var _this = this;
        // getters
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.geturl = function () {
            return _this.url;
        };
        this.getCaptions = function () {
            return _this.captions;
        };
        this.getChannelId = function () {
            return _this.channelId;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getIsPublic = function () {
            return _this.isPublic;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getPlaylistIds = function () {
            return _this.playListIds;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getRecommended = function () {
            return _this.recommended;
        }; //getters end
        // methods
        this.addView = function () {
            _this.views++;
            console.log("added a view");
        };
        this.addLike = function () {
            _this.likes++;
            console.log("added a like");
        };
        this.addDislike = function () {
            _this.dislikes++;
            console.log("added a dislike");
        };
        this.addComment = function (Comment) {
            _this.comments.push(Comment);
            console.log("added a comment");
        }; // method ends
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.url = url;
        this.captions = captions;
        this.channelId = channelId;
        this.channelName = channelName;
        this.isPublic = isPublic;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.playListIds = playListIds;
        this.description = description;
        this.tags = tags;
        this.category = category;
        this.license = license;
        this.comments = comments;
        this.recommended = recommended;
    } // constructor ends
    return Video;
}());
// object
var videoDetails = new Video(1234, //Video Id
"Learn TypeScript Part 1", //Video Title
"https://youtu.be/mr66Ag8z7B0", // Video URL
"Welcome to typescript learning video.", //Video caption file 
true, //If the video is public
100, //Views
48, //Likes
20, //dislikes
123456, //channel ID
"Edwisor", // channel name
[12345, 34456, 2234], //playlists in which the video had been added
"Learn typescript in half an hour.", //description
["typescript", "ES6", "EdWisor"], //tags
"People and Blogs", //category
"Youtube License", //license
[
    {
        name: "Swetha",
        comment: "Good explanation"
    },
    { name: "Susmita",
        comment: "What is typescript"
    },
    { name: "Surya",
        comment: "Could be better"
    }
], [
    {
        videoTitle: "Learn Typescript Part 2"
    },
    {
        videoTitle: "Learn Typescript Part 3"
    }
]);
// Output
console.log("Video Id : ", videoDetails.getVideoId());
console.log("Video Title : ", videoDetails.getVideoTitle());
console.log("Video URL : ", videoDetails.geturl());
console.log("Video Caption : ", videoDetails.getCaptions());
console.log("Channel Id : ", videoDetails.getChannelId());
console.log("Video Accessiblity : ", videoDetails.getIsPublic());
console.log("Views : ", videoDetails.getViews());
console.log("Likes : ", videoDetails.getLikes());
console.log("Dislikes : ", videoDetails.getDislikes());
console.log("The video is in following playlists : ", videoDetails.getPlaylistIds());
console.log("Description : ", videoDetails.getDescription());
console.log("Category : ", videoDetails.getCategory());
console.log("License : ", videoDetails.getLicense());
console.log("Comments : ", videoDetails.getComments());
console.log("Recommended : ", videoDetails.getRecommended());
