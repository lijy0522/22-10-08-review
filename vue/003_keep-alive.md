<!--
 * @Author: lijy
-->
- keep-alive 可以实现组件缓存，当组件切换时不会对当前组件进行卸载。
- 有三个属性：include | exclude | max
- 两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。