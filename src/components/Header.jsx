import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header
      className="bg-gray-800 flex justify-center 
      items-center p-[1.25rem] gap-2 font-bold"
    >
      <img src={igniteLogo} alt="Ignite Logo" className="h-[2rem]" />
      <p>Ignite Feed</p>
    </header>
  );
}
