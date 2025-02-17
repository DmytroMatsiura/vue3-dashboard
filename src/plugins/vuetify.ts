import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@phosphor-icons/vue'
import { PhosphorIcons } from './phosphor-icons'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  defaults: {
    VBtn: {
      elevation: 0,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      ph: PhosphorIcons,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          gray: '#9CA3AF',
          'gray-50': '#F9FAFB',
          'gray-100': '#F3F4F6',
          'gray-200': '#E5E7EB',
          'gray-300': '#D1D5DB',
          'gray-400': '#9CA3AF',
          'gray-500': '#6B7280',
          'gray-600': '#4B5563',
          'gray-700': '#374151',
          'gray-800': '#1F2937',
          'gray-900': '#111827',

          primary: '#005CE8',
          'primary-50': '#F0F6FF',
          'primary-100': '#DBEAFE',
          'primary-200': '#BFDBFE',
          'primary-300': '#93C5FD',
          'primary-400': '#60A5FA',
          'primary-500': '#005CE8',
          'primary-600': '#2563EB',
          'primary-700': '#1D4ED8',
          'primary-800': '#1E40AF',
          'primary-900': '#1E3A8A',

          secondary: '#FACC15',
          'secondary-50': '#FEFCE8',
          'secondary-100': '#FEF9C3',
          'secondary-200': '#FEF08A',
          'secondary-300': '#FDE047',
          'secondary-400': '#FACC15',
          'secondary-500': '#EAB308',
          'secondary-600': '#CA8A04',
          'secondary-700': '#A16207',
          'secondary-800': '#854D0E',
          'secondary-900': '#713F12',

          success: '#22C55E',
          'success-50': '#F0FDF4',
          'success-100': '#DCFCE7',
          'success-200': '#BBF7D0',
          'success-300': '#86EFAC',
          'success-400': '#4ADE80',
          'success-500': '#22C55E',
          'success-600': '#16A34A',
          'success-700': '#15803D',
          'success-800': '#166534',
          'success-900': '#14532D',

          warning: '#F97316',
          'warning-50': '#FFF7ED',
          'warning-100': '#FFEDD5',
          'warning-200': '#FED7AA',
          'warning-300': '#FDBA74',
          'warning-400': '#FB923C',
          'warning-500': '#F97316',
          'warning-600': '#EA580C',
          'warning-700': '#C2410C',
          'warning-800': '#9A3412',
          'warning-900': '#7C2D12',

          danger: '#EF4444',
          'danger-50': '#FEF2F2',
          'danger-100': '#FEE2E2',
          'danger-200': '#FECACA',
          'danger-300': '#FCA5A5',
          'danger-400': '#F87171',
          'danger-500': '#EF4444',
          'danger-600': '#DC2626',
          'danger-700': '#B91C1C',
          'danger-800': '#991B1B',
          'danger-900': '#7F1D1D',
        },
      },
    },
  },
  components,
  directives,
})
