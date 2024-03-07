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
    <h1 className="text-4xl tracking-[5px] uppercase mt-[75px] text-center text-[#ffffffeb] sm:text-[65px] sm:leading-tight">
      Word <span className="font-light">Analytics</span>
    </h1>
  );
}

const bgImage = {
  backgroundImage: `linear-gradient(to right, rgba(101, 0, 163, 0.9), rgba(24, 120, 175, 0.9)), url("https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=100")`,
};

function HeaderBgImage() {
  return (
    <div
      style={bgImage}
      className="absolute top-0 left-0 -z-[1] w-full h-[254px]"
    />
  );
}
