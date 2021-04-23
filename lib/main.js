'use strict';

/**
 * This is the main class, the entry point to cloud-upload.
 */
class CloudUpload {
  constructor() {}

  middleware(req, _res, next) {
    try {
      if (req.file) {
        req.file.uploadToGoogleDrive = this.uploadToGoogleDrive;
        req.file.uploadToGCS = this.uploadToGCS;
        req.file.uploadToS3 = this.uploadToS3;
      } else if (req.files.length) {
        req.files.map(file => {
          file.uploadToGoogleDrive = this.uploadToGoogleDrive;
          file.uploadToGCS = this.uploadToGCS;
          file.uploadToS3 = this.uploadToS3;
          return file;
        });
      } else {
        // Section - Files are not uploaded
        // Throw Error / Ignore / Skip
      }
      next();
    } catch (err) {
      next(err);
    }
  }
  async uploadToGoogleDrive(options) {
    console.log(options);
  }
  async uploadToGCS(options) {
    console.log(options);
  }
  async uploadToS3(options) {
    console.log(options);
  }
}

module.exports = CloudUpload;
