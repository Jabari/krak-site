<template>
	<section>
		<img class="banner" src="https://s3-us-west-2.amazonaws.com/aws-edibars-site/imgs/krak-package-shadow-compressed.png" />
	</section>
</template>
<script>
	export default {
		name: 'RightImage'
	}
</script>
<style lang="scss" scoped>
	.banner {
		flex: 1 0 0;
		transform: translate(-35%, -10%);
    height: 55vw;
    transition: transform 0.5s ease-out;

		@media screen and (max-width: 480px) {
			height: 90vw;
		}
	}	
</style>