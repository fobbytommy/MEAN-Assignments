var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({

	// literal username storage. with client's caps (e.g. foBbyToMmy)
	username: 	{
					type: String,
				},
	// for verification purpose. without client's caps (e.g. fobbytommy)
	username_lowercase: {
							type: String,
							required: [true, "Username is required."],
							trim: true,
							lowercase: true,
							unique: true,
							uniqueCaseInsensitive: true,
							minlength: [3, "Username, '{VALUE}', is too short! Minimum length is 3 characters!"],
							maxlength: [15, "Username, '{VALUE}', is too long! Maximum length is 15 characters!"],
							validate: {
								validator: function (username) {
									return /^[a-zA-Z0-9_]+$/.test(username);
								},
								message: "'{VALUE}' is not a valid username. Only pure alphabets, numbers, and underscores (_) can be used."
							}
						}

}, { timestamps: true });

// applying the uniqueValidator plugin to userSchema
mongoose.plugin(uniqueValidator, { message: "'{VALUE}' is already taken. Use another {PATH}!" });

mongoose.model('User', userSchema);
