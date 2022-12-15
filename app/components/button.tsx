type Props = {
  children: React.ReactNode;
  href: string;
};

const Button = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="
        block md:inline-block md:w-[170px]
        mb-5 p-4 md:py-2.5 md:px-3 md:mx-2.5
        text-[18px] bg-stone rounded-lg
        hover:bg-orange hover:text-white
        transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Button;
