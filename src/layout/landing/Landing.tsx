import Head from 'next/head';
import Footer from '../../components/navigation/footer/Footer';
import Header from '../../components/navigation/header/Header';

export interface ILandingLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const LandingLayout: React.FC<ILandingLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Maison Marketplace</title>
      </Head>
      <div {...divProps} className={`wrapper ${justify}`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
