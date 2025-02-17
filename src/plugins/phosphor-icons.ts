import { h } from 'vue'
import * as PhIcons from '@phosphor-icons/vue'
import type { VIconProps } from 'vuetify/components/VIcon'

export const PhosphorIcons = {
  component: (props: VIconProps) => {
    const iconName = props.icon
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    const IconComponent = PhIcons[`Ph${iconName}` as keyof typeof PhIcons]

    console.log(IconComponent)

    return IconComponent ? h(IconComponent, { ...props }) : null
  },
}
