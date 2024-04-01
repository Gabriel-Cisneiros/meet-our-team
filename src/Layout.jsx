import { Breadcrumb, Layout, Menu, theme, Avatar, Row, Col } from 'antd';
import { MdOutlineImage } from "react-icons/md";
import CardComp from './Card';
import profile0 from './assets/images/profile0.jpg';
import profile1 from './assets/images/profile1.jpg';
import profile2 from './assets/images/profile2.jpg';
import profile3 from './assets/images/profile3.jpg';
import profile4 from './assets/images/profile4.jpg';

const { Header, Content, Footer } = Layout;

const items = new Array(1).fill(null).map((_, index) => ({
    key: index + 1,
    label: index === 0 ? 'Equipe' : `nav ${index + 1}`,
  }));

const LayoutComp = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Avatar size="large" icon={<MdOutlineImage />} />
      </Header>
      <Row>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 500,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
          <Row gutter={26}>
            <Col>
              <CardComp 
                imagem={profile0}
                title="Lucas Matias"
                description="Estudante de Bacharelado em Ciência da Computação na UFPRE, com experiência no desenvolvimento de aplicações web usando CSS, HTML, JavaScript e o framework Tailwind CSS. Ele também é proficiente em Python, Java e C. Em constante evolução suas habilidades e busca por novos desafios."
              />
            </Col>
            <Col>
              <CardComp
                imagem={profile1}
                title="Jeane Vitória"
                description="Estudante de Bacharelado em Ciência da Computação na UFRPE. Com experiência em Java, C e HTML, ela está constantemente em busca de desafios para aprimorar suas habilidades. Seus interesses abrangem áreas como segurança da informação, desenvolvimento de aplicativos móveis e inteligência artificial."
              />
            </Col>
            <Col>
              <CardComp 
                imagem={profile2}
                title="Camila Almeida"
                description="Estudante do quarto período de Ciência da Computação na UFRPE, possui conhecimentos em C, Java e está atualmente estudando JavaScript. Tem preferência pelo desenvolvimento backend, mas em termos de tecnologias em geral, mostra interesse especial pela área de hardware, especialmente em robótica."
              />
            </Col>
            <Col>
              <CardComp 
                imagem={profile3}
                title="Gabriel Cisneiros"
                description="Estudante de Ciência da Computação no 4º período, especializado em desenvolvimento front-end. Com experiência em React.js, Node.js, JavaScript, Java, Python e C, ele é um desenvolvedor versátil. Demonstrando interesse em segurança de dados e blockchain, buscando sempre novos caminhos e inovações."
              />
            </Col>
          </Row>
          <Row>
            <Col>
            <CardComp 
                imagem={profile4}
                title="Brenno Araújo"
                description="Estudante de Ciência da Computação no quarto período da UFRPE. Ele tem conhecimento em linguagens de programação como Python, Java, C e C++. Suas áreas de interesse incluem Programação Orientada a Objetos, Análise de Dados e Segurança da Informação."
            />
            </Col>
          </Row>
          </div>
        </Content>
      </Row>
      <Footer style={{ textAlign: 'center' }}>
        Nome da empresa ©{new Date().getFullYear()} Created by Nome da Empresa
      </Footer>
    </Layout>
  );
};

export default LayoutComp;