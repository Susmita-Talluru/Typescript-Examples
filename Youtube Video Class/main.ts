// defining a class
class Video{
    
    //properties
    private videoId : number;
    private videoTitle : string; 
    private url : string;
    private captions : string;
    private isPublic : boolean;
    private views : number;
    private likes : number;
    private dislikes : number;
    private channelId : number;
    private channelName : string;
    private playListIds : number[];
    private description : string;
    private tags : string[];
    private category : string;
    private license : string;
    private comments : object[];
    private recommended : object[];
    
    //constructor
    constructor(videoId : number,videoTitle : string,url : string,captions : string,isPublic : boolean,views : number,likes : number,dislikes : number,channelId : number,channelName : string,playListIds : number[],description : string,tags : string[],category : string,license : string,comments : object[],recommended : object[]){
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

    // getters
    getVideoId = () => {
        return this.videoId
    }
    getVideoTitle = () => {
        return this.videoTitle
    }
    geturl = () => {
        return this.url
    }
    getCaptions = () => {
        return this.captions
    }
    getChannelId = () => {
        return this.channelId
    }
    getChannelName = () => {
        return this.channelName
    }
    getIsPublic = () => {
        return this.isPublic
    }
    getViews = () => {
        return this.views
    }
    getLikes = () => {
        return this.likes
    }
    getDislikes = () => {
        return this.dislikes
    }
    getPlaylistIds = () => {
        return this.playListIds
    }
    getDescription = () =>{
        return this.description
    }
    getCategory = () => {
        return this.category
    }
    getLicense = () => {
        return this.license
    }
    getComments = () => {
        return this.comments
    }
    getRecommended = () => {
        return this.recommended
    }//getters end

    // methods
    addView = () => {
        this.views++
        console.log("added a view")
    }
    addLike = () => {
        this.likes++
        console.log("added a like")
    }
    addDislike = () => {
        this.dislikes++
        console.log("added a dislike")
    }
    addComment = (Comment:object) => {
        this.comments.push(Comment)
        console.log("added a comment")
    } // method ends
}


// object
let videoDetails = new Video(
    1234, //Video Id
    "Learn TypeScript Part 1", //Video Title
    "https://youtu.be/mr66Ag8z7B0", // Video URL
    "Welcome to typescript learning video.",//Video caption file 
    true, //If the video is public
    100, //Views
    48, //Likes
    20, //dislikes
    123456, //channel ID
    "Edwisor",// channel name
    [12345,34456,2234], //playlists in which the video had been added
    "Learn typescript in half an hour.",//description
    ["typescript","ES6","EdWisor"],//tags
    "People and Blogs",//category
    "Youtube License",//license
    [   //comments
        {   
            name: "Swetha",
            comment: "Good explanation"
        },
        {   name : "Susmita",
            comment : "What is typescript"
        },
        {   name : "Surya",
            comment : "Could be better"
        }
    ],
    [ //recommended
        {
            videoTitle : "Learn Typescript Part 2"
        },
        {
            videoTitle : "Learn Typescript Part 3"
        }
    ]
);

// Output
console.log("Video Id : ", videoDetails.getVideoId())
console.log("Video Title : ", videoDetails.getVideoTitle())
console.log("Video URL : ", videoDetails.geturl())
console.log("Video Caption : ", videoDetails.getCaptions())
console.log("Channel Id : ", videoDetails.getChannelId())
console.log("Video Accessiblity : ", videoDetails.getIsPublic())
console.log("Views : ", videoDetails.getViews())
console.log("Likes : ", videoDetails.getLikes())
console.log("Dislikes : ", videoDetails.getDislikes())
console.log("The video is in following playlists : ", videoDetails.getPlaylistIds())
console.log("Description : ", videoDetails.getDescription())
console.log("Category : ", videoDetails.getCategory())
console.log("License : ", videoDetails.getLicense())
console.log("Comments : ", videoDetails.getComments())
console.log("Recommended : ", videoDetails.getRecommended())