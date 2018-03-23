<template>
	<section id="comparer-section">
		<no-ssr class="c comparer">
			<table class="krak">
				<thead>
					krak
				</thead>
				<tbody>
					<tr v-for="(macro, index) in macros" :key="macro">
						<td>{{ macro, index }}</td>
						<td>{{ products["krak Protein Snack"][index] }}</td>
					</tr>
				</tbody>
			</table>
		</no-ssr>
		<no-ssr class="c comparer">
			<table>
				<thead>
					<select class="card w-100" name="comparedProduct" @change="compareProduct">
		        <option 
		        	v-for="(product, key) in products" 
		        	:key="key" 
		        	v-if="key !== 'krak Protein Snack'"
		        	:value="key"
		        	>
		        	{{ key }}
		     		</option>
		      </select>
				</thead>		
				<tbody>
					<tr v-for="(macro, index) in macros" :key="macro">
						<td>{{ macro, index }}</td>
						<td>{{ products[comparedProduct][index] }}</td>
					</tr>
				</tbody>
			</table>
		</no-ssr>
	</section>
</template>
<script>
	//import ParticlesBackground from '~/components/ParticlesBackground.vue'

	export default {
		name: 'Comparer',
		components: {
			//ParticlesBackground
		},
		data() {
			return {
				"products": {					
					"krak Protein Snack": [32, 12, 11, 4, "✓", "✓", "✓"],
					"Quest Protein Bars": [21, 8, 21, 1, "❌", "✓", "✓"],
					"Clif BUILDERs Protein Bars": [20, 9, 30, 21, "✓", "❌", "❌"],
					"RXBAR Protein Bars": [12, 9, 22, 12, "❌", "✓", "✓"],
					"Vega Sport Protein Bars": [15, 11, 27, 16, "✓", "✓", "✓"],
					"Orgain Protein Bars": [10, 6, 17, 3, "✓", "✓", "✓"],
				},
				"macros": [
					'Protein',
					'Fat',
					'Carb',
					'Sugar',													
					'Vegan',
					'Soy Free',
					'Gluten Free'
				],
				"comparedProduct": "Quest Protein Bars",
			}
		},
		methods: {
			compareProduct() {
				this.comparedProduct = document.getElementsByName("comparedProduct")[0].value;
			},
			initialProduct() {
				this.comparedProduct = Object.keys(this.products)[1];
			},
		},
	}
</script>
<style lang="scss">
no-ssr {
	display: block;
}
#comparer-section {
	background: #fff;
	display: flex;
	min-width: 300px;
}
.comparer {
	background: #fff;
	color: #555;
	float: left;
	font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	width: 50vw;
	select, thead {
		border: none;
		border-bottom: 2px solid #eee;
		font-size: 1.3rem;
		font-weight: 600;
		width: 120%;
		padding: .5em;
		font-size: 1rem;
		font-weight: 600;
		height: 3rem;
	}
	table {
		border-collapse: collapse;
		width: 90%;
		thead {
			height: 3rem;
		}
	}
}
.krak {
	color: #4d0013;
	font-weight: 600;
	thead {
		font-size: 1.5rem;
		position: relative;
		left: 1rem;
	}
}
tr:nth-of-type(n+5) td:nth-child(2) {
	color: green;
	font-weight: 600;
}
</style>