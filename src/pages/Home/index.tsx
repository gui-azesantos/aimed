import { LandingLayout } from "../../components";
import Hero from "../../components/Hero";

export const Home: React.FC = () => {
  return (
    <LandingLayout>
      <Hero
        title="Transformando Sintomas em Soluções"
        subtitle="Conheça uma nova era na saúde, onde a inteligência artificial redefine diagnósticos e tratamentos com precisão sem precedentes"
        image="https://source.unsplash.com/collection/2302181/800x600"
        ctaText="Teste agora"
        ctaLink="/diagnostico"
      />
    </LandingLayout>
  );
};
