import { NavbarMenu } from "./NavbarMenu";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: Props) => (
  <>
    <div
      className={`fixed top-0 bottom-0 right-0 w-[300px] bg-blue z-50 transition-transform duration-300 flex p-5 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <NavbarMenu onClose={onClose} />
    </div>
    {isOpen && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
        onClick={onClose}
      />
    )}
  </>
);
