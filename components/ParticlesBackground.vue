<template>
	<div>
		<div id="particles-js"></div>
		<div class="count-particles"> 
			<span class="js-count-particles">--</span> 
			particles
		</div>
		<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
		<script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
	</div>
</template>
<script>
//https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.1/particles.min.js
	

	export default {
		name: 'ParticlesBackground',
		mounted() {
			particlesJS("particles-js", {"particles":{"number":{"value":24,"density":{"enable":true,"value_area":800}},"color":{"value":"#4d0013"},"shape":{"type":"circle","stroke":{"width":0}},"opacity":{"value":0.85,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3.5,"random":true,"anim":{"enable":true,"speed":1,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
		}
	}
</script>
<style lang="scss">
	canvas { 
		display: block;
		vertical-align: bottom;
	}

#particles-js{
     position: relative;
     width: 100%;
     height: 100%;
     background-color: #ffffff;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: 50% 50%;
}
/* ---- stats.js ---- */
 .count-particles{
     background: #000022;
     position: absolute;
     top: 48px;
     left: 0;
     width: 80px;
     color: #13E8E9;
     font-size: .8em;
     text-align: left;
     text-indent: 4px;
     line-height: 14px;
     padding-bottom: 2px;
     font-family: Helvetica, Arial, sans-serif;
     font-weight: bold;
}
 .js-count-particles{
     font-size: 1.1em;
}
 #stats, .count-particles{
     -webkit-user-select: none;
     margin-top: 5px;
     margin-left: 5px;
}
 #stats{
     border-radius: 3px 3px 0 0;
     overflow: hidden;
}
 .count-particles{
     border-radius: 0 0 3px 3px;
}
</style>