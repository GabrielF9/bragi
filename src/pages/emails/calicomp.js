import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from 'mjml-react';

export default function Calicomp({ children }) {
  return (
    <Mjml>
      <MjmlBody backgroundColor="#2E2252">
        <MjmlSection backgroundColor="#FFFFFF" padding="0">
          <MjmlColumn>
            <MjmlImage
              src="https://i.imgur.com/ZsTfy5M.png"
              width="200px"
              height="66.78px"
              alt="Calicomp logo"
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection backgroundColor="#FFFFFF">
          <MjmlColumn>
            <MjmlText
              align="center"
              fontStyle="italic"
              fontWeight={300}
              fontSize="16px"
            >
              The election is coming
            </MjmlText>
            <MjmlText align="center" fontWeight={700} fontSize="20px">
              Eleições para a diretoria do CALICOMP
              <br />e representantes discentes
            </MjmlText>
            <MjmlImage
              src="https://media3.giphy.com/media/24akSucLOFwwoZamdr/giphy.gif?cid=ecf05e477eoxy9qvd2rou17b5v4ynstorxleg8ybucv6oiby&rid=giphy.gif&ct=g"
              alt="gif it's very important"
            />
            <MjmlText fontSize="16px" padding="40px" paddingBottom="32px">
              Boa tarde pessoas maravilhosas, como estão?
              <br />
              <br />
              Está oficialmente aberto o período de inscrição para as chapas
              concorrentes a eleição do CALICOMP 2022.
              <br />
              <br />
              Para quem não sabe, o CALICOMP é o centro acadêmico dos cursos de
              graduação do Departamento de Computação - Ciência da Computação,
              Engenharia de Computação e Sistemas de Informação - e o seu
              principal objetivo é representar os discentes do Departamento nas
              reuniões de Colegiado e Conselho departamental.
              <br />
              <br />
              Outras atividades que o centro realiza ou pode realizar, são
              eventos, palestras, oficinas, auxílio para discentes, entre
              outras.
              <br />
              <br />
              Dito isso, o período de inscrição para as chapas concorrentes ao
              CALICOMP vai de hoje, 11/07/2022 até às 23:59h da próxima
              terça-feira, dia 19/07/2022.
              <br />
              <br />
              Para maiores informações, acesse o edital da eleição disponível no
              anexo deste e-mail.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection backgroundColor="#FFFFFF" padding="0 40px">
          <MjmlColumn>
            <MjmlText align="center">
              Em caso de dúvidas, ou só querendo bater um papo, entre em contato
              por um de nossos canais de comunicação:
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection backgroundColor="#fff" padding="0 40px 32px">
          <MjmlColumn>
            <MjmlText></MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="https://i.imgur.com/etb8PAO.png"
              alt="Instagram"
              href="https://www.instagram.com/calicomp.ufs/"
              width="24px"
              height="24px"
            />
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="https://i.imgur.com/T04AheT.png"
              alt="Telegram"
              href="https://t.me/gabrielf_dev"
              width="24px"
              height="24px"
            />
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage
              src="https://i.imgur.com/q5w1MsN.png"
              alt="Whatsapp"
              href="https://wa.me/5579988273334"
              width="24px"
              height="24px"
            />
          </MjmlColumn>
          <MjmlColumn>
            <MjmlText></MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
