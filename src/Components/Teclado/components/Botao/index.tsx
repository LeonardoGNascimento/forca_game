import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Props {
  setLetraAtual(letraAtual: string): void;
  letra: string;
  palavra: string[];
  setVidas: React.Dispatch<React.SetStateAction<number>>;
  acertou: boolean;
  disable?: boolean;
}

export function Botao({ setLetraAtual, letra, palavra, setVidas, acertou, disable = false }: Props) {
  const [letraExiste, setLetraExiste] = useState(true);
  const [click, setClick] = useState(false);

  const audio = new Audio("../../../../public/click.mp3");
  const audioErro = new Audio("../../../../public/error.mp3");

  const start = (audio: HTMLAudioElement) => {
    audio.play();
  };

  useEffect(() => {
    if (acertou) {
      setClick(false);
    }
  }, [acertou]);

  useEffect(() => {
    setLetraExiste(palavra.includes(letra));
  }, [palavra]);

  return (
    <Button
      className="mb-1"
      disabled={click || disable}
      onClick={() => {
        setLetraAtual(letra);
        setClick(true);

        if (!letraExiste) {
          setVidas((vidaAtual) => vidaAtual - 1);
          start(audioErro);
          return;
        }

        start(audio);
      }}
    >
      {letra}
    </Button>
  );
}
