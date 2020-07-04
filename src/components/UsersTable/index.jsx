import React, { useState, useEffect } from "react";

// MATERIAL COMPONENT
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

// CSS
import "./style.css";

function UsersTable(props) {
  const { title } = props;
  const { users } = props;
  const { interactions } = props;
  const { redraw } = props;

  const [selected, setSelected] = props.select;
  // const [accesses, setAccesses] = useState([]);
  const [table, setTable] = useState(users);

  const selectRow = (user_id) => {
    if (selected.includes(user_id)) {
      setSelected((old) => old.filter((selected) => selected !== user_id));
    } else setSelected((old) => [...old, user_id]);
  };

  const getAccesses = async () => {
    const res = await window.ipcRenderer.invoke("usuario_interacao", {
      method: "index",
      content: "",
    });
    // console.groupCollapsed("Buscar Acessos");
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd("Buscar Acessos");
    // setAccesses(res);
    return res;
  };

  const getFrequencia = (freqStr) => {
    let num = 0;
    switch (freqStr) {
      case "rara":
        num = 5;
        break;
      case "incomum":
        num = 2;
        break;
      case "comum":
        num = 1;
        break;
    }
    return num;
  };

  const multiplyArray = (multiplier, arr) => {
    let res = [];
    arr.forEach((element) => {
      res.push(Number((element * multiplier).toFixed(1)));
    });
    return res;
  };

  const PTA = (qei, qeimin, fr, pb) => {
    console.log(
      `[PTA input] QEI: ${qei} QEImin: ${qeimin} Fr: ${fr} PB: [${pb}]`
    );
    const dif = qei - qeimin;
    if (dif > 0) {
      return multiplyArray(dif, multiplyArray(fr, pb));
    } else {
      return multiplyArray(0, pb);
    }
  };

  const createUpdatedTable = async (usuarios, interacoes) => {
    if (interacoes.length === 0 || usuarios.length === 0) return;
    setTable(users);
    const acessos = await getAccesses();
    // console.warn("usuarios:", usuarios);
    // console.warn("interacoes:", interacoes);
    // console.warn("acessos:", acessos);
    const tabela = usuarios.map((usuario) => {
      // Pego todos os acessos que são relativos à esse usuário
      const acessosDoUsuario = acessos.filter(
        (acesso) => acesso.usuario_id_usuario === usuario.id
      );
      // Pra cada um dos acessos tem que calcular o PTA TODO ignorar repetidos
      let pb = {
        pt_ach: 0,
        pt_dis: 0,
        pt_fre: 0,
        pt_pla: 0,
        pt_phi: 0,
        pt_soc: 0,
      };
      const linha = acessosDoUsuario.map((acessoDoUsuario) => {
        // Pego os dados da interação acessada pelo usuário
        const interacaoAtual = interacoes.find(
          (interacao) => interacao.id === acessoDoUsuario.interacao_id_interacao
        );
        // console.log("interacaoAtual:", interacaoAtual);
        // console.log("acessosDoUsuario:", acessosDoUsuario);
        // Vejo quantas vezes ele acessou a mesma interação
        const repeticoes = acessosDoUsuario.filter(
          (acesso) => acesso.interacao_id_interacao === interacaoAtual.id
        );
        const numeroDeAcessosNaInteracao = repeticoes.length;
        repeticoes.map((rep) => {
          const deleteIndex = acessosDoUsuario.indexOf(rep);
          acessosDoUsuario.splice(deleteIndex, 1);
        });
        const QEImin = interacaoAtual.int_minimas;
        // console.log("Interações mínimas:", QEImin);
        const QEI = numeroDeAcessosNaInteracao;
        // console.log("Número de acessos à interação:", QEI);
        const Fr = getFrequencia(interacaoAtual.frequencia);
        const interacaoPesos = [
          interacaoAtual.peso_ach,
          interacaoAtual.peso_dis,
          interacaoAtual.peso_fre,
          interacaoAtual.peso_pla,
          interacaoAtual.peso_phi,
          interacaoAtual.peso_soc,
        ];
        const groupName = `[Acesso] Usuário[${usuario.id}] Interação[${interacaoAtual.id}]`;
        console.groupCollapsed(groupName);
        const pta = PTA(QEI, QEImin, Fr, interacaoPesos);
        console.log(`[PTA output]: [${pta}]`);
        pb = {
          pt_ach: Number((pb.pt_ach += pta[0]).toFixed(1)),
          pt_dis: Number((pb.pt_dis += pta[1]).toFixed(1)),
          pt_fre: Number((pb.pt_fre += pta[2]).toFixed(1)),
          pt_pla: Number((pb.pt_pla += pta[3]).toFixed(1)),
          pt_phi: Number((pb.pt_phi += pta[4]).toFixed(1)),
          pt_soc: Number((pb.pt_soc += pta[5]).toFixed(1)),
        };
        console.log(`Usuário[${usuario.id}]:`, pb);
        console.groupEnd(groupName);
      });
      return {
        id: usuario.id,
        nome: usuario.nome,
        data_nasc: usuario.data_nasc,
        genero: usuario.genero,
        email: usuario.email,
        pt_ach: Number((usuario.pt_ach + pb.pt_ach).toFixed(1)),
        pt_dis: Number((usuario.pt_dis + pb.pt_dis).toFixed(1)),
        pt_fre: Number((usuario.pt_fre + pb.pt_fre).toFixed(1)),
        pt_pla: Number((usuario.pt_pla + pb.pt_pla).toFixed(1)),
        pt_phi: Number((usuario.pt_phi + pb.pt_phi).toFixed(1)),
        pt_soc: Number((usuario.pt_soc + pb.pt_soc).toFixed(1)),
      };
    });
    console.log("Usuários:", tabela);
    setTable(tabela);
  };

  useEffect(() => {
    createUpdatedTable(users, interactions);
  }, [redraw]);

  return (
    <div id="TableComponent">
      <h1 className="Title">{title}</h1>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Achiever</TableCell>
              <TableCell align="center">Disruptor</TableCell>
              <TableCell align="center">Free Spirit</TableCell>
              <TableCell align="center">Player</TableCell>
              <TableCell align="center">Philantropist</TableCell>
              <TableCell align="center">Socializer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row) => {
              const rowOrdered = [
                row.pt_ach,
                row.pt_dis,
                row.pt_fre,
                row.pt_pla,
                row.pt_phi,
                row.pt_soc,
              ].sort(function (a, b) {
                return a - b;
              });
              const menor = rowOrdered[0];
              const maior = rowOrdered[rowOrdered.length - 1];
              const selectedRow = selected.includes(row.id);
              return (
                <TableRow
                  className={selectedRow ? "selected" : ""}
                  onClick={() => selectRow(row.id)}
                  key={row.id}
                  title={`E-mail: ${row.email}\nNascimento: ${row.data_nasc}\nGênero: ${row.genero}`}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.nome}</TableCell>
                  <TableCell
                    className={
                      row.pt_ach === maior
                        ? "maior"
                        : row.pt_ach === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_ach}
                  </TableCell>
                  <TableCell
                    className={
                      row.pt_dis === maior
                        ? "maior"
                        : row.pt_dis === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_dis}
                  </TableCell>
                  <TableCell
                    className={
                      row.pt_fre === maior
                        ? "maior"
                        : row.pt_fre === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_fre}
                  </TableCell>
                  <TableCell
                    className={
                      row.pt_pla === maior
                        ? "maior"
                        : row.pt_pla === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_pla}
                  </TableCell>
                  <TableCell
                    className={
                      row.pt_phi === maior
                        ? "maior"
                        : row.pt_phi === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_phi}
                  </TableCell>
                  <TableCell
                    className={
                      row.pt_soc === maior
                        ? "maior"
                        : row.pt_soc === menor
                        ? "menor"
                        : ""
                    }
                    align="center"
                  >
                    {row.pt_soc}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UsersTable;
