function Logo() {
  const src = '/public/logo-medium.svg';

  return (
    <div className="text-center">
      <img className="w-{200} h-10" src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
