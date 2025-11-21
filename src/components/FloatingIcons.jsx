import React from 'react';
import './FloatingIcons.css';

/**
 * Floating Icons Component
 * Right-side floating icons for translate, logo, and scroll to top
 * Matches Figma design specifications
 * Three icons: translate (speech bubble with star/gear), swirl logo, scroll to top arrow
 */
const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-icons">
      {/* Translate Icon - Speech bubble with star and gear */}
      <div className="floating-icon translate-icon">
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5103 13.5545L33.0094 10.9578H30.011L28.5117 8.36107L27.0126 10.9578H24.014L25.5133 13.5545L24.014 16.1512H27.0126L28.5117 18.748L30.011 16.1512H33.0094L31.5103 13.5545Z" stroke="url(#paint0_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
<mask id="mask0_15811_30849" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="-2" y="-2" width="46" height="46">
<path d="M0.0404053 0.019516H42.0402V42.0193H0.0404053V0.019516Z" fill="white" stroke="white" strokeWidth="2.5"/>
</mask>
<g mask="url(#mask0_15811_30849)">
<path d="M16.5148 16.3297C15.6046 16.1203 14.6735 16.0149 13.7396 16.0155C6.94389 16.0155 1.27087 21.5245 1.27087 28.3201C1.27087 31.8703 2.93848 35.0694 5.34346 37.3152L2.58747 40.7888H13.7396C20.5353 40.7888 26.0442 35.1158 26.0442 28.3201C26.0442 27.3659 25.9356 26.4368 25.73 25.545" stroke="url(#paint1_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
<path d="M28.5052 25.8593C21.7095 25.8593 16.2006 20.3503 16.2006 13.5546C16.2006 6.75901 21.7095 1.24998 28.5052 1.24998C35.3009 1.24998 40.8098 6.75893 40.8098 13.5546C40.8098 17.0776 39.3292 20.2549 36.9563 22.498L39.5425 25.8593H28.5052Z" stroke="url(#paint2_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
<path d="M12.5092 28.3202H14.9701" stroke="url(#paint3_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
<path d="M17.431 28.3202H19.892" stroke="url(#paint4_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
<path d="M7.58728 28.3202H10.0482" stroke="url(#paint5_linear_15811_30849)" strokeOpacity="0.9" strokeWidth="2.5" strokeMiterlimit="10"/>
</g>
<defs>
<linearGradient id="paint0_linear_15811_30849" x1="28.1744" y1="7.0627" x2="28.1744" y2="19.1668" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
<linearGradient id="paint1_linear_15811_30849" x1="12.7285" y1="12.9188" x2="12.7285" y2="41.7877" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
<linearGradient id="paint2_linear_15811_30849" x1="27.5824" y1="-1.82618" x2="27.5824" y2="26.8516" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
<linearGradient id="paint3_linear_15811_30849" x1="13.6473" y1="27.1952" x2="13.6473" y2="28.3605" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
<linearGradient id="paint4_linear_15811_30849" x1="18.5692" y1="27.1952" x2="18.5692" y2="28.3605" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
<linearGradient id="paint5_linear_15811_30849" x1="8.72546" y1="27.1952" x2="8.72546" y2="28.3605" gradientUnits="userSpaceOnUse">
<stop stopColor="#00D4FF"/>
<stop offset="1" stopColor="#00A3E0"/>
</linearGradient>
</defs>
        </svg>

      </div>
    </div>
  );
};

export default FloatingIcons;