<template>
  <main>
    <section class="above-fold">
      <landing-page-video />
      
    </section>
    <right-banner />
    <section class="below-fold">
      <div id="video-caption">
        <h2 class="headline">krak</h2>
        <hr />
        <h4>Ignite your day</h4>
      </div>
      <!-- <h1 class="headline">krak is...</h1> -->
      <giphy-card gifID="18UTGqcewr4Dm" gifTitle="High Protein" class="purple" caption="32 grams of muscle-building protein per serving 🏋️💪" />
      <giphy-card gifID="zyziDWLk2B6zS" gifTitle="Vegan" class="green re-centered knockout" caption="100% plant-based 🌿" />
      <giphy-card gifID="zUG19ImYp0sco" gifTitle="Delicious" class="raised50px brown" caption="20 ~ 30 delicious chocolate-covered pretzel balls in every serving 🍫🤤" />
      <giphy-card gifID="l44QzsOLXxcrigdgI" gifTitle="Nootropic" class="black" caption="...contains a blend of natural herbs to improve focus &amp; concentration (w/ no caffeine) for hours! 🤯⚡" />
      <giphy-card gifID="ItlwEVsy2qhSo" gifTitle="Anti-Inflammatory" class="raised50px purple" caption="...contains anti-inflammatory antioxidants known to relieve joint pain 🏃🏿‍♀🏃" />
      <!-- source: https://www.livestrong.com/article/145900-benefits-of-turmeric-powder/
      -->
      <giphy-card gifID="3o7TKElEmyu9uqX7zy" gifTitle="Gluten-Free" class="green re-centered" caption="Sometimes it's hard getting protein on a gluten-free diet... 
      We fix that! 😄 🙌"/>
      <giphy-card gifID="Z2QAiHPRQcQUw" gifTitle="Keto &amp; Paleo friendly" class="black knockout-soft" caption="100% natural ingredients &amp; only 11g total carbs. krak helps support your keto &amp; paleo diet goals." />
      <giphy-card gifID="6i9oVZXPZTbAA" gifTitle="Soy-Free" class="brown re-centered" caption="yuck ...no soy here 😷" />
      <giphy-card gifID="l4JyYCo1POYWC9HmE" gifTitle="Low Sugar &amp; Low Carb" class="blue" caption="...only 4 grams of sugar &amp; 11 grams of carbs per serving! 👌" />
      <!-- <giphy-card gifID="v5yOkOh1nGQVy" gifTitle="" class="no-height" todo: "...no preservatives, additives, palm oil or GMOs" /> -->
      <hr>
      <h2 class="headline">compare with...</h2>
      <comparer />
    </section>
  </main> 
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LandingPageVideo from '~/components/LandingPageVideo.vue'
import RightBanner from '~/components/RightBanner.vue'
import GiphyCard from '~/components/GiphyCard.vue'
import Comparer from '~/components/Comparer.vue'

export default {
  components: {
    LandingPageVideo,
    RightBanner,
    GiphyCard,
    Comparer,
  }
}
</script>
<style lang="scss">
$purple: #900C3F;
.above-fold {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
}
.below-fold {
  //background: #fff;
  //background-image: url("https://s3-us-west-2.amazonaws.com/aws-edibars-site/imgs/purty_wood_%402X.png");
  position: absolute;
  margin-top: 15vw;
  // top: 50vw;
  width: 100%;
}
.headline {
  color: #900C3F;
  color: #265EE7;
  color: #D9A118;
  filter: drop-shadow(.05em .05em $purple);
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 5vw;
  mix-blend-mode: difference;
  width: 100%;
  text-align: center;
}
h2.headline {
  color: #fff;
  filter: drop-shadow(.05em .05em #265EE7);
  margin-bottom: 1vw;
}
.container {
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
#video-caption {
  color: #fff;
  margin: 0 auto 20vw;
  text-align: center;
  width: 40%;
  text-align: center;
  h4 {
    animation-name: onload-h4;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 5s;
    animation-timing-function: linear;
    font-family: inherit;
    font-size: 2rem;
    visibility: hidden;
    overflow: hidden;
  }
  hr {
    animation-name: onload-hr;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 5s;
    animation-timing-function: linear;
    margin: -10px auto 5px;
    overflow: hidden;
    text-align: center;
    width: 0;
  }
}

@keyframes onload-hr {
  0% {
    width: 0%
  }
  100% {
    width: 100%
  }
}
@keyframes onload-h4 {
  80% {
    visibility: hidden;   
  }
  100% {
    visibility: visible;
  }
}
.links {
  padding-top: 15px;
}

</style>
