<template>
  <main>
    <section class="above-fold">
      <landing-page-video />
      <right-banner />
    </section>

    <section class="below-fold">
      <h1 class="headline">krak is...</h1>
      <giphy-card gifID="18UTGqcewr4Dm" gifTitle="High Protein" class="light-grey" caption="...30 grams of muscle building protein in every serving 💪" />
      <giphy-card gifID="zyziDWLk2B6zS" gifTitle="Vegan" class="gold" caption="...absolutely no animal-derived products 🚫🐄" />
      <giphy-card gifID="zUG19ImYp0sco" gifTitle="Delicious" class="raised50px brown" caption="each pouch of krak contains 20 - 30 delicious chocolate-covered pretzel balls 🍫" />
      <giphy-card gifID="ItlwEVsy2qhSo" gifTitle="Anti-Inflammatory" class="raised50px purple" caption="each serving of krak contains loads of curcuminoids — anti-inflammatory antioxidants known to relieve joint pain &amp; indegestion 🦴" />
      <!-- source: https://www.livestrong.com/article/145900-benefits-of-turmeric-powder/
      -->
      <giphy-card gifID="l44QzsOLXxcrigdgI" gifTitle="Nootropic" class="pink" caption="...conatins a blend of natural herbs for improved cognition. TL;DR — You'll have improved focus for hours! ⚡" />
      <giphy-card gifID="3o7TKElEmyu9uqX7zy" gifTitle="Gluten-Free" class="green" caption="...sometime it's hard getting protein on a gluten free diet 😐"/>
      <giphy-card gifID="Z2QAiHPRQcQUw" gifTitle="Paleo" class="black" caption="krak consists of whole, all-natural ingredients. We handmake the pretzels &amp; chocolate ourselves...seriously 👐" />
      <!-- <giphy-card gifID="aPSL5Tp5rWFTa" gifTitle="Dairy-Free" class="gold" caption="🚫🐄" /> -->
      <giphy-card gifID="6i9oVZXPZTbAA" gifTitle="Soy-Free" class="light-grey" caption="...we think soy's effects on the body are gross 😷" /> 
      <giphy-card gifID="iAC6VhG3EWBJS" gifTitle="Low Sugar" class="black raised250px " caption="...only 5 grams of sugar per serving 🍬" />
      <giphy-card gifID="v5yOkOh1nGQVy" gifTitle="" class="no-height" />
    </section>
  </main> 
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LandingPageVideo from '~/components/LandingPageVideo.vue'
import RightBanner from '~/components/RightBanner.vue'
import GiphyCard from '~/components/GiphyCard.vue'

export default {
  components: {
    LandingPageVideo,
    RightBanner,
    GiphyCard
  }
}
</script>
<style lang="scss">
.above-fold {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
}
.below-fold {
  //background: #fff;
  position: absolute;
  margin-top: 50px;
  top: 50vw;
  width: 100%;
}
.floating-div {
  //background: #fff;
  //box-shadow: 0 -5px 2px -2px #777;
}
.headline {
  //color: #900C3F;
  color: #fff;
  font-style: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
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

.links {
  padding-top: 15px;
}
</style>
