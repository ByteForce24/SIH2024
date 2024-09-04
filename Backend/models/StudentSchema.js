// models/StudentSchema.js

class Student {
    constructor({
      studentID,
      userID,
      enrollmentNumber,
      collegeName,
      branchName,
      semester,
      description = "",
      followingCount = 0,
      following = "0",
      profilePhotoLink = "",
      collegeIDPhotoLink,
      savedPostsCount = 0,
      savedPosts = "",
      skills = "",
      profileLink,
    }) {
      if (typeof studentID !== 'string' || studentID.length === 0) {
        throw new Error('Invalid studentID');
      }
      if (typeof userID !== 'string' || userID.length === 0) {
        throw new Error('Invalid userID');
      }
      if (typeof enrollmentNumber !== 'string' || enrollmentNumber.length > 20) {
        throw new Error('Enrollment number must be exactly 20 characters');
      }
      if (typeof collegeName !== 'string' || collegeName.length === 0 || collegeName.length > 100) {
        throw new Error('Invalid collegeName');
      }
      if (typeof branchName !== 'string' || branchName.length === 0 || branchName.length > 50) {
        throw new Error('Invalid branchName');
      }
      if (typeof semester !== 'number' || semester.length === 0) {
        throw new Error('Invalid semester');
      }
      if (typeof description !== 'string') {
        throw new Error('Invalid description');
      }
      if (typeof followingCount !== 'number' || followingCount < 0) {
        throw new Error('Invalid followingCount');
      }
      if (typeof following !== 'string') {
        throw new Error('Invalid following');
      }
      if (typeof profilePhotoLink !== 'string' || profilePhotoLink.length > 200) {
        throw new Error('Invalid profilePhotoLink');
      }
      if (collegeIDPhotoLink && (typeof collegeIDPhotoLink !== 'string' || collegeIDPhotoLink.length > 200)) {
        throw new Error('Invalid collegeIDPhotoLink');
      }
      if (typeof savedPostsCount !== 'number' || savedPostsCount < 0) {
        throw new Error('Invalid savedPostsCount');
      }
      if (typeof savedPosts !== 'object') {
        throw new Error('Invalid savedPosts');
      }
      if (typeof skills !== 'object') {
        throw new Error('Invalid skills');
      }
      if (profileLink && (typeof profileLink !== 'string' || profileLink.length > 100)) {
        throw new Error('Invalid profileLink');
      }
  
      this.studentID = studentID;
      this.userID = userID;
      this.enrollmentNumber = enrollmentNumber;
      this.collegeName = collegeName;
      this.branchName = branchName;
      this.semester = semester;
      this.description = description;
      this.followingCount = followingCount;
      this.following = following;
      this.profilePhotoLink = profilePhotoLink;
      this.collegeIDPhotoLink = collegeIDPhotoLink;
      this.savedPostsCount = savedPostsCount;
      this.savedPosts = savedPosts;
      this.skills = skills;
      this.profileLink = profileLink;
    }
  
    toObject() {
      return {
        studentID: this.studentID,
        userID: this.userID,
        enrollmentNumber: this.enrollmentNumber,
        collegeName: this.collegeName,
        branchName: this.branchName,
        semester: this.semester,
        description: this.description,
        followingCount: this.followingCount,
        following: this.following,
        profilePhotoLink: this.profilePhotoLink,
        collegeIDPhotoLink: this.collegeIDPhotoLink,
        savedPostsCount: this.savedPostsCount,
        savedPosts: this.savedPosts,
        skills: this.skills,
        profileLink: this.profileLink,
      };
    }
  }
  
  module.exports = Student;
  