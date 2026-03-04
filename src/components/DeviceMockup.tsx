"use client";

interface DeviceMockupProps {
  type?: "phone" | "laptop";
  screenTitle: string;
  screenLines?: string[];
  accentText?: string;
  theme?: "dark" | "light";
}

export default function DeviceMockup({
  type = "phone",
  screenTitle,
  screenLines = [],
  accentText,
  theme = "dark",
}: DeviceMockupProps) {
  const isDark = theme === "dark";

  if (type === "laptop") {
    return (
      <div className="mx-auto w-full max-w-md">
        {/* Laptop screen */}
        <div
          className={`rounded-t-lg border-2 p-1 ${
            isDark ? "border-xs-border bg-xs-navy-light" : "border-xs-border-light bg-white"
          }`}
        >
          {/* Browser chrome */}
          <div
            className={`flex items-center gap-1.5 rounded-t px-3 py-2 ${
              isDark ? "bg-[#0b1018]" : "bg-gray-100"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
            <span className="h-2 w-2 rounded-full bg-green-400/60" />
            <div
              className={`ml-2 flex-1 rounded text-center text-[9px] py-0.5 ${
                isDark ? "bg-[#151d2e] text-xs-gray-dark" : "bg-gray-200 text-gray-400"
              }`}
            >
              xhinessystems.com
            </div>
          </div>
          {/* Screen content */}
          <div
            className={`px-4 py-6 space-y-3 min-h-[160px] ${
              isDark ? "bg-[#0b1018]" : "bg-white"
            }`}
          >
            <div className="text-xs-green font-mono text-[10px] font-bold uppercase tracking-wider">
              {screenTitle}
            </div>
            {screenLines.map((line, i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${
                  isDark ? "bg-xs-border" : "bg-gray-200"
                }`}
                style={{ width: `${65 + (i % 3) * 12}%` }}
              />
            ))}
            {accentText && (
              <div className="mt-2 inline-block rounded bg-xs-green/15 px-2 py-1 text-[10px] font-semibold text-xs-green">
                {accentText}
              </div>
            )}
          </div>
        </div>
        {/* Laptop base */}
        <div
          className={`mx-auto h-3 w-[110%] -ml-[5%] rounded-b-lg border-x-2 border-b-2 ${
            isDark ? "border-xs-border bg-xs-navy-light" : "border-xs-border-light bg-gray-100"
          }`}
        />
      </div>
    );
  }

  // Phone mockup
  return (
    <div className="mx-auto w-56 sm:w-60">
      <div
        className={`overflow-hidden rounded-[2.2rem] border-[3px] ${
          isDark ? "border-xs-border bg-xs-navy-light" : "border-gray-300 bg-white"
        }`}
      >
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div
            className={`h-4 w-20 rounded-full ${
              isDark ? "bg-[#0b1018]" : "bg-gray-200"
            }`}
          />
        </div>
        {/* Screen */}
        <div
          className={`mx-2 mb-3 rounded-2xl px-4 py-5 min-h-[280px] flex flex-col ${
            isDark ? "bg-[#0b1018]" : "bg-gray-50"
          }`}
        >
          <div className="text-xs-green font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
            {screenTitle}
          </div>
          <div className="space-y-2.5 flex-1">
            {screenLines.map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-xs-green/60" />
                <span
                  className={`text-[11px] leading-tight ${
                    isDark ? "text-xs-gray-light" : "text-xs-text-muted"
                  }`}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
          {accentText && (
            <div className="mt-3 rounded-lg bg-xs-green py-2 text-center text-[11px] font-bold text-xs-navy">
              {accentText}
            </div>
          )}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div
            className={`h-1 w-16 rounded-full ${
              isDark ? "bg-xs-border" : "bg-gray-300"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
