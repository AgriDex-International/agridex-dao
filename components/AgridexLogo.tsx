import React from 'react'
import { useTheme } from 'next-themes'

const AgridexLogo = () => {
  const { theme = "Dark" } = useTheme()

  return (
    <>
      <div className="p-2 text-xs">for</div>
      {theme === 'Dark' ? (
        <picture>
          <source
            srcSet="/img/a-logo-white.svg"
            media="(min-width: 640px)"
          />
          <img src="/img/a-logo-white-m.svg" className="w-8 h-8 sm:w-24" />
        </picture>
      ) : (
        <picture>
          <source
            srcSet="/img/a-logo-black.svg"
            media="(min-width: 640px)"
          />
          <img src="/img/a-logo-black-m.svg" className="w-8 h-8 sm:w-24" />
        </picture>
      )}
    </>
  )
}

export default AgridexLogo
