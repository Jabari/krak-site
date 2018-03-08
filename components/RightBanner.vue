<template>
	<section>
		<img class="banner" src="https://s3-us-west-2.amazonaws.com/aws-edibars-site/imgs/krak-package-web.png" />
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
    height: 63vw;
    transition: transform 0.5s ease-out;
    &:hover {
			transform: translate(-65%, -10%);
		}

		@media screen and (max-width: 480px) {
			height: 90vw;
			transform: translate(-75%, -10%);
			&:hover {
				transform: translate(-115%, -10%);
			}
		}
	}	
</style>