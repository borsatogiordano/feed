import igniteLogo from '../assets/ignite_simbol.png';

export function Header() {
  return (
    <div className="flex items-center justify-center gap-3 bg-stone-800 py-5">
      <img src={igniteLogo} alt="Logo da ignite" className="h-14" />
    </div>
  );
}
