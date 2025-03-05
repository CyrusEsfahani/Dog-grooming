import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center relative w-20 h-20">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=724&q=80"
          alt="PawPerfect Logo"
          className="w-full h-full object-cover object-center transform scale-100"
        />
      </div>
      <div className="absolute w-full text-center top-0">
        <div className="relative inline-block">
          {Array.from('PawPerfect').map((char, i) => (
            <span
              key={i}
              className="absolute text-xs font-semibold tracking-widest text-gray-700"
              style={{
                transform: `rotate(${(i - 4.5) * 25}deg) translateY(-32px)`,
                transformOrigin: 'bottom center',
                left: `${50 + (i - 4.5) * 3}%`
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute w-full h-full">
        <svg
          className="w-full h-full text-gray-700 opacity-20"
          viewBox="0 0 512 512"
          fill="currentColor"
          style={{
            transform: 'scale(1.2)'
          }}
        >
          <path d="M378.608 290.398C367.164 322.3 345.623 352.003 316.577 375.793C287.53 399.584 252.142 416.507 214.63 424.999C177.118 433.492 138.282 433.333 101.823 424.538C65.3644 415.743 32.5105 398.57 6.58701 374.604C-19.3365 350.638 -37.5529 320.819 -46.1672 288.861C-54.7814 256.903 -53.4755 223.984 -42.3994 193.257C-31.3234 162.53 -10.9613 135.12 16.1939 113.61C43.3491 92.0999 76.1781 77.2771 111.273 70.4985L116.728 96.8219C86.5396 102.714 58.3371 115.501 34.9059 134.099C11.4747 152.697 -6.38571 176.481 -16.9731 203.134C-27.5605 229.787 -30.5034 258.392 -25.5085 286.228C-20.5137 314.064 -7.7512 340.104 11.5225 361.721C30.7962 383.337 55.9391 399.744 84.4646 409.137C112.99 418.53 143.756 420.604 173.526 415.158C203.296 409.711 231.009 396.933 253.901 378.133C276.793 359.333 293.984 335.144 303.608 308.102L378.608 290.398Z" />
          <path d="M433.608 290.398C422.164 322.3 400.623 352.003 371.577 375.793C342.53 399.584 307.142 416.507 269.63 424.999C232.118 433.492 193.282 433.333 156.823 424.538C120.364 415.743 87.5105 398.57 61.587 374.604C35.6635 350.638 17.4471 320.819 8.83284 288.861C0.218576 256.903 1.52448 223.984 12.6006 193.257C23.6766 162.53 44.0387 135.12 71.1939 113.61C98.3491 92.0999 131.178 77.2771 166.273 70.4985L171.728 96.8219C141.54 102.714 113.337 115.501 89.9059 134.099C66.4747 152.697 48.6143 176.481 38.0269 203.134C27.4395 229.787 24.4966 258.392 29.4915 286.228C34.4863 314.064 47.2488 340.104 66.5225 361.721C85.7962 383.337 110.939 399.744 139.465 409.137C167.99 418.53 198.756 420.604 228.526 415.158C258.296 409.711 286.009 396.933 308.901 378.133C331.793 359.333 348.984 335.144 358.608 308.102L433.608 290.398Z" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;