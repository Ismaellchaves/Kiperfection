// Importações necessárias
import { FC } from "react";
import Cert from "@/source/cert-icon.svg"; // Certifique-se de que o caminho está correto

// Definição das props
interface PlatformProps {
  title: string;
  description: string;
  image?: string; // Opcional, já que existe um fallback para Cert
  [key: string]: any; // Para suportar outras props, como 'data-aos'
}

// Componente funcional com tipagem
export const Platform: FC<PlatformProps> = ({ title, description, image, ...rest }) => {
  return (
    <div
      className="flex flex-col gap-4 items-start"
      {...rest}
      data-aos="fade-up"
      data-aos-offset="200"
    >
      {/* Usa a imagem fornecida ou o fallback */}
      <img src={image || Cert} alt={title} /> 

      {/* Renderiza o título */}
      <span className="font-bold text-3xl">{title}</span>

      {/* Renderiza a descrição */}
      <p className="text-gray-700 max-w-[380px]">{description}</p>
    </div>
  );
};
