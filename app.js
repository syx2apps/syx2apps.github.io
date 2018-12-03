window.addEventListener("DOMContentLoaded", function() {
	attachSwipeHandler();
});

function onSwipe(direction) {
	document.getElementById("swipe").innerHTML = direction;
}

function attachSwipeHandler() {
	let initialX, initialY;

	document.body.addEventListener("touchstart", e => {
		initialX = e.touches[0].clientX;
		initialY = e.touches[0].clientY;
	}, false);

	document.body.addEventListener("touchmove", e => {
		if(initialX && initialY) {
			const currentX = e.touches[0].clientX;
			const currentY = e.touches[0].clientY;
			const diffX = initialX - currentX;
			const diffY = initialY - currentY;
			let direction = "";
			if(Math.abs(diffX) > Math.abs(diffY))
				direction = diffX > 0 ? "left" : "right";
			else
				direction = diffY > 0 ? "up" : "down";
			onSwipe(direction);
		}
	}, false);
}
