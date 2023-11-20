import Hero from "../../components/Hero";
import LandingLayout from "../../components/LandingLayout";

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
