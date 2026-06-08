"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "Concept",
          id: "concept",
        },
        {
          name: "Sondages & Stats",
          id: "metrics",
        },
        {
          name: "Produits",
          id: "products",
        },
        {
          name: "Témoignages",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Idées",
          id: "submit-idea",
        },
      ]}
      brandName="Shop Access"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "animated-grid",
      }}
      logoText="Shop Access"
      description="Partagez vos besoins, votez pour les prochaines nouveautés et participez à la création du catalogue de demain."
      buttons={[
        {
          text: "Soumettre une idée",
          href: "#submit-idea",
        },
        {
          text: "Découvrir les sondages",
          href: "#metrics",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/light-prisms-colorful-effect_23-2148898180.jpg"
      imageAlt="Illustration moderne de communauté, e-commerce, analyse de données et innovation."
      mediaAnimation="slide-up"
    />
  </div>

  <div id="concept" data-section="concept">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Notre Concept en 4 Étapes Simples"
      description={[
        "**Étape 1 : Exprimez Vos Besoins.** Partagez vos problématiques quotidiennes, vos idées de produits ou les améliorations souhaitées. Votre voix est le point de départ de toute innovation sur Shop Access.",
        "**Étape 2 : Analyse et Sélection par Shop Access.** Nos experts examinent chaque soumission pour identifier les tendances émergentes et les besoins non satisfaits du marché.",
        "**Étape 3 : La Communauté Vote.** Les idées les plus prometteuses sont transformées en sondages. Votez pour celles qui résonnent le plus avec vous et déterminez les prochaines innovations.",
        "**Étape 4 : Les Meilleurs Produits Deviennent Réalité.** Suite aux votes de la communauté, nous sourçons et référençons les produits plébiscités, les rendant disponibles à l'achat sur Shop Access.",
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "12,500+",
          title: "Idées Soumises",
          description: "Votre créativité est notre moteur. Des milliers d'idées originales propulsent notre catalogue.",
          imageSrc: "http://img.b2bpic.net/free-photo/light-bulb-drawn-with-chalk-slate-white-background_23-2147873850.jpg",
          imageAlt: "Icône d'ampoule représentant les idées soumises",
        },
        {
          id: "metric-2",
          value: "50,000+",
          title: "Votes de la Communauté",
          description: "Chaque vote façonne l'avenir. Participez à nos sondages pour les produits que vous voulez vraiment.",
          imageSrc: "http://img.b2bpic.net/free-vector/rean-framework-infographic-concept-slide-presentation-with-vertical-rectangle-arrow-with-line-description-with-4-point-list-with-flat-style_82472-5987.jpg",
          imageAlt: "Icône de graphique représentant les votes de la communauté",
        },
        {
          id: "metric-3",
          value: "85%",
          title: "Taux de Satisfaction",
          description: "Nous mettons un point d'honneur à satisfaire nos utilisateurs avec des produits réellement désirés.",
          imageSrc: "http://img.b2bpic.net/free-photo/feedback-review-good-service-4-star-icon-symbol-concept-yellow-background-3d-illustration_56104-1566.jpg",
          imageAlt: "Icône de visage souriant représentant le taux de satisfaction",
        },
        {
          id: "metric-4",
          value: "30+",
          title: "Produits Lancés",
          description: "De vos idées à nos étagères : des produits concrets nés de la collaboration communautaire.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-hands-holding-open-novel-coffee-cup_53876-23475.jpg",
          imageAlt: "Icône de fusée représentant les produits lancés",
        },
      ]}
      title="Impactons Ensemble l'Avenir du E-commerce"
      description="Shop Access, c'est une communauté dynamique qui donne vie aux produits de demain. Découvrez l'ampleur de notre innovation collective en chiffres."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "prod-1",
          name: "Drone Innovant Pliable - En Étude",
          price: "$499.00",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-photo-drone-flying-lake-taking-pictures-it_627829-8189.jpg",
          imageAlt: "Drone Innovant Pliable",
        },
        {
          id: "prod-2",
          name: "Casque Audio Immersif AI - En Sondage",
          price: "$249.00",
          imageSrc: "http://img.b2bpic.net/free-photo/journalism-headphones-interview_23-2148524067.jpg",
          imageAlt: "Casque Audio Immersif AI",
        },
        {
          id: "prod-3",
          name: "Purificateur d'Air Connecté - Validé",
          price: "$179.00",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-speaker-being-used-indoors_52683-107776.jpg",
          imageAlt: "Purificateur d'Air Connecté",
        },
        {
          id: "prod-4",
          name: "Chargeur Induction Ultra-Rapide - Disponible",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/white-wireless-charger-pad-mobile-phone_53876-97099.jpg",
          imageAlt: "Chargeur Induction Ultra-Rapide",
        },
        {
          id: "prod-5",
          name: "Système de Sécurité Intelligent - Bientôt Disponible",
          price: "$349.00",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-application-tablet-placed-kitchen-desk-empty-house-automation-system-turning-l_482257-2841.jpg",
          imageAlt: "Système de Sécurité Intelligent",
        },
        {
          id: "prod-6",
          name: "Tablette Graphique Pro - Disponible",
          price: "$799.00",
          imageSrc: "http://img.b2bpic.net/free-photo/graphic-tablet-with-pen-illustrators-designers-isolated-white-background_93675-131030.jpg",
          imageAlt: "Tablette Graphique Pro",
        },
      ]}
      title="Votre Boutique, Créée Par Vous"
      description="Découvrez les produits innovants que la communauté Shop Access a plébiscités. Des articles en cours d'étude aux futures pépites, votre prochaine acquisition vous attend ici."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Shop Access a complètement révolutionné ma façon d'acheter. Pouvoir soumettre mes idées et voir la communauté voter pour elles, c'est incroyablement gratifiant. J'ai enfin les produits dont j'ai toujours rêvé !"
      rating={5}
      author="Sophie Dubois, Innovatrice Passionnée"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-work_23-2149097959.jpg",
          alt: "Sophie Dubois",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2843.jpg",
          alt: "Marc Lefevre",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-united-multiethnic-team-posing-office-hall_1262-20246.jpg",
          alt: "Léa Martin",
        },
        {
          src: "http://img.b2bpic.net/free-photo/selfie-happy-beautiful-intercultural-business-friends_1262-20363.jpg",
          alt: "Thomas Garcia",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiley-businessman-close-up_23-2148746290.jpg",
          alt: "Portrait of smiley businessman close-up",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "Comment puis-je proposer une idée de produit ?",
          content: "Rendez-vous sur la section 'Soumettre une Idée', remplissez le formulaire avec votre suggestion détaillée, et notre équipe l'examinera attentivement pour potentiellement la transformer en sondage communautaire.",
        },
        {
          id: "faq-2",
          title: "Comment fonctionnent les sondages de la communauté ?",
          content: "Après validation interne, les idées les plus prometteuses sont soumises à la communauté via des sondages. Chaque membre peut voter une fois, et les idées recevant le plus de soutien progressent vers la phase de commercialisation.",
        },
        {
          id: "faq-3",
          title: "Puis-je suivre l'avancement de mes propositions ?",
          content: "Oui, en créant un compte utilisateur, vous aurez accès à un tableau de bord personnel où vous pourrez suivre le statut de vos idées soumises, voir les résultats des sondages auxquels elles participent, et même suivre vos commandes.",
        },
      ]}
      title="Vos Questions, Nos Réponses"
      description="Explorez notre foire aux questions pour comprendre comment Shop Access vous permet de façonner l'avenir du e-commerce."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="submit-idea" data-section="submit-idea">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Participez"
      title="Soumettez Votre Idée Révolutionnaire"
      description="Vous avez une problématique du quotidien ou une idée de produit qui pourrait changer la donne ? Entrez votre email ci-dessous pour nous envoyer votre suggestion et commencer à façonner l'avenir du e-commerce."
      tagIcon={Sparkles}
      inputPlaceholder="Votre email"
      buttonText="Envoyer ma suggestion"
      termsText="En cliquant sur 'Envoyer ma suggestion', vous confirmez accepter nos conditions générales."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Shop Access"
      columns={[
        {
          title: "Plateforme",
          items: [
            {
              label: "Concept",
              href: "#concept",
            },
            {
              label: "Soumettre une idée",
              href: "#submit-idea",
            },
            {
              label: "Sondages & Stats",
              href: "#metrics",
            },
          ],
        },
        {
          title: "Produits",
          items: [
            {
              label: "Découvrir",
              href: "#products",
            },
            {
              label: "Nouveautés",
              href: "#products",
            },
            {
              label: "À Venir",
              href: "#products",
            },
          ],
        },
        {
          title: "Ressources",
          items: [
            {
              label: "Témoignages",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#submit-idea",
            },
          ],
        },
        {
          title: "Légal",
          items: [
            {
              label: "Mentions Légales",
              href: "#",
            },
            {
              label: "Politique de Confidentialité",
              href: "#",
            },
            {
              label: "CGV",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Shop Access. Tous droits réservés."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
