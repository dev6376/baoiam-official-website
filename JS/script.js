var lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
})


$('.carousel').carousel({
  interval: 7000
})


// Javascript for tab

$(window).bind('load', function() {
	document.querySelector('#tab-1').classList.add('current-tab')
});


const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removecurrent();
	removeShow();
	// Add border to current tab item
	this.classList.add('current-tab');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removecurrent() {
	tabItems.forEach(item => {
		item.classList.remove('current-tab');
		
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
