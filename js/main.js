/* This Source Code Form is subject to the terms of the Mozilla Public
** License, v. 2.0. If a copy of the MPL was not distributed with this
** file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

(function() {
	
	window.addEventListener("load", start, false);

	function start() {
		
		// setup display parameters for the first time
		display.resize();
		
		// setup events
		
		// keyboard events
		window.document.addEventListener("keydown", key.down, false);
		window.document.addEventListener("keyup", key.up, false);
		
		// touch events
		window.document.body.addEventListener("touchstart", touch.start, false);
		window.document.body.addEventListener("touchend", touch.end, false);
		
		// mouse events
		window.document.body.addEventListener("mousedown", mouse.down, false);
		window.document.body.addEventListener("mouseup", mouse.up, false);
		
		//resize the canvas to fill browser window dynamically
		window.addEventListener('resize', display.resize, false);
			
		// start the app
		load.menu();
	}
})();