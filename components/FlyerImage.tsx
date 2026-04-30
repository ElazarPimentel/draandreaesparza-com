'use client'

import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from 'react'

interface FlyerImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function FlyerImage({ src, alt, width, height }: FlyerImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [baseWidth, setBaseWidth] = useState(640)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState<{ pointerId: number; x: number; y: number; offsetX: number; offsetY: number } | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const aspectRatio = width / height

  const openViewer = () => {
    const thumb = triggerRef.current?.getBoundingClientRect()
    const maxWidth = window.innerWidth - 32
    const maxHeight = window.innerHeight - 112
    let nextWidth = (thumb?.width || 320) * 2

    if (nextWidth / aspectRatio > maxHeight) {
      nextWidth = maxHeight * aspectRatio
    }
    if (nextWidth > maxWidth) {
      nextWidth = maxWidth
    }

    setBaseWidth(Math.max(240, Math.round(nextWidth)))
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    setDragStart(null)
    setIsOpen(true)
  }

  const closeViewer = () => {
    setIsOpen(false)
    setDragStart(null)
  }

  const adjustZoom = (delta: number) => {
    setZoom(current => Math.min(4, Math.max(0.5, Number((current + delta).toFixed(2)))))
  }

  const resetView = () => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeViewer()
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
      <button ref={triggerRef} type="button" className="flyer-image-button" onClick={openViewer} aria-label="Ampliar imagen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      </button>

      {isOpen && (
        <div className="image-modal-backdrop" role="presentation" onClick={closeViewer}>
          <div className="image-modal" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={event => event.stopPropagation()}>
            <div
              className="image-modal-body"
              onWheel={(event: WheelEvent<HTMLDivElement>) => {
                event.preventDefault()
                adjustZoom(event.deltaY < 0 ? 0.15 : -0.15)
              }}
              onPointerDown={(event: PointerEvent<HTMLDivElement>) => {
                event.currentTarget.setPointerCapture(event.pointerId)
                setDragStart({ pointerId: event.pointerId, x: event.clientX, y: event.clientY, offsetX: offset.x, offsetY: offset.y })
              }}
              onPointerMove={(event: PointerEvent<HTMLDivElement>) => {
                if (!dragStart || dragStart.pointerId !== event.pointerId) return
                setOffset({
                  x: dragStart.offsetX + event.clientX - dragStart.x,
                  y: dragStart.offsetY + event.clientY - dragStart.y,
                })
              }}
              onPointerUp={() => setDragStart(null)}
              onPointerCancel={() => setDragStart(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                draggable={false}
                style={{
                  width: `${baseWidth}px`,
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                }}
              />
            </div>
            <div className="image-modal-controls">
              <button type="button" onClick={() => adjustZoom(-0.25)} aria-label="Alejar imagen">
                -
              </button>
              <button type="button" onClick={() => adjustZoom(0.25)} aria-label="Acercar imagen">
                +
              </button>
              <button type="button" onClick={resetView}>
                Restablecer
              </button>
              <button type="button" onClick={closeViewer}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
