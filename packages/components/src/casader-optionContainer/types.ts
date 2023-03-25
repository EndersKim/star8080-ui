import { ExtractPropTypes } from 'vue'

export interface Item {
  value: string | number
  label: string | number
  children: Array<Item>
}

export const casader_optionContainerProps = {
  option: {
    type: Array<Item>,
    default: [{}],
  },
  updateVaule: {
    type: Function,
    default: () => {
      return null
    },
  },
}

export type casader_optionContainerProps = ExtractPropTypes<
  typeof casader_optionContainerProps
>
