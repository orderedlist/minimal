	// ANIMATE FONT-WEIGHT ON HEADINGS WHEN THEY ARE IN VIEW
	const animateHeader = function(guideHeader, ratio) {
		if (ratio > 0) {
			if (false && guideHeader.tagName === 'H2') {
					guideHeader.classList.add('in-view');
			} else {
				guideHeader.classList.add('in-view');
			}
		} else {
			guideHeader.classList.remove('in-view');
		}
	};

  // Setup the Intersection observer to watch the boxes we care about
  // and when they're in view fire the animation function to add our
  // CSS classes
	const guideHeaders = document.querySelectorAll('.guide-content h2');
	const guideHeadersObserver = new IntersectionObserver((entries) => {
		return entries.forEach((e) => {
			animateHeader(e.target, e.intersectionRatio);
		});
	}, { threshold: 0.1 });
	for (const guideHeader of guideHeaders) {
		guideHeadersObserver.observe(guideHeader);
		guideHeadersObserver.observe(guideHeader.closest('section'));
	}