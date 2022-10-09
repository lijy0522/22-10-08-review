<!--
 * @Author: lijy
-->
## 容器的属性

- flex-direction 【决定主轴的方向】  
    参数：row | row-reverse | column | column-reverse

- flex-wrap【决定是否换行】  
    参数：warap | nowrap | wrap-reverse

- flex-flow【 flex-director 和 flex-wrap 的简写 】

- justify-content【决定项目在主轴上的对齐方式】  
    参数：flex-start | flex-end | center | space-between | space-around

- align-items【定义项目在交叉轴上如何对齐】  
    参数：flex-start | flex-end | center | baseline | stretch

- 【定义多跟轴线的对齐方式】  
    参数：flex-start | flex-end | center | space-between | space-around

## 项目的属性
- order 【定义项目的排列顺序。数值越小越靠前，默认为0】

- flex-grow 【定义项目的放大比列，默认为0】

- flex-shrink 【定义项目的缩小比例，默认为1，负值无效】

- flex-basis 【定义在分配多余空间之前，项目占据的主轴空间。默认为auto】

- flex 【flex-grow、flex-shrink和flex-basis的简写，默认为 0 1 auto，后两个属性可选】

- align-self 【允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性】  
    参数：auto | flex-start | flex-end | center | baseline | strecth