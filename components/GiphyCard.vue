<template>
	<section>
		<div class="gif-card" :data-title="gifTitle" >
			<video autoplay :poster="gifID" loop>
        <source :src="giphySrc(gifID)" 
        type="video/mp4" />
          {{ gifTitle }}
      </video>
		</div>
	</section>
</template>
<script>
export default {
	name: 'GiphyCard',
	props: {
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
.gif-card {
	height: 60.5vh;
	margin: 0;
	overflow: hidden;

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

 	* {
 		margin: 0;
 		width: 100%;
 	}
}
	
</style>