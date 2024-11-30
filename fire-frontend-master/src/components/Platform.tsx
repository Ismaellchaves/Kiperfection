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
