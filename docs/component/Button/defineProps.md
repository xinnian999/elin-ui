<script  lang="ts">
const type= `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'`;
const size= `'large' \| 'default' \| 'small' `;
const clickEffect= `'water' \| 'zoom'`
</script>

| 属性名      | 说明      | 类型                             | 默认值      |
| ----------- |---------| -------------------------------- | ----------- |
| type        | 颜色类型    | <e-enum>{{type}}</e-enum>        | 无          |
| size        | 按钮大小    | <e-enum>{{size}}</e-enum>        | `'default'` |
| plain       | 是否为次要按钮 | `boolean`                        | false       |
| text        | 是否为文字按钮 | `boolean`                        | false       |
| round       | 是否为圆角按钮 | `boolean`                        | false       |
| circle      | 是否为圆形按钮 | `boolean`                        | false       |
| loading     | 是否加载中状态 | `boolean`                        | false       |
| clickEffect | 点击动画    | <e-enum>{{clickEffect}}</e-enum> | `'water'`   |
