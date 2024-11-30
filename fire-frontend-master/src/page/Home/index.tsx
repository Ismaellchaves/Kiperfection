import { ArrowRight } from "phosphor-react";
import { useEffect } from "react";
import aos from "aos";

import Background from "@/source/background-home.png";
import Thumbnail from "@/source/thumbnail-home.png";
import Agron from "@/source/Agron.png";
import ISTEC from "@/source/ISTEC.png";
import DEVXPRESS from "@/source/DEVXPRESS.png";
import TrihexStudios from "@/source/TrihexStudios.png";
import IK from "@/source/IK.png";
import Acaivita from "@/source/Acaivita.png";
import perfumaria from "@/source/perfumaria.png";

import { Platform } from "@/components/Platform";
import { Static } from "@/components/Static";

export const Home = () => {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  // Dados para cada instância de Platform
  const platformData = [
    {
      title: "Sobre a Kiperfection",
      description:
        "Na Kiperfection, nós capturamos a essência de cada instante, criando imagens e vídeos que não são apenas registros, mas verdadeiras obras de arte. Nossa missão é proporcionar uma experiência única e criativa para todos os nossos clientes, combinando tecnologia de ponta com a paixão por cada detalhe.",
    },
    {
      title: "Nossos Serviços",
      description:
        "A KIPERFECTION oferece soluções completas em artes visuais e produção audiovisual, incluindo design gráfico personalizado, fotografia profissional com edição de alta qualidade e filmagens aéreas com drones de última geração. Também realizamos animações, design 3D e vídeos institucionais, sempre com foco em criatividade, excelência e resultados que superam as expectativas de nossos clientes.",
    },
    {
      title: "Nosso Compromisso",
      description:
        "Nosso compromisso é entregar serviços de alta qualidade, com atenção aos detalhes e inovação constante. Trabalhamos para garantir que cada projeto seja realizado de forma criativa e profissional, superando as expectativas de nossos clientes.",
    },
    {
      title: "Nossa Visão",
      description:
        "Acreditamos que cada imagem tem o poder de contar uma história única. A Kiperfection visa transformar seus projetos em narrativas visuais inesquecíveis, seja para empresas ou para momentos pessoais.",
    },
    {
      title: "Tecnologia de Ponta",
      description: "Usamos as melhores tecnologias para garantir a entrega de um trabalho impecável.",
    },
    {
      title: "Equipe Qualificada",
      description: "Contamos com uma equipe altamente qualificada, pronta para atender às suas necessidades.",
    },
  ];

  // Dados para cada instância de Static
  const staticData = [
    {
      title: "Milhões de requests por hora em nosso serviço.",
      value: "1",
      valueFormat: "mil",
    },
    {
      title: "Milhares de empresas utilizando nosso serviço.",
      value: "1",
      valueFormat: "mil",
    },
    {
      title: "Milhões de pessoas impactadas pelo nosso serviço.",
      value: "1",
      valueFormat: "M",
    },
  ];

  return (
    <main>
      {/* Seção de Background */}
      <img
        src={Background}
        className="absolute object-cover object-top w-full -z-10 block h-[950px]"
        alt="Background de orbita"
      />

      {/* Seção de Introdução */}
      <section className="flex items-center h-full flex-col">
        <div className="max-w-[863px] text-center mt-48">
          <span className="text-green-700 font-medium text-xl">👋 Seja Bem-vindo</span>
          <h1 className="text-center text-6xl font-extrabold leading-[77px] m-auto mt-4">
            Acelere o desenvolvimento de seu negócio com a KIPERFECTION
          </h1>
          <p className="text-gray-600 text-lg max-w-[644px] text-center m-auto mt-7">
            Você poderá escalar seu projeto com APIs de alto nível, aumentando sua qualidade e
            velocidade.
          </p>
        </div>
        <button
        onClick={() => window.location.href = 'https://wa.me/5588993799572'}
        className="flex items-center bg-purple-600 font-bold text-base py-3 px-4 rounded-lg mt-24 hover:bg-purple-700 transition-colors">
        ENTRE EM CONTATO !
        <span className="bg-purple-700 p-2 rounded-lg ml-6">
        <ArrowRight size={24} />
  </span>
</button>

        <img
          src={Thumbnail}
          className="m-auto mt-16"
          alt="Vídeo de explicação"
        />
      </section>

      {/* Seção: Por que escolher a Kiperfection? */}
      <section className="bg-black-700">
        <div className="h-16 w-[2px] bg-gradient-to-b from-purple-600 m-auto mt-16" />
        <h2
          className="font-extrabold text-4xl max-w-[364px] mt-16 m-auto text-center"
          data-aos="fade-right"
        >
          Por que escolher a KIPERFECTION?
        </h2>

        {/* Renderizando os componentes Platform com dados dinâmicos */}
        <section className="flex flex-wrap max-w-[856px] m-auto justify-between gap-16 mt-28 pb-28">
          {platformData.map((item, index) => (
            <Platform
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>

        {/* Seção de Estatísticas */}
        <section className="bg-black-800 border-b border-t border-gray-900">
          <div className="max-w-[856px] m-auto">
            <h2
              data-aos="fade-right"
              className="max-w-[590px] font-extrabold text-4xl mt-28"
            >
              Impulsionamos milhares de empresas
            </h2>

            <section className="flex flex-wrap justify-between my-36">
              {staticData.map((item, index) => (
                <Static
                  key={index}
                  title={item.title}
                  value={item.value}
                  valueFormat={item.valueFormat}
                  data-aos-delay={index * 200} // Adicionando delay na animação
                />
              ))}
            </section>
          </div>
        </section>
      </section>

      {/* Seção: Empresas que confiam na Kiperfection */}
      <section>
        <h2
          className="font-extrabold text-4xl max-w-[364px] mt-28 m-auto text-center"
          data-aos="fade-right"
        >
          Empresas que confiam na Kiperfection
        </h2>
        <p
          className="text-gray-700 max-w-[664px] text-center m-auto mt-7"
          data-aos="fade-right"
        >
          Empresas que confiam em nosso trabalho, utilizando nossa velocidade e escalabilidade.
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 my-16 mx-auto max-w-[800px]"
        >
          <img
            src={ISTEC}
            alt="Logo ISTEC"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
          />
          <img
            src={Agron}
            alt="Logo Agron"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img
            src={DEVXPRESS}
            alt="Logo DEVXPRESS"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            src={TrihexStudios}
            alt="Logo TrihexStudios"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          />
          <img
            src={IK}
            alt="Logo IK"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="800"
          />
          <img
            src={Acaivita}
            alt="Logo Acaivita"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="1000"
          />
          <img
            src={perfumaria}
            alt="Logo Perfumaria"
            className="w-28 h-auto hover:scale-105 transition-transform duration-300 mx-auto"
            data-aos="fade-up"
            data-aos-delay="1200"
          />
        </div>
      </section>
    </main>
  );
};
 