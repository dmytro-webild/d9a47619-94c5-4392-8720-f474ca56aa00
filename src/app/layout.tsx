import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Shop Access | Votre Idée, Notre Futur E-commerce',
  description: 'Shop Access est la plateforme où vos besoins créent les produits de demain. Participez à des sondages, soumettez des idées et découvrez un catalogue façonné par la communauté.',
  keywords: ["Shop Access, e-commerce participatif, étude de marché, innovation produits, idées consommateurs, sondages communautaires, futur du retail"],
  openGraph: {
    "title": "Shop Access | Votre Idée, Notre Futur E-commerce",
    "description": "Shop Access est la plateforme où vos besoins créent les produits de demain. Participez à des sondages, soumettez des idées et découvrez un catalogue façonné par la communauté.",
    "url": "https://www.shopaccess.com",
    "siteName": "Shop Access",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/light-prisms-colorful-effect_23-2148898180.jpg",
        "alt": "Illustration moderne de communauté, e-commerce, analyse de données et innovation"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Shop Access | Votre Idée, Notre Futur E-commerce",
    "description": "Shop Access est la plateforme où vos besoins créent les produits de demain. Participez à des sondages, soumettez des idées et découvrez un catalogue façonné par la communauté.",
    "images": [
      "http://img.b2bpic.net/free-photo/light-prisms-colorful-effect_23-2148898180.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
