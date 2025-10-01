// /app/stickyicons/StickyContactIcons.tsx
import React from "react";

export default function StickyContactIcons() {
  return (
    <div className="fixed bottom-6 right-6 space-y-4 z-50 flex flex-col">
      <a
        href="tel:+917995792953"
        aria-label="Call us at +91 79957 92953"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white"
      >
        {/* Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.962.725l1.518 4.554a1 1 0 01-.213 1.09l-2.607 2.607a11.042 11.042 0 005.517 5.517l2.607-2.607a1 1 0 011.09-.213l4.554 1.518a1 1 0 01.725.962V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
      <a
        href="https://wa.me/7995792953"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.84 11.84 0 001.63 6.08L0 24l5.93-1.58A11.82 11.82 0 0012 24c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zM12 21.6a9.57 9.57 0 01-4.92-1.44l-.35-.21-3.52.94.94-3.43-.22-.35A9.57 9.57 0 012.4 12 9.6 9.6 0 0112 2.4a9.6 9.6 0 019.6 9.6 9.57 9.57 0 01-9.6 9.6zm5.07-7.1c-.27-.14-1.58-.78-1.82-.87s-.42-.13-.6.14-.69.87-.84 1.05-.31.21-.58.07a7.6 7.6 0 01-2.23-1.4 8.46 8.46 0 01-1.56-1.92c-.16-.27 0-.41.12-.55.12-.13.27-.31.41-.47a1.3 1.3 0 00.19-.31.21.21 0 000-.4c-.07 0-.6-.67-.83-.92-.22-.23-.43-.5-.61-.72s-.3-.33-.42-.44a.55.55 0 01-.08-.38c0-.14.06-.3.28-.46.21-.17.47-.43.69-.65a2.89 2.89 0 00.69-.9.44.44 0 000-.42c-.07-.13-.6-1.42-.83-1.95-.22-.52-.45-.45-.6-.45h-.51a.76.76 0 00-.55.26 2 2 0 00-.69.87 3.39 3.39 0 00-.9 2.2 4.59 4.59 0 001.35 3.27 11.17 11.17 0 004.79 4.66 5.48 5.48 0 002.43.7 2.17 2.17 0 001.48-.67 1.71 1.71 0 00.51-1.27c-.03-.21-.09-.27-.26-.41z" />
        </svg>
      </a>
      <a
        href="mailto:servanienterprise@gmail.com"
        aria-label="Send an email to servanienterprise@gmail.com"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        {/* Email Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2v-8m-18 0l7.89 5.26a2 2 0 002.22 0L21 8"
          />
        </svg>
      </a>
    </div>
  );
}
