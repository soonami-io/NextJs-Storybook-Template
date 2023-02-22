export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={`w-full ${className}`}>
      <p>MaisonDAO</p>
    </footer>
  );
};

export default Footer;
