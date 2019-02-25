<template>
  <div class="increase-decrease ui-flex wrap align-center">
    <div @click="decrease" :class="{ 'btn-disabled': deBtnDisabled }" class="box ui-flex wrap align-center">-</div>
    <div class="box ui-flex wrap align-center middle">{{initVal}}</div>
    <div @click="increase" :class="{ 'btn-disabled': inBtnDisabled }" class="box ui-flex wrap align-center">+</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "increase-decrease",
  data() {
    return {
      deBtnDisabled: false,
      inBtnDisabled: false,
      initVal: 1
    };
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    initValue: {
      type: Number,
      default: 1
    },
    minValue: {
      type: Number,
      default: 1
    },
    maxValue: {
      type: Number,
      default: 1
    }
  },
  methods: {
    decrease() {
      this.endisabled(false);
      this.$emit("getValue", [this.index, this.initVal]);
    },
    increase() {
      this.endisabled(true);
      this.$emit("getValue", [this.index, this.initVal]);
    },
    endisabled(flag) {
      if (!flag) {
        this.inBtnDisabled = false;
        if (this.initVal === this.minValue) {
          this.deBtnDisabled = true;
          this.initVal = this.minValue;
        } else {
          this.deBtnDisabled = false;
          this.initVal--;
        }
      } else {
        this.deBtnDisabled = false;
        if (this.initVal === this.maxValue) {
          this.inBtnDisabled = true;
          this.initVal = this.maxValue;
        } else {
          this.inBtnDisabled = false;
          this.initVal++;
        }
      }
    },

    reset() {
      this.initVal = this.initValue;
      if (this.initVal <= this.minValue) {
        this.deBtnDisabled = true;
        this.initVal = this.minValue;
      }
      if (this.initVal >= this.maxValue) {
        this.inBtnDisabled = true;
        this.initVal = this.maxValue;
      }
    }
  },
  watch: {
    initValue() {
      this.reset();
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/util";
.increase-decrease {
  width: max-content;
  border: 1px solid #eee;
  .box {
    width: pxToRem(31);
    height: pxToRem(31);
    font-size: pxToRem(28);
    background-color: #e2e0e0;
    justify-content: center;
    color: #656363;
  }
  .middle {
    font-size: pxToRem(16);
    background-color: #fff;
  }
  .btn-disabled {
    background-color: #f3f0f0;
  }
}
</style>
