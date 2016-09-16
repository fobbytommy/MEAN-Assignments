var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	email: 	{
				type: String,
				trim: true,
				lowercase: true,
				unique: true,
				uniqueCaseInsensitive: true,
				required: [true, 'Email address is required'],
				validate: {
					validator: function(email) {
						return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
					},
					message: '{VALUE} is not a valid email address!'
				}
			},
	first_name: {
					type: String,
					required: [true, "First name is required!"],
					trim: true,
					minlength: [2, "First name, '{VALUE}', is too short! Minimum length is 2 characters!"],
					maxlength: [30, "First name, '{VALUE}', is too long! Maximum length is 30 characters!"],
					validate: {
						validator: function(first_name) {
							return /^[a-zA-Z]+$/.test(first_name);
						},
						message: "'{VALUE}' is not a valid first name. Please use alphabets only! (No spaces, no symbols, no numbers, etc.)"
					}
				},
	last_name: 	{
					type: String,
					required: [true, "Last name is required"],
					trim: true,
					maxlength: [50, "First name, '{VALUE}', is too long! Minimum length is 50 characters"],
					validate: {
						validator: function(last_name) {
							return /^[a-zA-Z]+$/.test(last_name);
						},
						message: "'{VALUE}' is not a valid last name. Please use alphabets only! (No spaces, no symbols, no numbers, etc.)"
					}
				},
	username:	{
					type: String,
					required: [true, "Username is required"],
					trim: true,
					lowercase: true,
					unique: true,
					uniqueCaseInsensitive: true,
					minlength: [3, "Username, '{VALUE}', is too short! Minimum length is 3 characters!"],
					maxlength: [19, "Username, '{VALUE}', is too long! Maximum length is 19 characters!"],
					validate: {
						validator: function(username) {
							return /^[a-zA-Z0-9_]+$/.test(username);
						},
						message: "'{VALUE}' is not a valid username. Only pure alphabets, numbers, and underscores (_) can be used."
					}
				},
	password: 	{
					type: String,
					required: [true, "Password is required!"],
					minlength: [8, "Your password is too short! Minimum length is 8!"],
					maxlength: [32, "Your password is too long! Minimum length is 32"],
					validate: {
						validator: function(password) {
							// least 1 number, uppercase, and special character
							// return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( password );

							// least 1 uppercase
							return /^(?=.*[A-Z])[A-Za-z\d$@$!%*?&]{8,32}/.test( password );
						},
						// message: "Password failed validation, you must have at least 1 number, uppercase, and special character."
						message: "Password failed validation, you must have at least 1 uppercase."
					}
				}

}, { timestamps: true });

// applying the uniqueValidator plugin to userSchema
mongoose.plugin(uniqueValidator, { message: "custom error message goes here" });

// custom method: hashing a password
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// prior to saving: make password into hashed by calling the custom method above
userSchema.pre('save', function(done) {
	this.password = this.generateHash(this.password);
	done();
});

mongoose.model('User', userSchema);
