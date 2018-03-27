<template>
	<section>
		<img class="banner" src="https://s3-us-west-2.amazonaws.com/aws-edibars-site/imgs/krak-package-shadow-compressed.png" />
	</section>
</template>
<script>
	export default {
		data() {
	    return {
	      isMobileDevice: null
	    }
	  },
		name: 'RightImage',
		mounted() {
	    this.isMobileDevice = window.navigator.userAgent.includes("Mobi") && 
	    (window.navigator.maxTouchPoints != 0);
	  }
	}
</script>
<style lang="scss" scoped>
	.banner {
		flex: 1 0 0;
		transform: translate(-35%, -10%);
    height: 55vw;
    transition: transform 0.5s ease-out;
    &:hover {
			transform: translate(-65%, -10%);
		}

		@media screen and (max-width: 480px) {
			height: 90vw;
			
		}
	}	
</style>
