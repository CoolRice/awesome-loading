export default {
  'three-dots-scale': {
    htmlString: '<div className="three-dots-scale"><div/><div/><div/></div>',
    cssString:
`.circle-dots-scale div {
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}

@keyframes circle-dots-scale {
  100% {
    transform: scale(0);
    opacity: 0;
  }
  75% {
    transform: scale(0.25);
    opacity: 0.25;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  25% {
    transform: scale(0.75);
    opacity: 0.75;
  }
  0% {
    transform: scale(1);
    opacity: 1;
  }
}
.circle-dots-scale {
  width: 0px;
  margin: 0 auto;
  position: relative;
}
.circle-dots-scale div {
  position: absolute;
  margin: 2px;
}
.circle-dots-scale div:nth-child(1) {
  top: -30px;
  left: 0;
  animation: circle-dots-scale 3.2s -2.8s infinite linear;
}
.circle-dots-scale div:nth-child(2) {
  top: -20px;
  left: 20px;
  animation: circle-dots-scale 3.2s -2.4s infinite linear;
}
.circle-dots-scale div:nth-child(3) {
  top: 0px;
  left: 30px;
  animation: circle-dots-scale 3.2s -2s infinite linear;
}
.circle-dots-scale div:nth-child(4) {
  top: 20px;
  left: 20px;
  animation: circle-dots-scale 3.2s -1.6s infinite linear;
}
.circle-dots-scale div:nth-child(5) {
  top: 30px;
  left: 0px;
  animation: circle-dots-scale 3.2s -1.2s infinite linear;
}
.circle-dots-scale div:nth-child(6) {
  top: 20px;
  left: -20px;
  animation: circle-dots-scale 3.2s -0.8s infinite linear;
}
.circle-dots-scale div:nth-child(7) {
  top: 0px;
  left: -30px;
  animation: circle-dots-scale 3.2s -0.4s infinite linear;
}
.circle-dots-scale div:nth-child(8) {
  top: -20px;
  left: -20px;
  animation: circle-dots-scale 3.2s 0s infinite linear;
}
`
  }

  }
;
