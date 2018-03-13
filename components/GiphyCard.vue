<template>
	<article>
		<div class="gif-card" :data-title="gifTitle" :class="{ opaque: isMobileDevice }">
			<video autoplay :poster="gifID" loop v-if="!isMobileDevice">
        <source :src="giphySrc(gifID)" 
        type="video/mp4" />
          {{ gifTitle }}
      </video>
      <aside v-if="this.caption">
      	<p>{{ caption }}</p>
      </aside>
		</div>
	</article>
</template>
<script>
export default {
  data() {
    return {
      isMobileDevice: null
    }
  },
	name: 'GiphyCard',
	props: {
		caption: {
			type: String,
      required: false
		},
		gifID: {
      type: String,
      required: true
    },
    gifTitle: {
      type: String,
      required: false
    },
	},
	methods: {
		giphyPoster(gifID) {
			return `https://media.giphy.com/media/${gifID}/200_s.gif`;
		},
		giphySrc(gifID) {
			return `https://media.giphy.com/media/${gifID}/giphy.mp4`;
		},
	},
  mounted() {
    this.isMobileDevice = window.navigator.userAgent.includes("Mobi") && 
    (window.navigator.maxTouchPoints != 0);
  }
}
</script>
<style lang="scss">
$purple: #900C3F;
.gif-card {
	height: 60.5vh;
	margin: 0;
	overflow: hidden;
	position: relative;

 	&:before {
    color: #fff;
    content: attr(data-title);
    display: block;
    font-size: 3.2rem;
    left: 0;
    margin: 0;
    //mix-blend-mode: hard-light;
    opacity: .7;
    padding: calc(33.3vh - 50px) 0;
    position: absolute;
    vertical-align: middle;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    z-index: 10;
 	}
  &.opaque:before {
    //mix-blend-mode: normal;
  }
	&:hover:before {
  	background-color: transparent !important;
  	opacity: 1;
  }
  .raised50px & video {
  	margin-top: -50px;
  }
  .raised250px & video {
  	margin-top: -250px;
  }
  .knockout &:before {
  	mix-blend-mode: multiply;
  }
  .knockout-soft &:befoe {
    mix-blend-mode: soft-light;
  }
  .no-height & {
  	height: 100%;
  }
  .blue &:before {
  	background: blue;
  }
  .purple &:before {
  	background: purple;
  }
  .green &:before {
  	background: green;
  }
  .brown &:before {
  	background: brown;
  }
  .black &:before {
  	background: black;
  }
	aside {
		background: white;
		color: $purple;
		display: table;
		margin: 0;
		transform: translateX(100%);
		transition: .5s transform;
		width: 100%;
		height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 5rem;
    pointer-events: none;
    text-align: center;
    z-index: 100;
		// media query for mobile
		// 100% width for mobile
    .blue & {
      color: darken(#0000aa, 6);
    }
    .purple & {
      color: $purple;
    }
    .green & {
      color: darken(green, 6);
    }
    .brown & {
      color: brown;
    }
    .black & {
      color: black;
    }
		p {
			display: table-cell;
			vertical-align: middle;
		}
	}
	&:hover aside {
		transform: translateX(0);
	}
 	video {
 		margin: 0;
 		width: 100%;
 	}
 	@media screen and (max-width: 480px) {
 		height: 50.5vh;
		aside p {
			font-size: 5.4vw;
		}
		.raised50px & video {
	  	margin-top: 0;
	  }
		.raised250px & video {
	  	margin-top: 0;
	  }
	  video {
	  	height: 100%;
	  	width: auto;
	  	.re-centered & {
	  		position: relative;
    		right: 50%;
	  	}
	  }	
	}
}	
</style>
