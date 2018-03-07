<template>
	<article>
		<div class="gif-card" :data-title="gifTitle" >
			<video autoplay :poster="gifID" loop>
        <source :src="giphySrc(gifID)" 
        type="video/mp4" />
          {{ gifTitle }}
      </video>
      <aside>
      	{{ caption }}
      </aside>
		</div>
	</article>
</template>
<script>
export default {
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
    opacity: .4;
    padding: calc(33.3vh - 50px) 0;
    position: absolute;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    z-index: 10;
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
  .no-height & {
  	height: 100%;
  }
  .light-grey &:before {
  	background: #aaa;
  }
  .gold &:before {
  	background: #ffc678;
  }
  .purple &:before {
  	background: purple;
  }
  .pink &:before {
  	background: pink;
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
		margin: 0;
		transform: translateX(100%);
		transition: .5s transform;
		width: 50%;
		height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 1.75;
		// media query for mobile
		// 100% width for mobile
	}
	&:hover aside {
		transform: translateX(0);
	}
 	video {
 		margin: 0;
 		width: 100%;
 	}
}
	
</style>