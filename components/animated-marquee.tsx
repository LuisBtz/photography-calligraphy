"use client"

export default function AnimatedMarquee() {
  const marqueeItems = [
    "Imágenes que elevan tu marca",
    "Retratos profesionales con intención clara",
    "Fotografía de bodas con elegancia",
    "Tu producto en su mejor ángulo",
    "Momentos auténticos, memorias eternas",
    "Calidad visual para destacar tu marca",
    "Historias de amor en cada foto",
    "Letras que comunican con arte",
  ]

  return (
    <div className="bg-black text-white py-4 overflow-hidden relative">
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
              <span className="mx-8 text-gray-400">•</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeItems.map((item, index) => (
            <span key={`duplicate-${index}`} className="marquee-item">
              {item}
              <span className="mx-8 text-gray-400">•</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .marquee-item {
          display: inline-block;
          padding-right: 2rem;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        
        /* Responsive font sizes */
        @media (max-width: 768px) {
          .marquee-content {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-content {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}
