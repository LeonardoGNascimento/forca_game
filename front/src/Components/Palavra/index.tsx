import { useEffect, useState } from "react";
import { Letra } from "../Letra";

interface Props {
  letraAtual: string;
  palavra: string[];
  callBackAcerto(): void;
  acertou: boolean;
}

export function Palavra({ letraAtual, palavra, callBackAcerto, acertou }: Props) {
  const [letrasAcertadas, setLetrasAcertadas] = useState(0);
  const [quantidadeLetras, setQuantidadeLetras] = useState(0);

  useEffect(() => {
    const quantidadeEspaco = palavra.join().match(/ /g) || [];
    setQuantidadeLetras(palavra.length - quantidadeEspaco.length);
  }, [palavra]);

  useEffect(() => {
    if (letrasAcertadas > 0 && quantidadeLetras > 0) {
      if (letrasAcertadas === quantidadeLetras) {
        callBackAcerto();
      }
    }
  }, [letrasAcertadas]);

  useEffect(() => {
    setLetrasAcertadas(0);
  }, [acertou]);

  return (
    <div className="mb-5 flex justify-center">
      {palavra.map((item, index) => {
        if (item === " ") {
          return <div className="mr-3"></div>;
        }

        return <Letra letra={item} key={index} letraAtual={letraAtual} setLetrasAcertadas={setLetrasAcertadas} acertou={acertou} />;
      })}
    </div>
  );
}
