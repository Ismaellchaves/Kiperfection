https://github.com/Felipeex/fire-frontend?tab=readme-ov-file


Para a sua landing page da Kiperfection, uma empresa de artes visuais que oferece serviços de edições, fotografias, filmagens aéreas, entre outros, é importante comunicar de forma clara e impactante o propósito e os benefícios do seu trabalho. Aqui estão algumas frases para seu plano de negócios que podem ser usadas na página:

---

### **Sobre a Kiperfection**

**Transformando momentos em arte visual**  
Na Kiperfection, nós capturamos a essência de cada instante, criando imagens e vídeos que não são apenas registros, mas verdadeiras obras de arte. Nossa missão é proporcionar uma experiência única e criativa para todos os nossos clientes, combinando tecnologia de ponta com a paixão por cada detalhe.

### **Nossos Serviços**

**Edição Profissional de Imagens e Vídeos**  
Nossos especialistas em edição transformam suas fotos e vídeos em algo espetacular, ajustando cores, iluminação e efeitos para criar resultados deslumbrantes e personalizados, que atendem às suas necessidades.

**Fotografia de Alta Qualidade**  
Seja para eventos, produtos ou momentos especiais, capturamos a essência de cada cenário com precisão e estilo. Cada foto conta uma história e revela a beleza única de cada ocasião.

**Filmagens Aéreas**  
Com drones de última geração, oferecemos uma perspectiva inédita e cinematográfica para seus projetos, elevando a qualidade e o impacto visual de qualquer produção.

### **Nossa Visão**

**Criar imagens que inspiram e marcam a memória**  
Acreditamos que cada imagem tem o poder de contar uma história única. A Kiperfection visa transformar seus projetos em narrativas visuais inesquecíveis, seja para empresas ou para momentos pessoais.

### **Nosso Compromisso**

**Qualidade e inovação a cada projeto**  
Nosso compromisso é entregar serviços de alta qualidade, com atenção aos detalhes e inovação constante. Trabalhamos para garantir que cada projeto seja realizado de forma criativa e profissional, superando as expectativas de nossos clientes.

### **Por que Escolher a Kiperfection?**

- **Equipe especializada:** Profissionais apaixonados por arte visual.
- **Tecnologia de ponta:** Equipamentos de última geração para resultados impressionantes.
- **Personalização:** Cada projeto é único, e nos dedicamos a entender e atender às suas necessidades específicas.
- **Compromisso com a excelência:** A qualidade é a nossa prioridade em todas as etapas do processo.

### **Fale Conosco**

Pronto para transformar suas ideias em imagens deslumbrantes? Entre em contato com a Kiperfection e descubra como podemos tornar sua visão uma realidade. Vamos juntos criar algo inesquecível.

---

Essas frases são projetadas para atrair a atenção de potenciais clientes, destacando a missão, visão e serviços da sua empresa de uma maneira clara e cativante.




























Parece que você está criando um componente `Platform` que exibe uma imagem, um título e um parágrafo com descrição sobre a "Kiperfection". Se o que você deseja é usar esse componente de forma dinâmica para gerar vários itens com dados diferentes (como no código anterior), vou te ajudar com algumas sugestões.

Aqui está uma maneira de deixar o componente `Platform` dinâmico para que você possa reutilizá-lo e passá-lo como prop. Vamos modificar seu código para receber as informações dinamicamente através de props.

### Atualizando o Componente `Platform`

Você pode fazer com que o componente `Platform` receba `title` (título), `description` (descrição) e a imagem como props, para que o componente possa ser reutilizado para diferentes conteúdos.

```tsx
import Cert from "@/source/cert-icon.svg";

// Atualize o componente para receber props dinâmicas
export const Platform = ({ title, description, image, ...rest }) => {
  return (
    <div
      className="flex flex-col gap-4 items-start"
      {...rest}
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <img src={image || Cert} alt={title} /> {/* Imagem dinâmica */}
      <span className="font-bold text-3xl">{title}</span> {/* Título dinâmico */}
      <p className="text-gray-700 max-w-[380px]">{description}</p> {/* Descrição dinâmica */}
    </div>
  );
};
```

### Usando o Componente `Platform` com Dados Dinâmicos

Agora que o componente está pronto para receber dados dinâmicos, você pode usar ele em sua página ou aplicação. Para isso, você pode passar as informações como props para cada instância do componente.

Exemplo de como usá-lo no seu código:

```tsx
import { Platform } from "@/components/Platform";

export const Home = () => {
  // Dados que você quer passar para cada instância do componente Platform
  const platformData = [
    {
      title: "SOBRE A KIPERFECTION",
      description:
        "Transformando momentos em arte visual. Na Kiperfection, nós capturamos a essência de cada instante, criando imagens e vídeos que não são apenas registros, mas verdadeiras obras de arte. Nossa missão é proporcionar uma experiência única e criativa para todos os nossos clientes, combinando tecnologia de ponta com a paixão por cada detalhe.",
      image: "/path/to/image.jpg", // Exemplo de imagem dinâmica, pode ser um link ou arquivo estático
    },
    {
      title: "NOSSOS SERVIÇOS",
      description:
        "Oferecemos uma ampla gama de serviços de criação visual, desde fotografias exclusivas até vídeos personalizados. Trabalhamos com a mais alta qualidade e entregamos sempre o melhor para nossos clientes.",
      image: "/path/to/another-image.jpg", // Outro exemplo de imagem
    },
    // Adicione quantos objetos quiser
  ];

  return (
    <main>
      <section>
        <h2 className="font-extrabold text-4xl text-center mt-16">
          Por que escolher a Kiperfection?
        </h2>

        <div className="flex flex-wrap justify-between gap-16 mt-28">
          {platformData.map((item, index) => (
            <Platform
              key={index}
              title={item.title}
              description={item.description}
              image={item.image} // Passando os dados para o componente Platform
            />
          ))}
        </div>
      </section>
    </main>
  );
};
```

### O que foi feito?

1. **Modificação do Componente `Platform`:** Agora ele recebe props para o título, descrição e imagem, tornando-o reutilizável. O valor da imagem é dinâmico (`image || Cert`), ou seja, se você não passar uma imagem, ele usará a imagem `Cert` por padrão.
   
2. **Criação de um array `platformData`:** Esse array contém os dados que serão passados para cada instância do componente `Platform`. Você pode adicionar quantos objetos forem necessários para renderizar múltiplos componentes dinamicamente.

3. **Mapeamento e Renderização Dinâmica:** Dentro da renderização da página, usei o método `.map()` para iterar sobre o array `platformData` e renderizar uma instância do `Platform` para cada item.

Agora, quando você rodar esse código, o componente `Platform` será exibido para cada item no array `platformData`, com o título, descrição e imagem passados dinamicamente. Isso garante que você não precisa repetir o código para cada "plataforma".