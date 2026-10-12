// An original little teddy, drawn as inline SVG so it stays crisp on any phone.
export default function Teddy({ className = '', title = 'A cute teddy bear hugging a pink heart' }) {
  return (
    <svg className={`teddy ${className}`} viewBox="0 0 220 240" role="img" aria-label={title}>
      <ellipse cx="110" cy="230" rx="62" ry="7" fill="#c98a9b" opacity="0.18" />

      {/* legs */}
      <ellipse cx="74" cy="205" rx="27" ry="23" fill="#e7b07f" />
      <ellipse cx="146" cy="205" rx="27" ry="23" fill="#e7b07f" />
      <ellipse cx="74" cy="209" rx="14" ry="11" fill="#f7d8b5" />
      <ellipse cx="146" cy="209" rx="14" ry="11" fill="#f7d8b5" />

      {/* body */}
      <ellipse cx="110" cy="166" rx="58" ry="62" fill="#e7b07f" />
      <ellipse cx="110" cy="174" rx="37" ry="43" fill="#f7d8b5" />

      {/* heart being hugged */}
      <g className="teddy__heart">
        <path
          d="M110 198 C 78 177, 76 148, 96 146 C 105 145, 109 151, 110 156 C 111 151, 115 145, 124 146 C 144 148, 142 177, 110 198 Z"
          fill="#f78fb3"
        />
        <path d="M94 156 C 90 158, 89 164, 92 168" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      </g>

      {/* arms (drawn over the heart so it looks hugged) */}
      <ellipse cx="73" cy="158" rx="14" ry="29" fill="#ecb988" transform="rotate(-32 73 158)" />
      <ellipse cx="147" cy="158" rx="14" ry="29" fill="#ecb988" transform="rotate(32 147 158)" />

      {/* ears */}
      <circle cx="66" cy="46" r="21" fill="#e7b07f" />
      <circle cx="154" cy="46" r="21" fill="#e7b07f" />
      <circle cx="66" cy="46" r="11" fill="#f6b9c1" />
      <circle cx="154" cy="46" r="11" fill="#f6b9c1" />

      {/* head */}
      <circle cx="110" cy="85" r="52" fill="#ecb988" />
      <ellipse cx="110" cy="103" rx="23" ry="17" fill="#f9e0c2" />

      {/* face */}
      <g className="teddy__eyes">
        <circle cx="89" cy="80" r="5.4" fill="#3b2428" />
        <circle cx="131" cy="80" r="5.4" fill="#3b2428" />
        <circle cx="90.8" cy="78" r="1.7" fill="#fff" />
        <circle cx="132.8" cy="78" r="1.7" fill="#fff" />
      </g>
      <ellipse cx="76" cy="98" rx="9" ry="6" fill="#ff9fb5" opacity="0.55" />
      <ellipse cx="144" cy="98" rx="9" ry="6" fill="#ff9fb5" opacity="0.55" />
      <ellipse cx="110" cy="95" rx="8" ry="6" fill="#6b3f3f" />
      <path
        d="M110 101 v5 M110 106 q-6 6 -12 2 M110 106 q6 6 12 2"
        stroke="#6b3f3f"
        strokeWidth="2.3"
        strokeLinecap="round"
        fill="none"
      />

      {/* little bow */}
      <ellipse cx="94" cy="139" rx="13" ry="7.5" fill="#f78fb3" transform="rotate(-18 94 139)" />
      <ellipse cx="126" cy="139" rx="13" ry="7.5" fill="#f78fb3" transform="rotate(18 126 139)" />
      <circle cx="110" cy="139" r="5.5" fill="#e8607f" />
    </svg>
  )
}
