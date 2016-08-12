var $Dojo;

(function() {
	$Dojo = function (id) {
		if (id[0] = "#") {
			this.myId = document.getElementById(id.slice(1));
		} else {
			alert("Error: $Dojo only takes id!");
		}
	    this.click = function (callback) {
	        this.myId.addEventListener("click", callback);
	    };

	    this.hover = function (hoverin, hoverout) {
	        this.myId.addEventListener("mouseover", hoverin);
	        this.myId.addEventListener("mouseout", hoverout);
	    };
	    return this;

	}

	return $Dojo;
})();
