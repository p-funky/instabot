const fs = require("fs");
const path = require("path");

const lib = {};


const filePath = (dir, file) => {
  return dir + "/" + file + ".json";
};

lib.create = function(dir, file, data, callback) {
  fs.open(filePath(dir, file), "wx", function(err, fileDescriptor) {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);
      fs.writeFile(fileDescriptor, stringData, function(err) {
        if (err) {
          callback("Error writing to new file");
        } else {
          fs.close(fileDescriptor, function(err) {
            if (err) {
              callback("Error closing to new file");
            }
          });
        }
      });
    } else {
      callback("Error creating new file; it may already exist");
    }
  });
};

module.exports = lib;
