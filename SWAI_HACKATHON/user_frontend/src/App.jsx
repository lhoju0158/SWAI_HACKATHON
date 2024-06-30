import { useRef, useReducer, useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Time from "./pages/Time";
import Emergency from "./pages/Emergency";
import History from "./pages/History";
import ProFile from "./pages/ProFile";
import Report from "./pages/Report";
import "./App.css";
import BottomNavBar from "./components/BottomNavBar";

const mockInfo = [
  {
    id: 1,
    username: "Dongju",
    sex: "W",
    createAt: new Date("2024-06-25").getTime(),
    call: "+82 10 1234 5678",
  },
  {
    id: 2,
    username: "Hyuckjin",
    sex: "M",
    createAt: new Date("2024-06-27").getTime(),
    call: "01012345678",
  },
  {
    id: 3,
    username: "Mina",
    sex: "W",
    createAt: new Date("2024-06-17").getTime(),
    call: "01012345678",
  },
  {
    id: 4,
    username: "Hiju",
    sex: "W",
    createAt: new Date("2024-05-27").getTime(),
    call: "01012345678",
  },
];
const mockTimer = [
  {
    timerid: 1,
    id: 1,
    createAt: new Date("2024-06-26").getTime(),
    elapsedTime: 0,
    policeCall: false,
    report: false,
  },
];
const mockComplain = [
  {
    timerid: 1,
    id: 1,
    reportId: 1,
    body1: "안경쓴 남자",
    body2: "뒤에서 자꾸 따라와요..",
    Position: { lat: 37.45264, lng: 126.6623 },
  },
];
const mockPosition = [
  {
    timerid: 1,
    id: 1,
    longitude: 111,
    latitude: 222,
    createAt: new Date("2024-06-26").getTime(),
  },
];
const mockEmergency = [
  {
    id: 1,
    name: "dongju",
    call: "0104567891",
  },
];

function TimerReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.TimerData, ...state];
    default:
      return state;
  }
}
function ComplainReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.ComplainData, ...state];
    default:
      return state;
  }
}
function PositionReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.PositionData, ...state];
    default:
      return state;
  }
}

export const CreateStateContext = createContext();
export const CreateDispatchContext = createContext();
function App() {
  const nav = useNavigate();
  const [InfoData, setInfoData] = useState(mockInfo);
  const [TimerData, Timedispatch] = useReducer(TimerReducer, mockTimer);
  const [ComplainData, Complaindispatch] = useReducer(
    ComplainReducer,
    mockComplain
  );
  const [PositionData, setPositionData] = useState(mockPosition);
  const [isBottomNavBarVisible, setIsBottomNavBarVisible] = useState(true);
  const idTimer = useRef(2);
  const idReport = useRef(2);
  const onCreateTime = (id, createAt, elapsedTime, policeCall, report) => {
    Timedispatch({
      type: "CREATE",
      TimerData: {
        timerid: idTimer.current++,
        id,
        createAt,
        elapsedTime,
        policeCall,
        report,
      },
    });
  };
  const onCreateComplain = (timerid, id, body1, body2, Position) => {
    Complaindispatch({
      type: "CREATE",
      ComplainData: {
        timerid,
        id,
        reportId: idReport.current++,
        body1,
        body2,
        Position,
      },
    });
  };

  return (
    <>
      <div className="App">
        <CreateStateContext.Provider
          value={{
            InfoData,
            TimerData,
            ComplainData,
            mockEmergency,
            PositionData,
          }}
        >
          <CreateDispatchContext.Provider
            value={{
              onCreateTime,
              onCreateComplain,
              setIsBottomNavBarVisible,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <BottomNavBar />
                  </>
                }
              />
              <Route
                path="/time"
                element={
                  <>
                    <Time />
                    {isBottomNavBarVisible && <BottomNavBar />}
                  </>
                }
              />
              <Route
                path="/emergency"
                element={
                  <>
                    <Emergency />
                  </>
                }
              />
              <Route
                path="/:id/history"
                s
                element={
                  <>
                    <History />
                    <BottomNavBar />
                  </>
                }
              />
              <Route
                path="/:id/profile"
                element={
                  <>
                    <ProFile />
                    <BottomNavBar />
                  </>
                }
              />
              <Route
                path="/:id/report"
                element={
                  <>
                    <Report />
                    <BottomNavBar />
                  </>
                }
              />{" "}
            </Routes>
          </CreateDispatchContext.Provider>
        </CreateStateContext.Provider>
      </div>
    </>
  );
}

function AppWrapper() {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
}

export default AppWrapper;
