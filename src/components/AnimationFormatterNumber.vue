<template>
  <span v-if="number">{{ animateNumToStr }}</span>
  <span v-if="timer">{{ timerStr }}</span>
</template>

<script>
import gsap from "gsap";

export default {
  name: "AnimationFormatterNumber",
  props: {
    number: {
      type: Number,
    },
    timer: {
      type: String,
    },
  },
  data: () => ({
    animateNum: 0,
    beginTimer: "00:00:00",
  }),
  computed: {
    animateNumToStr() {
      const intl = new Intl.NumberFormat("en-US");
      return intl.format(Math.floor(this.animateNum));
    },
    timerStr() {
      this.beginTimer.split(":");
      return this.beginTimer;
    },
  },
  watch: {
    // number(newV) {
    //   gsap.to(this.$data, {
    //     duration: 1,
    //     animateNum: newV,
    //     ease: "power4.out",
    //   });
    // },
  },
  mounted() {
    // console.log(this.$data);
    // if (isNaN(this.number)) {
    //   const ary = [0, 0, 0];
    //   const str = this.number.toString();
    //   const timeNum = str.split(":");

    //   gsap.to(ary, {
    //     duration: 1,
    //     endArray: timeNum.map(item => Number(item)),
    //     onUpdate: () => {
    //       this.$refs.animateRef.innerHTML = ary
    //         .toString()
    //         .replaceAll(/,/gi, ":");
    //     },
    //     // animateNum: this.number,
    //     ease: "power4.out",
    //   });
    //   return;
    // }

    if (this.timer) {
      gsap.to(this.$data, {
        duration: 1,
        ease: "power4.out",
        onUpdate: () => {
          // this.$refs.animateRef.innerHTML;
        },
      });
    }

    if (this.number) {
      gsap.to(this.$data, {
        duration: 1,
        animateNum: this.number,
        ease: "power4.out",
      });
    }
  },
};
</script>
