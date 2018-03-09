<template>
	<section class="c comparer">
		<table>
			<thead>
				{{ product }}
			</thead>
			<tr><td>Protein</td><td>30</td></tr>
			<tr><td>Sugars</td><td>6</td></tr>
			<tr><td>Total Carbs</td><td>12</td></tr>
			<tr><td>Net Carbs</td><td>5</td></tr>
			<tr><td>Vegan</td><td>yes</td></tr>
			<tr><td>Soy-Free</td><td>yes</td></tr>
			<tr><td>Gluten Free</td><td>yes</td></tr>
		</table>
	</section>
</template>
<script>
	export default {
		name: 'Comparer',
		data() {
			return {
				macros: [
					'Protein',
					'Total Carbs',
					'Net Carbs',
					'Vegan',
					'Soy Free',
					'Gluten Free'
				]
			}
		},
		props: {
			product: {
				type: String,
				required: true
			},
			nutrients: {
				type: Array,
				required: false
			}
		}
	}
</script>
<style>
	.comparer {
		background: #fff;
		width: 100vw;
		table {
			float: left;
			width: 45%;
		}
	}
</style>