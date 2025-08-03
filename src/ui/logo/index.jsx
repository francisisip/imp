export default function Logo({ subTitle, white }) {
  const logoHeight = 60;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/images/logo/logo2.svg"
        alt="Logo"
        style={{
          height: `${logoHeight}px`,
          objectFit: 'contain',
          marginRight: '0.75rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontSize: `20px`, 
            lineHeight: 1,
            margin: 0,
            color: white ? 'white' : '#1F2937',
          }}
        >
          Cityzen
        </h1>
        <em
          className="text-gray-500"
          style={{
            marginTop: `${logoHeight*.100}px`,
            marginTop: '4px',
          }}
        >
          {subTitle}
        </em>
      </div>
    </div>
  );
}
