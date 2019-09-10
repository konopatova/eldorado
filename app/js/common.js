
 $(function() {

	//top banner slider section
	$(".slider-group").owlCarousel({
		//loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		//autoplay:true,
	  rewind:true
 });

	//slider catalog section
$(document).ready(function () {
	var sliderSelector = '.swiper-container',
    options = {
								init:false,
                grabCursor: true,
                allowTouchMove: true,
                autoHeight: true,
								loop: true,
                centeredSlides: true,    
								effect: 'coverflow',
								speed:800,
								slidesPerView: 'auto',
								pagination: {
									el: '.swiper-pagination',
									clickable: true,
								},	
                history: {
                     replaceState: true,
                     key: '',
                },
								coverflowEffect: {
									rotate: 5,
									slideShadows : false,
									depth: 160,
									stretch: 100,
									modifier: 1,
							},
							breakpoints: {
								992: {
									slidesPerView: 1,
								},
								640: {
									effect: 'none',
									slidesPerView: 1,
									centeredSlides: true,    
								},
								320: {
									effect: 'none',
									slidesPerView: 1,
								}
							},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			imagesReady: function(){
				this.el.classList.remove('loading');
			}
		}
	};
	var mySwiper = new Swiper(sliderSelector, options);
	mySwiper.init();
	
});

	//map section
ymaps.ready(function(){
	var myMap = new ymaps.Map("ymaps", {
			center: [57.770894, 41.003044],
			zoom: 16,
			controls: []
	});
	
	var myPlacemark = new ymaps.Placemark([57.769047, 41.004922], {
	});

	var myPlacemark2 = new ymaps.Placemark([57.770894, 41.003044], {
		balloonContentHeader: '<img src="img/icons/icon-r.png" class="map-balloon">Realize',
		balloonContentBody: '<div class="map-p">Проповедуем Agile, разрабатываем сложные отраслевые решения</div>',
		hintContent: 'Realize'
	}, {
		draggable: true,
		iconLayout: 'default#image',
	  iconImageHref: 'img/icons/place.svg',
	  iconImageSize: [50, 50]
	});

	myMap.geoObjects.add(myPlacemark);
	myMap.geoObjects.add(myPlacemark2);
	myMap.behaviors.disable('scrollZoom');
	myMap.controls.add(new ymaps.control.ZoomControl({options: {float: 'none', position: {right: 700, bottom: 60 }}}));

	myPlacemark.events
	.add('mouseenter', function (e) {
			e.get('target').options.set('iconImageSize','[80, 80]');
	})
	.add('mouseleave', function (e) {
			e.get('target').options.unset('iconImageSize');
	});
	});


	$('#light-pagination').pagination({
		pages: 10,
			hrefTextPrefix: '',
			hrefTextSuffix: '.html',
			prevText: 'Начало',
			nextText: 'Конец',
			cssStyle: 'light-theme'
	});















 });
