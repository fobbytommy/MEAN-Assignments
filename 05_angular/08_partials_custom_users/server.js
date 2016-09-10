var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = 7000,
    app      = express();

app.use(express.static(path.join(root, 'client')));

app.listen(port, function() {
	console.log(`server running on port ${ port }`);
});
