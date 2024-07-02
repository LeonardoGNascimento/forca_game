import React, { useEffect, useState } from "react";
import { Container } from "./style";

interface Props {
  letra: string;
  letraAtual: string;
  setLetrasAcertadas: React.Dispatch<React.SetStateAction<number>>;
  acertou: boolean;
}

export function Letra({ letra, letraAtual, setLetrasAcertadas, acertou }: Props) {
  const [mostrar, setMostrar] = useState<boolean>(false);

  useEffect(() => {
    if (acertou) {
      setMostrar(false);
    }
  }, [acertou]);

  useEffect(() => {
    if (letraAtual === letra) {
      setMostrar(true);
      setLetrasAcertadas((atual) => atual + 1);
    }
  }, [letraAtual]);

  return <Container>{mostrar ? letra : "_"}</Container>;
}
