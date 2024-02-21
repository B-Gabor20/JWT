import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [productsData, setProductsData] = useState([]);

  const handleLogin = async (e) => {
  e.preventDefault();
  const response = await fetch('https://jwt.sulla.hu/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      }),
    });

    if (!response.ok) {
      console.error('nemfjok');
      return;
    }
    const { token } = await response.json();

    console.log('JWT token:', token);

    const productsResponse = await fetch('https://jwt.sulla.hu/termekek', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        },
      });

      const productsData = await productsResponse.json();
      setProductsData(productsData);
  };


  return (
    <div className="App">
    <div className='container text-center w-50'>
      <form className='text-center' onSubmit={handleLogin}>
        <p>JWT login</p>
        <div className="mb-3">
          <label className="form-label">User</label>
          <input type="user" className="form-control" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Bejelentkezés</button>
      </form>
    </div>
    <div className="p-4 m-auto text-center content bg-ivory">
        <div className='bt'>
          {productsData.map((product) => (
              <div className="card col-sm-3 d-inline-block ms-4" style={{ borderRadius: '20px', backgroundColor: '#0A2234', color: 'white' }}>
                <div className="card-body">
                  <p>{product.id}</p>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default App;























































/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣾⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣄⠀⠀⠀⣀⣤⠤⡶⠖⠒⠒⠒⠒⠲⠦⣤⣀⠀⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣦⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⡿⠿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡀⠀⢰⣿⢿⣿⠁⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡿⠃⠀⠀⢺⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣄⢸⣿⣾⣿⡀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠟⠀⠀⠀⠀⣸⣇⠀⠀⠀⠀⠀⠀⠀⢤⡀⣀⣠⠴⢻⣿⣿⣿⡿⣇⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⢯⣙⠲⠤⣤⡀⣏⢹⡄⠀⣷⣄⠀⠀⠀⠈⢯⡥⠶⠛⠉⢻⣿⣿⣷⣹⡄⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⢋⣠⡤⢾⠛⠓⠒⢸⡏⠉⢿⡄⢹⡏⠳⣄⡀⠀⠈⢷⡀⠀⠀⢸⣿⣿⢿⣿⣷⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⠿⠚⣿⠃⠀⣿⠀⠀⠀⢸⠀⠀⠀⠹⣦⣷⡀⢠⣽⣷⣦⣄⣻⣄⠀⠀⣿⣿⣿⣻⣿⡆⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⢀⡾⠁⠀⠀⡇⣸⠂⠀⣿⣤⣴⣿⣿⣟⢿⣷⡀⢿⣻⣿⣿⣿⡟⣦⡀⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⠀⣷⣿⡆⠀⣿⣿⢹⢿⣿⣿⡄⠙⠿⠀⠸⣾⣿⣿⡗⢿⣿⣿⣿⣿⠛⠛⠛⣧⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⠀⣸⣿⠀⢷⡀⣿⣟⢂⣿⣿⣿⠇⠀⠀⠀⠀⠉⠛⠛⣿⠀⣿⣭⣾⡿⠀⠀⠀⠸⡆⠘⣧⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠀⣠⠀⠀⢠⣿⠟⠀⠈⢳⣽⣿⡎⠛⠈⠁⠀⠀⠀⢀⣀⠀⠀⣡⣿⣼⡿⠟⠋⠀⠀⠀⠀⠀⢻⡀⢹⣧⠀⠀⢰⡌⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⢠⡏⠀⢠⡟⡿⠀⠀⠀⠀⠹⣿⢿⠦⣤⣀⣀⣈⠛⣛⣁⣴⡞⢻⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠈⣧⠈⣟⢧⡀⠀⣧⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⢀⡟⠀⣠⠏⢸⠇⠀⠀⠀⠀⠀⠘⣿⣆⠀⣴⠟⢻⢉⣯⣽⡋⠀⣻⢿⡇⠀⠈⢿⡀⠀⠀⠀⠀⠀⠸⣆⢹⡌⢳⡀⢻⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠀⠀⣼⠁⣰⠟⠀⡿⠀⠀⠀⠀⠀⠀⠀⠈⠛⢰⠇⢠⣿⣾⣟⢻⣿⣦⡏⠸⣇⠀⠀⠈⣧⡀⠀⠀⠀⠀⠀⢹⡄⢷⠀⠻⣼⡇⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⢠⡇⣰⠏⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⡾⠙⠿⢻⠚⣏⠻⠉⠀⠘⢧⣴⣾⣯⣿⣆⠀⠀⠀⠀⠀⢷⠘⣇⠀⠙⡇⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⠀⠀⣼⣴⠋⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣇⡄⠀⢸⠀⢹⡄⠀⠀⣷⠶⢽⣿⣿⣿⣿⣷⣄⠀⠀⠀⠘⣇⠹⡆⠀⣿⠀⠀⠀⠀⠽⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⡾⠅⣿⡀⠀⠀⣿⠋⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣏⡇⠀⢸⠀⠘⣧⣀⠀⠘⣆⠀⢹⣿⣿⣿⣿⣿⣷⣄⣀⠀⠸⡆⢻⡀⣿⠲⠆⠀⠀⠀⠙⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠏⠙⢲⡏⠁⠀⠐⡟⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡟⡇⠀⢸⠀⠀⢹⡉⣍⠁⠙⣦⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣶⣽⡌⢷⣿⠀⠀⠀⠀⢠⠄⠈⢳⣄⠀⠀⠀⠀
⠀⠀⠀⣰⠏⠀⠀⢸⡇⠀⠀⠀⡇⠀⢰⡏⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⡿⣳⡇⢀⣿⣤⡄⠘⡇⠻⣦⡀⠈⢷⡀⠀⢙⣿⣿⣿⣿⣿⣿⣿⣿⣻⡌⡿⠀⠀⠀⠀⣼⠀⠀⠀⠙⣦⠀⠀⠀
⠀⠀⢰⠏⠁⠀⠀⣸⠅⠀⠀⠀⣷⢀⡟⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⣯⠟⠋⠀⠀⣸⡿⠿⠀⣿⠀⠀⠁⠀⢀⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⢿⣗⣻⡇⣀⣀⠀⠀⡿⣧⠀⠀⠀⠈⢷⡀⠀
⠀⢠⡟⠀⠀⠀⢠⣿⡆⠀⠀⠀⣿⣾⠁⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣾⡋⠀⠀⠀⣰⠏⠀⠀⠀⣿⣄⠀⢀⣴⣿⣿⣿⣿⣿⣿⡿⠋⣿⣯⡷⠿⠾⣿⣿⣿⣿⣿⢸⠇⠘⣧⠀⠀⠀⠈⢧⠀
⠀⡾⠀⠀⠀⢠⡟⠘⣇⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠛⠛⠙⣿⣿⣿⣿⣿⣷⣦⣤⣿⣄⠀⢀⣴⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⢷⡞⠛⠿⠁⠀⢠⡏⣿⣿⣿⣯⡿⠀⠀⠸⡆⠀⠀⠀⠸⡇
⢸⠇⠀⠀⠀⡾⠁⠀⢻⡄⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢯⡥⠖⠛⠋⠀⠀⠀⢀⡟⠀⠀⠈⠉⣼⠃⠀⠀⠀⢿⠀⠀⠀⠀⡇
⣿⠀⠀⠀⢸⡇⠀⠀⠈⢷⡀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿⣟⠿⣿⡛⠻⠿⢿⣿⢛⠛⠛⠛⣤⣤⡤⠾⠃⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⢀⡼⠙⡇⠀⠀⠀⢸⠀⠀⠀⠀⡇
⣧⠀⠀⠀⢸⠀⠀⠀⠀⠈⣻⣄⠀⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⠏⠛⠓⠒⠶⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⢠⡞⠁⠀⣿⠀⠀⠀⢸⠀⠀⠀⠀⡇
⢹⡀⠀⠀⢸⡀⠀⠀⠀⠀⣿⠈⠳⣄⠀⠈⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⣰⠏⠀⠀⠀⢸⠀⠀⠀⣼⠀⠀⠀⢸⠇
⠈⣧⠀⠀⠘⣇⠀⠀⠀⠀⢻⠀⠀⠘⣧⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡯⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⣼⠁⠀⢀⣼⠃⠀⠀⠀⠀⣼⠀⠀⢀⡟⠀⠀⢀⡟⠀
⠀⠘⣧⠀⠀⠹⣆⠀⠀⠀⠸⡆⠀⠀⠘⣇⢸⡇⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢰⡇⠀⢠⡞⠁⠀⠀⠀⠀⠀⣿⠀⠀⣼⠁⠀⠀⡾⠁⠀
⠀⠀⠈⢳⣄⠀⠹⣆⠀⠀⠀⢷⠀⠀⠀⢻⢸⡇⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢸⠇⢰⠏⠀⠀⠀⠀⠀⠀⢰⠇⢀⣼⠃⠀⣠⡾⠁⠀⠀
⠀⠀⠀⠀⠙⠷⣄⠈⠳⣄⡀⠘⣇⠀⠀⢸⣸⠃⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢸⠀⡟⠀⠀⠀⠀⠀⠀⢠⣟⣴⠏⠀⣠⡶⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠙⠶⣬⣙⣦⣜⣷⡀⢸⡟⠀⠀⠀⣼⡿⠯⣿⣻⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⢸⡄⡇⠀⠀⠀⠀⠀⣰⡿⠛⣁⡴⠞⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠷⠿⢿⡄⠀⠀⠀⠹⣦⡀⠀⠉⣻⣿⣿⡟⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠈⢿⣇⠀⢀⣀⣠⣾⡿⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⢿⣿⣿⠿⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠯⣿⣻⡿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠋⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀




*/