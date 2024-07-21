document.addEventListener('DOMContentLoaded', (event) => {
	let policySwiper = new Swiper('.policy-slider', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true,
			el: '.policy-slider .swiper-pagination'
		},
		breakpoints: {
			1024: {
				spaceBetween: 0
			}
		},
		navigation: {
			nextEl: '.policy-slider .swiper-button-next',
			prevEl: '.policy-slider .swiper-button-prev'
		}
	});
	let columnListSwiper = new Swiper('.column-list-swiper', {
		spaceBetween: 60,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true,
			el: '.column-list-swiper .swiper-pagination'
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerGroup: 1
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 30,
				slidesPerGroup: 5
			}
		}
	});
	let utilitiesMobile1 = new Swiper('.utilities-mobile-1', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true,
			el: '.utilities-mobile-1 .swiper-pagination'
		}
	});
	let utilitiesMobile2 = new Swiper('.utilities-mobile-2', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true,
			el: '.utilities-mobile-2 .swiper-pagination'
		}
	});
	let utilitiesMobile3 = new Swiper('.utilities-mobile-3', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true,
			el: '.utilities-mobile-3 .swiper-pagination'
		}
	});
	function customNavigationSwiper(swiper, nextButton, prevButton) {
		if (prevButton != null) {
			prevButton.addEventListener('click', () => {
				swiper.slidePrev();
			});
			nextButton.addEventListener('click', () => {
				swiper.slideNext();
			});
			const buttonIsEdge = () => {
				if (swiper.isBeginning) {
					prevButton.classList.add('swiper-button-disabled');
				} else {
					prevButton.classList.remove('swiper-button-disabled');
				}
				if (swiper.isEnd) {
					nextButton.classList.add('swiper-button-disabled');
				} else {
					nextButton.classList.remove('swiper-button-disabled');
				}
			};
			buttonIsEdge();
			swiper.on('slideChange', () => {
				buttonIsEdge();
			});
		}
	}
	function distributionAgentSlider() {
		const prevButton = document.querySelector(
			'.distribution-agent .slider__prev'
		);
		const nextButton = document.querySelector(
			'.distribution-agent .slider__next'
		);
		let distributionAgentSwiper = new Swiper('.distribution-agent-slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			grid: {
				rows: 2,
				fill: 'row'
			},
			navigation: {
				nextEl: '.distribution-agent-slider .swiper-button-next',
				prevEl: '.distribution-agent-slider .swiper-button-prev'
			},
			breakpoints: {
				1024: {
					slidesPerView: 2.3,
					slidesPerGroup: 3,
					grid: {
						rows: 1
					},
					loop: false,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 4.3,
					slidesPerGroup: 4,
					grid: {
						rows: 1
					}
				}
			}
		});
		customNavigationSwiper(distributionAgentSwiper, nextButton, prevButton);
	}
	distributionAgentSlider();
	function residenceSlider() {
		const prevButton = document.querySelector(
			'.residence-privileges .slider__prev'
		);
		const nextButton = document.querySelector(
			'.residence-privileges .slider__next'
		);
		let residenceSwiper = new Swiper('.residence-privileges-swiper', {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			pagination: {
				clickable: true,
				el: '.residence-privileges .swiper-pagination'
			},
			breakpoints: {
				1200: {
					slidesPerView: 2,
					slidesPerGroup: 2
				}
			}
		});
		customNavigationSwiper(residenceSwiper, nextButton, prevButton);
	}
	residenceSlider();
});

$(document).ready(function () {
	$('.menu-toggle').click(function (e) {
		e.preventDefault();
		$('.mobile-menu').toggleClass('open');
		$('body').toggleClass('overflow-hidden');
		$('.menu-overlay').toggleClass('active');
	});
	$('.menu-overlay, .close-menu').click(function (e) {
		$('.mobile-menu').removeClass('open');
		$('body').removeClass('overflow-hidden');
		$(event).removeClass('active');
		$('.menu-overlay').removeClass('active');
	});

	// section pin tab hotpot
	const pointItems = $('.tmb-pin .pin');
	const thumbsItems = $('.featured-ground .tab-pane');
	const tabItems = $('.featured-ground .nav-link');
	function updateItems(activeAttr) {
		thumbsItems.each(function (thumbIndex, thumbsItem) {
			const thumbName = $(thumbsItem).attr('thumbs-name').toLowerCase();
			if (thumbName === activeAttr) {
				$(thumbsItem).css({
					opacity: '1',
					'z-index': '1'
				});
			} else {
				$(thumbsItem).css({
					opacity: '0',
					'z-index': '0'
				});
			}
			$('.featured-ground .nav-link.active').removeClass('active');
			$(
				'.featured-ground .nav-link[thumbs-name="' + activeAttr + '"]'
			).addClass('active');
		});
	}
	if (pointItems.length) {
		pointItems.each(function (index, pointItem) {
			$(pointItem).on('mouseover', function () {
				const pinName = $(pointItem).attr('pin-name').toLowerCase();
				updateItems(pinName);
			});
		});
	}
	tabItems.each(function (index, tabItem) {
		$(tabItem).on('click', function () {
			const tabName = $(tabItem).attr('thumbs-name').toLowerCase();
			updateItems(tabName);
		});
	});
	$('.library-wrap .gallery').click(function () {
		let galleryAtr = $(this).attr('data-fancybox');
		console.log('galleryAtr', galleryAtr);
		Fancybox.bind('[data-fancybox="' + galleryAtr + '"]', {
			Thumbs: {
				type: 'classic'
			},
			buttons: ['slideShow', 'thumbs', 'zoom', 'fullScreen', 'share', 'close'],
			loop: false,
			protect: true
		});
	});
	$('.library-videos .main-content,.library-videos .media-item').click(
		function () {
			var link_video = $(this).attr('data-video');
			var html_iframe =
				'<iframe src="https://www.youtube.com/embed/' +
				link_video +
				'"> </iframe>';
			$('#video-ocp .modal-body').html(html_iframe);
			$('#video-ocp').modal('show');
		}
	);
	$('section.featured-utilities div#v-pills-tab button').on(
		'click',
		function () {
			$('section.featured-utilities div#v-pills-tab button.active').removeClass(
				'active'
			);
			$(this).addClass('active');
			let valueActive = $(this).attr('aria-controls');
			$('section.featured-utilities .tab-pane.active')
				.removeClass('active')
				.removeClass('show');
			$('section.featured-utilities #' + valueActive)
				.addClass('active')
				.addClass('show');
		}
	);
	$('section.featured-ground div#myTab button').on('click', function () {
		$('section.featured-ground div#myTab button.active').removeClass('active');
		$(this).addClass('active');
		let valueActive = $(this).attr('aria-controls');
		$('section.featured-ground .tab-pane.active')
			.removeClass('active')
			.removeClass('show');
		$('.tab-pane[aria-labelledby="' + valueActive + '"]')
			.addClass('active')
			.addClass('show');
	});
});
