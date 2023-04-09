import { ExtractPropTypes } from 'vue'

export const scrollbarProps = {
  height: {
    type: Number,
    default: 200,
  },
  width: {
    type: Number,
    default: 300,
  },
  // 滑块颜色
  scrollColor: {
    type: String,
    default: 'rgb(199,200,203)',
  },
}

export type scrollbarProps = ExtractPropTypes<typeof scrollbarProps>
