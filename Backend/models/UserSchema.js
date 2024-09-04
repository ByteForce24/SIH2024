// models/User.js

class User {
    constructor({
      username,
      fullName,
      role,
      email,
      mobileNumber,
      gender,
      aadharNumber,
      registrationTimeStamp,
      resetToken = null,
      resetTokenExpiry = null,
      password
    }) {
      if (typeof username != 'string' || username.length === 0) {
        throw new Error('Invalid username');
      }
      if (typeof fullName !== 'string' || fullName.length === 0) {
        throw new Error('Invalid fullName');
      }
      if (typeof role !== 'string' || !['Faculty', 'Alumni', 'Student'].includes(role)) {
        throw new Error('Invalid role');
      }
      if (typeof email !== 'string' || email.length === 0) {
        throw new Error('Invalid email');
      }
      if (typeof mobileNumber !== 'number' || mobileNumber.toString().length !== 10) {
        throw new Error('Invalid mobileNumber');
      }
      if (typeof gender !== 'string' || !['Male', 'Female', 'Other'].includes(gender)) {
        throw new Error('Invalid gender');
      }
      if (typeof aadharNumber !== 'string' || aadharNumber.length !== 14) {
        throw new Error('Invalid aadharNumber');
      }
      if (typeof registrationTimeStamp !== 'string') {
        throw new Error('Invalid registrationTimeStamp');
      }
      if (resetToken && typeof resetToken !== 'string') {
        throw new Error('Invalid resetToken');
      }
      if (resetTokenExpiry && typeof resetTokenExpiry !== 'string') {
        throw new Error('Invalid resetTokenExpiry');
      }
      if (typeof password !== 'string' || password.length === 0) {
        throw new Error('Invalid password');
      }
  
      this.username = username;
      this.fullName = fullName;
      this.role = role;
      this.email = email;
      this.mobileNumber = mobileNumber;
      this.gender = gender;
      this.aadharNumber = aadharNumber;
      this.registrationTimeStamp = registrationTimeStamp;
      this.resetToken = resetToken;
      this.resetTokenExpiry = resetTokenExpiry;
      this.password = password;
    }
  
    toObject() {
      return {
        username: this.username,
        fullName: this.fullName,
        role: this.role,
        email: this.email,
        mobileNumber: this.mobileNumber,
        gender: this.gender,
        aadharNumber: this.aadharNumber,
        registrationTimeStamp: this.registrationTimeStamp,
        resetToken: this.resetToken,
        resetTokenExpiry: this.resetTokenExpiry,
        password: this.password
      };
    }
  }
  
  module.exports = User;
  