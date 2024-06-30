import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CreateStateContext } from "../App";
import BottomNavBar from "../components/BottomNavBar";
import "./Profile.css";
import Item from "../components/Item";
import profileImage from "../assets/profileImage.png";
import TitleSVG from "../assets/Title.svg";

const ProFile = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { InfoData, TimerData } = useContext(CreateStateContext);

  const userInfo = InfoData.find((user) => user.id === Number(id));
  const userTimer = TimerData.find((timer) => timer.id === Number(id));

  if (!userInfo) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="Cards">
        <div className="Title">
          <img src={TitleSVG} alt="Title" className="title-svg" />
        </div>
        <div className="pro">
          <img src={profileImage} alt="Profile" />
          <div className="tt">정동주</div>
          <div className="tt_1">여성, 24세</div>
        </div>
        <div className="Card">
          <div className="tt">신상기록카드</div>
          <Item type={"이름"} text={"정동주"} />
          <Item type={"전화번호"} text={userInfo.call} />
          <Item type={"성별"} text={userInfo.sex === "W" ? "여성" : "남성"} />
          <Item type={"생년월일"} text={"00/03/17"} />
          <Item type={"아버지"} text={"+82 10 3017 9020"} />
        </div>
        <div className="Card">
          <div className="tt">긴급연락전화번호</div>
          <Item type={"아버지"} text={"+82 10 3017 9020"} />
        </div>
        <div className="Card">
          <div className="tt">주소</div>
          <Item type={"집"} text={"인하시 안뇽시 인덕동"} />
        </div>
      </div>
    </>
  );
};

export default ProFile;
