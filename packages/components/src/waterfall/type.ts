import { ExtractPropTypes } from 'vue'

export const waterfallProps = {
  // 水印内容
  value: [String, Number],
  width: {
    type: Number,
    default: 240,
  },
  height: {
    type: Number,
    default: 120,
  },
  // 水印旋转角度
  rotate: {
    type: Number,
    default: 22,
  },
  fontSize: {
    type: Number,
    default: 16,
  },
  color: {
    type: String,
    default: 'rgba(0,0,0,0.15)',
  },
}

export type waterfallProps = ExtractPropTypes<typeof waterfallProps>
