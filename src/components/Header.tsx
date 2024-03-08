export default function Header() {
  return (
    <header>
      <HeaderBgImage />
      <H1Tag />
    </header>
  );
}

function H1Tag() {
  return (
    <h1 className="text-3xl font-bold underline">
      Word <span>Analytics</span>
    </h1>
  );
}

function HeaderBgImage() {
  return <div>image</div>;
}
