"use client";

interface Message {
  text: string;
  from: "them" | "me";
  time?: string;
}

const messages: Message[] = [
  {
    text: "Hey, I need a quote for a bathroom remodel",
    from: "them",
  },
  {
    text: "Hey! Got your message. We'd love to help. When works for a quick call?",
    from: "me",
    time: "2:14 PM ✓✓",
  },
  {
    text: "Tomorrow morning works",
    from: "them",
  },
  {
    text: "Perfect. Booking you in now 👍",
    from: "me",
    time: "2:15 PM ✓✓",
  },
];

export default function IMessageMockup() {
  return (
    <div className="mx-auto w-[260px] sm:w-[280px]">
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2.5rem] border-[3px] border-[#3a3a3c] bg-black">
        {/* Notch area */}
        <div className="relative flex items-center justify-between px-6 pt-3 pb-1">
          {/* Time */}
          <span
            className="text-[11px] font-semibold text-white"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
          >
            9:41
          </span>
          {/* Notch */}
          <div className="absolute left-1/2 top-1 -translate-x-1/2 h-[22px] w-[90px] rounded-full bg-black border border-[#1c1c1e]" />
          {/* Status icons */}
          <div className="flex items-center gap-1">
            {/* Signal */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fillOpacity="0.4" />
              <rect x="4.5" y="5" width="3" height="7" rx="0.5" fillOpacity="0.6" />
              <rect x="9" y="2" width="3" height="10" rx="0.5" fillOpacity="0.8" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
            </svg>
            {/* Battery */}
            <svg width="22" height="11" viewBox="0 0 22 11" fill="white">
              <rect x="0" y="0.5" width="19" height="10" rx="2" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.35" />
              <rect x="1.5" y="2" width="14" height="7" rx="1" fill="white" />
              <path d="M20 3.5 C21 4 21 7 20 7.5" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Header bar */}
        <div className="flex items-center justify-center gap-2 px-4 py-2 border-b border-[#2c2c2e]">
          <div className="h-8 w-8 rounded-full bg-[#636366] flex items-center justify-center">
            <span className="text-[10px] font-semibold text-white">JM</span>
          </div>
          <div>
            <div
              className="text-[13px] font-semibold text-white"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
            >
              John Mitchell
            </div>
            <div
              className="text-[10px] text-[#8e8e93]"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
            >
              iMessage
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div
          className="flex flex-col gap-2 px-3 py-3 min-h-[260px]"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[85%]">
                <div
                  className={`rounded-2xl px-3 py-2 text-[13px] leading-snug text-white ${
                    msg.from === "me"
                      ? "bg-[#0a84ff] rounded-br-sm"
                      : "bg-[#2c2c2e] rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.time && (
                  <div className="mt-0.5 text-right text-[9px] text-[#8e8e93] pr-1">
                    {msg.time}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Auto-response indicator */}
          <div className="mt-1 flex justify-end">
            <div className="rounded-full bg-xs-green/15 px-2.5 py-1 text-[9px] font-semibold text-xs-green">
              ⚡ Auto-sent in 2 min
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-t border-[#2c2c2e] px-3 py-2">
          <div className="flex h-[30px] flex-1 items-center rounded-full border border-[#3a3a3c] px-3">
            <span className="text-[12px] text-[#8e8e93]" style={{ fontFamily: "-apple-system, system-ui, sans-serif" }}>
              iMessage
            </span>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a84ff]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
              <path d="M1 5 L5 1 L9 5 M5 1 L5 9" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="h-[4px] w-[100px] rounded-full bg-[#636366]" />
        </div>
      </div>
    </div>
  );
}
