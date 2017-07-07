<template>
  <div class="wrapper" :class="{mask: loadOptions && loadOptions.mask}"
       transition="fade"
       v-show="loadOptions && loadOptions.loading"
       @click="hide">
    <div class="loading-box2" >
      <div class="loading-layer2">
        <canvas class="loading-layer2-before"></canvas>
        <p>努力加载中...</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: {
      loadOptions: {
        default: {
          loading: false,
          mask: false
        }
      }
    },
    watch: {
      'loadOptions': function(val) {
        if (val.loading) {
          this.show();
        } else {
          this.hide();
        }
      }
    },
    methods: {
      drawCircle: function(ctx, sAngle, eAngle) {
        for(var i = 0;i < 12; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(205, 204, 190 + i, sAngle * Math.PI, eAngle * Math.PI);
          ctx.strokeStyle = "rgb(187, 226, 248)";
          ctx.stroke();
        }
      },
      draw: function(canvas) {
        var self = this;
        var start = 0,
          end = 0.2;
        var ctx = canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 2000, 2000);
        clearInterval(this.drawInteval);
        ctx.scale(0.73, 0.36);
        return setInterval(function() {
          ctx.clearRect(0, 0, 2000, 2000);
          start += 0.1;
          end = start + 1.7;
          self.drawCircle(ctx, start, end);
        }, 45);
      },
      show: function() {
        if (this.$el.querySelector('canvas')) {
          this.drawInteval = this.draw(this.$el.querySelector('.loading-layer2-before'));
        }
      },
      hide: function() {
        if (this.drawInteval) {
          clearInterval(this.drawInteval);
          this.drawInteval = null;
        }
      }
    }
  }
</script>
<style>
  .wrapper {
    position: absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom: 0px;
    z-index: 9999;
  }
  .fade-transition {
    transition: background .3s ease;
    overflow: hidden;
    opacity:1;
  }
  .mask {
    background:rgba(0,0,0,.5);
    transition: background .3s ease;
    padding-top: 30px;
  }
  .loading-box2{
    background:clear;
    position: fixed;
    left:50%;
    top:50%;
    margin-left:-56px;
    margin-top: -56px;
    width:100%;
  }
  .loading-layer2{
    background-color: #ffffff;
    width: 112px;
    height: 27px;
    padding-top: 85px;
    border-radius: 7px;
    z-index:10000;
    color: #666;
    font-size: 12px;
    text-align: center;
  }
  .loading-layer2-before{
    position: absolute;
    width: 72px;
    height: 72px;
    top: 10px;
    left: 20px;
  }
</style>
