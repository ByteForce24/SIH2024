// models/FacultySchema.js

class Faculty {
  constructor({
    facultyID,
    userID,
    facultyEnrollmentNumber,
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
    achievement = {},
    areaOfExpertise = {},
    contactEmail = "",
    links = {},
    profilePhotoLink = "http://res.cloudinary.com/default.jpg",
    profileLink,
  }) {
    if (typeof facultyID !== 'string' || facultyID.length === 0 || facultyID.length > 50) {
      throw new Error('Invalid facultyID');
    }
    if (typeof userID !== 'string' || userID.length === 0 || userID.length > 50) {
      throw new Error('Invalid userID');
    }
    if (typeof facultyEnrollmentNumber !== 'number') {
      throw new Error('Invalid facultyEnrollmentNumber: Must be a number');
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
    if (typeof contactEmail !== 'string' || contactEmail.length > 50 || !contactEmail.match(/^\S+@\S+\.\S+$/)) {
      throw new Error('Invalid contactEmail');
    }
    
    this.facultyID = facultyID;
    this.userID = userID;
    this.facultyEnrollmentNumber = facultyEnrollmentNumber;
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
    this.achievement = achievement;
    this.areaOfExpertise = areaOfExpertise;
    this.contactEmail = contactEmail;
    this.links = links;
    this.profilePhotoLink = profilePhotoLink;
    this.profileLink = profileLink;
  }

  toObject() {
    return {
      facultyID: this.facultyID,
      userID: this.userID,
      facultyEnrollmentNumber: this.facultyEnrollmentNumber,
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
      achievement: this.achievement,
      areaOfExpertise: this.areaOfExpertise,
      contactEmail: this.contactEmail,
      links: this.links,
      profilePhotoLink: this.profilePhotoLink,
      profileLink: this.profileLink,
    };
  }
}

module.exports = Faculty;