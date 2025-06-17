import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dontstopbelizen.com"),
  title: {
    template: "%s | Don't Stop Belizen",
    default: "Don't Stop Belizen - Experience San Pedro, Belize",
  },
  description: "Discover the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize. From snorkeling in the Blue Hole to beachside dining, experience paradise through local eyes.",
  keywords: ["San Pedro Belize", "vacation rental", "travel guide", "Caribbean", "adventure", "The Lovejoy"],
  authors: [{ name: "Don't Stop Belizen" }],
  creator: "Don't Stop Belizen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dontstopbelizen.com",
    siteName: "Don't Stop Belizen",
    title: "Don't Stop Belizen - Experience San Pedro, Belize",
    description: "Discover the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Don't Stop Belizen - San Pedro Belize Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don't Stop Belizen - Experience San Pedro, Belize",
    description: "Discover the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize.",
    creator: "@dontstopbelizen",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`} suppressHydrationWarning>
      <head>
        <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              setTimeout(function() {
                // Override the main widget dimensions
                const mainWrapper = document.querySelector('.commonninja_component .feed-wrapper');
                if (mainWrapper) {
                  mainWrapper.style.cssText += 'width: 100% !important; height: auto !important; max-width: none !important;';
                }
                
                // Style individual feed items
                const feedItems = document.querySelectorAll('.commonninja_component .feed-content-item');
                feedItems.forEach(function(item) {
                  item.style.cssText += 'background: rgba(255, 255, 255, 0.8) !important; backdrop-filter: blur(12px) !important; border-radius: 1rem !important; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important; margin: 0 !important; padding: 1.5rem !important;';
                });
                
                // Override column widths
                const feedColumns = document.querySelectorAll('.commonninja_component .feed-content-column');
                feedColumns.forEach(function(column) {
                  column.style.cssText += 'width: 100% !important; margin: 0 !important; padding: 0 !important;';
                });
                
                // Make the layout responsive
                const feedWrapper = document.querySelector('.commonninja_component .feed-content-wrapper.flow-layout');
                if (feedWrapper) {
                  feedWrapper.style.cssText += 'display: grid !important; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important; gap: 2rem !important; padding: 0 !important; margin: 0 !important;';
                }
                
                // Force width on any element with fixed width
                const fixedWidthElements = document.querySelectorAll('.rss-feed-custom-wrapper [style*="width:"], .rss-feed-custom-wrapper [style*="height:"]');
                fixedWidthElements.forEach(function(element) {
                  if (element.style.width) element.style.width = '100%';
                  if (element.style.height && element.style.height === '600px') element.style.height = 'auto';
                });
              }, 1000);
              
              // Run again after 3 seconds in case the widget loads slowly
              setTimeout(function() {
                const feedWrapper = document.querySelector('.commonninja_component .feed-content-wrapper.flow-layout');
                if (feedWrapper) {
                  feedWrapper.style.cssText += 'display: grid !important; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important; gap: 2rem !important;';
                }
              }, 3000);
            });
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
