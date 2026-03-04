"use client";

import AnimateIn from "./AnimateIn";
import DeviceMockup from "./DeviceMockup";

interface FeatureSectionProps {
  label: string;
  headline: string;
  body: string;
  bullets?: string[];
  imageSide?: "left" | "right";
  theme?: "dark" | "light";
  screenTitle?: string;
  screenLines?: string[];
  screenAccent?: string;
  deviceType?: "phone" | "laptop";
  customVisual?: React.ReactNode;
}

export default function FeatureSection({
  label,
  headline,
  body,
  bullets,
  imageSide = "right",
  theme = "dark",
  screenTitle = "",
  screenLines = [],
  screenAccent,
  deviceType = "phone",
  customVisual,
}: FeatureSectionProps) {
  const isDark = theme === "dark";

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-xs-green">
        {label}
      </span>
      <h3
        className={`mt-3 font-heading text-2xl font-bold uppercase leading-snug tracking-wide sm:text-3xl ${
          isDark ? "text-xs-white" : "text-xs-text-dark"
        }`}
      >
        {headline}
      </h3>
      <p
        className={`mt-4 leading-relaxed ${
          isDark ? "text-xs-gray-light" : "text-xs-text-muted"
        }`}
      >
        {body}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-2.5 text-sm ${
                isDark ? "text-xs-gray-light" : "text-xs-text-muted"
              }`}
            >
              <span className="mt-1 text-xs text-xs-green">✓</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      {customVisual || (
        <DeviceMockup
          type={deviceType}
          screenTitle={screenTitle || label}
          screenLines={screenLines}
          accentText={screenAccent}
          theme={theme}
        />
      )}
    </div>
  );

  return (
    <section
      className={`py-16 lg:py-24 ${isDark ? "section-dark" : "section-light"}`}
    >
      <div className="container-main">
        <AnimateIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {imageSide === "left" ? (
              <>
                {imageBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {imageBlock}
              </>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
