import { memo, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const ACTIVE_COUNTRY_NAMES = new Set([
  'United States of America',
  'Mexico',
  'South Korea',
  'New Zealand',
  'Nepal',
  'United Kingdom',
  'India',
  'Australia',
  'Brazil',
  'China',
  'Egypt',
  'Turkey',
  'United Arab Emirates',
  'Pakistan',
])

const DISPLAY_NAMES: Record<string, string> = {
  'United States of America': 'United States',
}

function WorldMapInner() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <figure className="relative !m-0 w-full">
      <div className="relative w-full overflow-hidden border border-foreground/20 bg-transparent">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 120, center: [10, 20] }}
          width={800}
          height={312}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const rawName = geo.properties?.name as string | undefined
                const isActive = rawName ? ACTIVE_COUNTRY_NAMES.has(rawName) : false
                const name = rawName ? DISPLAY_NAMES[rawName] ?? rawName : ''

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => isActive && setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill: isActive ? 'hsl(213 28% 32%)' : 'hsl(40 5% 82%)',
                        stroke: 'hsl(40 8% 91%)',
                        strokeWidth: 0.4,
                        outline: 'none',
                        transition: 'fill 0.2s ease',
                      },
                      hover: {
                        fill: isActive ? 'hsl(213 35% 28%)' : 'hsl(40 5% 78%)',
                        stroke: 'hsl(40 8% 91%)',
                        strokeWidth: 0.4,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                      },
                      pressed: { outline: 'none' },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>

        {hovered && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-sans tracking-wide">
            {hovered}
          </div>
        )}
      </div>

      <figcaption className="flex items-center justify-between mt-3 gap-4">
        <div className="flex items-center gap-2 font-sans text-[11px] sm:text-xs text-foreground/70">
          <span className="inline-block w-3 h-3 bg-navy shrink-0" aria-hidden="true" />
          Countries with active chapters
        </div>
        <span className="font-sans text-[10px] sm:text-[11px] text-foreground/45 whitespace-nowrap">
          Hover a country to see its name
        </span>
      </figcaption>
    </figure>
  )
}

export const WorldMap = memo(WorldMapInner)
