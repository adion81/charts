// import logo from './logo.svg';
import './App.css';
import BarImage from './Charts/BarImage';
import Bar from './Charts/Bar';
import LineChart from './Charts/LineChart';
import Gauge from './Charts/Gauge';
import {useState} from 'react';
import Relay from './models/relay/relay.model';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [relay] = useState(new Relay());

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-fles ">

      </div>
      <div className="d-flex flex-wrap" style={{backgroundColor: "black"}}>
        <div className="d-flex flex-column align-items-center col-6" >
          <h2 style={{color: 'whitesmoke'}}>Top Users</h2>
          <div className=" d-flex justify-content-around flex-wrap">
            {
                relay.AllRelayUsers.length > 0 ? 
                relay.topUsers(6).map((u,i) => <BarImage 
                                                  type="user"
                                                  data={u} 
                                                  key={i} 
                                                  width={250} 
                                                  height={115}
                                                  title={`${i+1}. ${u.FirstName} ${u.LastName[0]}.`}
                                                />) : null
            }
          </div>

        </div>
        <div className="d-flex col-6 flex-column align-items-center" >
          <h2 style={{color: 'whitesmoke'}}>Top Teams</h2>
          <div className="d-flex justify-content-around flex-wrap">
            {
                relay.AllRelayUsers.length > 0 ? 
                relay.topTeams(6).map((t,i) => <BarImage 
                                                  type="user"
                                                  data={t} 
                                                  key={i} 
                                                  width={250} 
                                                  height={115}
                                                  title={`${i + 1}. ${t.TeamName}`}
                                                />) : null
            }
          </div>

        </div>

          <LineChart
              title="All User Activities"
              users={relay.AllRelayUsers}
          />
          <Gauge 
            width={700}
            height={400}
            percentage={relay.completionPercent(9800)}
          />
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex col-6 flex-wrap flex-column align-items-center">
          
              <h2 style={{color:'whitesmoke'}}>Individual Leaderboards</h2>
              <Bar 
                type="user"
                act="walk"
                data={relay.topSpecificUsers("walk",6)}
                width={700}
                height={400}
                title="Walks"
              />
              <Bar 
                type="user"
                act="run"
                data={relay.topSpecificUsers("run",6)}
                width={700}
                height={400}
                title="Runs"
              />
              <Bar 
                type="user"
                act="bike"
                data={relay.topSpecificUsers("bike",6)}
                width={700}
                height={400}
                title="Bikes"
              />
            </div>
            <div className="d-flex col-6 flex-wrap flex-column align-items-center">
          
              <h2 style={{color:'whitesmoke'}}>Team Leaderboards</h2>
              <Bar 
                type="team"
                act="walk"
                data={relay.topSpecificTeams("walk",6)}
                width={700}
                height={400}
                title="Walks"
              />
              <Bar 
                type="team"
                act="run"
                data={relay.topSpecificTeams("run",6)}
                width={700}
                height={400}
                title="Runs"
              />
              <Bar 
                type="team"
                act="bike"
                data={relay.topSpecificTeams("bike",6)}
                width={700}
                height={400}
                title="Bikes"
              />
            </div>

          </div>


      </div>
    </div>
  );
}

export default App;
