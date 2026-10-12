// A tiny five-petal flower used as scrapbook decoration.
export default function Flower({ className = '', petal = '#ffb3c6', center = '#ffe08a' }) {
  return (
    <svg className={`flower ${className}`} viewBox="0 0 60 60" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse key={deg} cx="30" cy="14" rx="9" ry="13" fill={petal} transform={`rotate(${deg} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="7" fill={center} />
    </svg>
  )
}
