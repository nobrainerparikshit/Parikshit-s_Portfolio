declare module 'react-simple-maps' {
  import type { ReactNode, CSSProperties } from 'react'

  export interface Geography {
    rsmKey: string
    properties: Record<string, unknown>
  }

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: Record<string, number | number[]>
    width?: number
    height?: number
    style?: CSSProperties
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography: string | object
    children: (data: { geographies: Geography[] }) => ReactNode
  }

  export interface GeographyProps {
    geography: Geography
    style?: {
      default?: CSSProperties
      hover?: CSSProperties
      pressed?: CSSProperties
    }
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element
  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element
}
