const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
      validator(value) {
          if(value.toLowerCase().includes($(password))){
          throw new Error('Password contains Username ')
          }
      }
  },
  email: {
    type: String,
    required: true,
    validator(value) {
      if(!validate.isEmail(value)){
          throw new Error('Invalid Email')
      }
  }
  }
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
