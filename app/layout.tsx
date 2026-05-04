import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SM Mehedi Hasan - Personal Portfolio",
  description: "Portfolio of SM Mehedi Hasan, a distinguished technology entrepreneur, strategic leader, and community mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-dark text-white bg-grid-pattern relative">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.03] pointer-events-none z-0"></div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                  }
                });
              }, observerOptions);

              // Initial observe
              document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

              // Observe new elements (for dynamic content)
              const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                      if (node.classList.contains('reveal')) observer.observe(node);
                      node.querySelectorAll('.reveal').forEach(el => observer.observe(el));
                    }
                  });
                });
              });

              mutationObserver.observe(document.body, { childList: true, subtree: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
