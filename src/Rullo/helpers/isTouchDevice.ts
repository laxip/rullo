function isTouchDevice(): boolean {
  // @ts-expect-error
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

export default isTouchDevice();
