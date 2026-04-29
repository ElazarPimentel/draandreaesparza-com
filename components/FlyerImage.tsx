'use client'

import { useEffect, useState } from 'react'

interface FlyerImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function FlyerImage({ src, alt, width, height }: FlyerImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  return (
    <>
      <button type="button" className="flyer-image-button" onClick={() => setIsOpen(true)} aria-label="Ampliar imagen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      </button>

      {isOpen && (
        <div className="image-modal-backdrop" role="presentation" onClick={() => setIsOpen(false)}>
          <div className="image-modal" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={event => event.stopPropagation()}>
            <div className="image-modal-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} width={width} height={height} />
            </div>
            <button type="button" className="image-modal-close" onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
