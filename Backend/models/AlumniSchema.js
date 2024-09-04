// models/AlumniSchema.js

class Alumni {
    constructor({
      alumniID,
      userID,
      enrollmentNumber,
      collegeName,
      branchName,
      description = "",
      followingCount = 0,
      following = {},
      followersCount = 0,
      followers = {},
      collegeIDPhotoLink,
      savedPostsCount = 0,
      savedPosts = {},
      calendar = {},
      employmentStatus = false,
      jobTitle = "",
      achievement = {},
      areaOfExpertise = {},
      contactEmail = "",
      links = {},
      profilePhotoLink = "http://res.cloudinary.com/default.jpg",
      profileLink,
    }) {
      if (typeof alumniID !== 'string' || alumniID.length === 0 || alumniID.length > 50) {
        throw new Error('Invalid alumniID');
      }
      if (typeof userID !== 'string' || userID.length === 0 || userID.length > 50) {
        throw new Error('Invalid userID');
      }
      if (typeof enrollmentNumber !== 'string' || enrollmentNumber.length > 20) {
        throw new Error('Invalid enrollmentNumber');
      }
      if (typeof collegeName !== 'string' || collegeName.length > 100) {
        throw new Error('Invalid collegeName');
      }
      if (typeof branchName !== 'string' || branchName.length > 50) {
        throw new Error('Invalid branchName');
      }
      if (typeof description !== 'string') {
        throw new Error('Invalid description');
      }
      if (typeof followingCount !== 'number' || followingCount < 0) {
        throw new Error('Invalid followingCount');
      }
      if (typeof followersCount !== 'number' || followersCount < 0) {
        throw new Error('Invalid followersCount');
      }
      if (typeof collegeIDPhotoLink !== 'string' || collegeIDPhotoLink.length > 200) {
        throw new Error('Invalid collegeIDPhotoLink');
      }
      if (typeof savedPostsCount !== 'number' || savedPostsCount < 0) {
        throw new Error('Invalid savedPostsCount');
      }
      if (typeof profilePhotoLink !== 'string' || profilePhotoLink.length > 200) {
        throw new Error('Invalid profilePhotoLink');
      }
      if (typeof profileLink !== 'string' || profileLink.length > 100) {
        throw new Error('Invalid profileLink');
      }
      if (typeof employmentStatus !== 'boolean') {
        throw new Error('Invalid employmentStatus');
      }
      if (typeof jobTitle !== 'string' || jobTitle.length > 50) {
        throw new Error('Invalid jobTitle');
      }
      if (typeof contactEmail !== 'string' || contactEmail.length > 50 || !contactEmail.match(/^\S+@\S+\.\S+$/)) {
        throw new Error('Invalid contactEmail');
      }
      
      this.alumniID = alumniID;
      this.userID = userID;
      this.enrollmentNumber = enrollmentNumber;
      this.collegeName = collegeName;
      this.branchName = branchName;
      this.description = description;
      this.followingCount = followingCount;
      this.following = following;
      this.followersCount = followersCount;
      this.followers = followers;
      this.collegeIDPhotoLink = collegeIDPhotoLink;
      this.savedPostsCount = savedPostsCount;
      this.savedPosts = savedPosts;
      this.calendar = calendar;
      this.employmentStatus = employmentStatus;
      this.jobTitle = jobTitle;
      this.achievement = achievement;
      this.areaOfExpertise = areaOfExpertise;
      this.contactEmail = contactEmail;
      this.links = links;
      this.profilePhotoLink = profilePhotoLink;
      this.profileLink = profileLink;
    }
  
    toObject() {
      return {
        alumniID: this.alumniID,
        userID: this.userID,
        enrollmentNumber: this.enrollmentNumber,
        collegeName: this.collegeName,
        branchName: this.branchName,
        description: this.description,
        followingCount: this.followingCount,
        following: this.following,
        followersCount: this.followersCount,
        followers: this.followers,
        collegeIDPhotoLink: this.collegeIDPhotoLink,
        savedPostsCount: this.savedPostsCount,
        savedPosts: this.savedPosts,
        calendar: this.calendar,
        employmentStatus: this.employmentStatus,
        jobTitle: this.jobTitle,
        achievement: this.achievement,
        areaOfExpertise: this.areaOfExpertise,
        contactEmail: this.contactEmail,
        links: this.links,
        profilePhotoLink: this.profilePhotoLink,
        profileLink: this.profileLink,
      };
    }
  }
  
  module.exports = Alumni;
  