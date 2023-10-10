import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Tire Service App</h1>
      <div>Customer tire sets</div>
      <div className="tire-sets">
        <table>
          <thead>
            <th>Customer name</th>
            <th>Registration</th>
            <th>Tires in set</th>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>ABC-123</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>DEF-456</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
