import { Botao } from "./components/Botao";

interface Props {
  setLetraAtual(letraAtual: string): void;
  palavra: string[];
  setVidas: React.Dispatch<React.SetStateAction<number>>;
  acertou: boolean;
  disable: boolean;
}

export function Teclado({ setLetraAtual, palavra, setVidas, acertou, disable = false }: Props) {
  const linhas = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div>
      {linhas.map((item, index) => (
        <div className="d-flex justify-content-center" key={index}>
          {item.map((item2, index2) => (
            <Botao
              setVidas={setVidas}
              palavra={palavra}
              key={index2}
              setLetraAtual={setLetraAtual}
              letra={item2}
              acertou={acertou}
              disable={disable}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
