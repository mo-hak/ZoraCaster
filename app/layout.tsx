// In app/layout.tsx

import type { Metadata } from 'next';
import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

// --- START: Farcaster Embed Metadata ---
// This object defines how your app will look when its URL is shared in a cast.
const embedMetadata = {
  version: "1",
  // IMPORTANT: Replace this with a real image URL after deployment
  imageUrl: "https://your-app-url.com/frame-image.png", 
  button: {
    title: "Launch Swap App",
    action: {
      type: "launch_frame", // This action opens the Mini App
      name: "0x Swap App",
      // IMPORTANT: Replace this with your deployed app's URL
      url: "https://your-app-url.com", 
    }
  }
};

// This Next.js function generates the meta tags for your app's <head>.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "0x Swap Mini App",
    description: "A Farcaster Mini App for swapping tokens using the 0x Protocol.",
    other: {
      // The fc:miniapp tag makes your URL render as an embed.
      "fc:miniapp": JSON.stringify(embedMetadata),
      // fc:frame is included for backward compatibility with older clients.
      "fc:frame": JSON.stringify(embedMetadata)
    },
  };
}
// --- END: Farcaster Embed Metadata ---


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;