/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.

	// var minWidth840 = window.matchMedia("(max-width: 841px)");

		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0 
		
		) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);

// My js edit 001

const container = document.querySelector('.containerBA');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

// My js edit 002
const container2 = document.querySelector('.containerBA2');
document.querySelector('.slider2').addEventListener('input', (e) => {
  container2.style.setProperty('--position', `${e.target.value}%`);
})

// My js edit 003
const container3 = document.querySelector('.containerBA3');
document.querySelector('.slider3').addEventListener('input', (e) => {
  container3.style.setProperty('--position', `${e.target.value}%`);
})

const container4 = document.querySelector('.containerBA4');
document.querySelector('.slider4').addEventListener('input', (e) => {
  container4.style.setProperty('--position', `${e.target.value}%`);
})

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: 51.7337136263397, lng: -0.2204921279766628, };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 10,
	  center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	});
  }
  
  window.initMap = initMap;

// Slide in code

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenLeft');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observer.observe(el));

var classList = document.getElementById('bottomBannerContainer').classList;

var minWidth840 = window.matchMedia("(min-width: 841px)");

function match() {
    minWidth840.matches ? classList.remove('show') : classList.add('show')
	minWidth840.matches ? classList.add('hiddenTop') : classList.remove('hiddenTop');
}

minWidth840.addListener(match);

match();